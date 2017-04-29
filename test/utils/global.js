import { JSDOM as JsDom } from 'jsdom'

const setGlobalWindow = (win) => {
  global.window = win
  global.navigator = win.navigator
}

const setGlobalDocument = (doc) => {
  global.document = doc
}

export const setMarkup = (markup) => {
  setGlobalDocument(new JsDom(markup))
}

const rewireDocument = ({ document, window }) => {
  let oldDocument
  let oldWindow
  beforeEach(() => {
    oldDocument = global.document
    oldWindow = global.window
    setGlobalDocument(document)
    setGlobalWindow(window)
  })
  afterEach(() => {
    setGlobalDocument(oldDocument)
    setGlobalWindow(oldWindow)
  })
}

export const rewireMarkup = (markup) => rewireDocument(new JsDom(markup))

export const rewireWindow = (win) => {
  let oldWindow
  beforeEach(() => {
    oldWindow = global.window
    setGlobalWindow(win)
  })
  afterEach(() => setGlobalWindow(oldWindow))
}
