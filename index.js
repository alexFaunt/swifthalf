/* eslint-disable global-require, import/newline-after-import, no-console */
require('babel-register')
require('babel-polyfill')

const path = require('path')

const getApp = () => require('./server').default
const startApp = () => getApp().listen(process.env.PORT || 3000, (error) => {
  if (error) console.error(error)
  else console.log('App started!')
})

// start the app!
let server = startApp()

// In dev mode we need to destroy the cache and restart the server if there are file changes
// Or server side render will be wrong.
if (process.env.NODE_ENV !== 'production') {
  const enableDestroy = require('server-destroy')
  enableDestroy(server)
  const appDelete = () => {
    // delete everything from the require cache
    Object.keys(require.cache)
      .forEach((id) => {
        if (!id.includes('node_modules')) delete require.cache[id]
      })

    // Kill the server and when complete restart it.
    console.log('CLOSE SERVER')
    server.destroy(() => {
      console.log('App restarting...')
      try {
        server = startApp()
        enableDestroy(server)
      }
      catch (error) {
        console.error(error)
      }
    })
  }

  // Watching file system with chokidar
  const chokidar = require('chokidar')
  const toWatch = [path.join(__dirname, './server/'), path.join(__dirname, './app/')]
  const watcher = chokidar.watch(toWatch)
  watcher.on('ready', () => watcher.on('change', () => appDelete()))
}
