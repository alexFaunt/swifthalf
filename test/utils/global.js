import { jsdom } from 'jsdom'

const setGlobalWindow = (win) => {
  global.window = win
  global.navigator = win.navigator
}

const setGlobalDocument = (doc) => {
  global.document = doc
  setGlobalWindow(doc.defaultView)
}

export const setMarkup = (markup) => {
  setGlobalDocument(jsdom(markup))
}

const rewireDocument = (doc) => {
  let oldDocument
  beforeEach(() => {
    oldDocument = global.document
    setGlobalDocument(doc)
  })
  afterEach(() => setGlobalDocument(oldDocument))
}

export const rewireMarkup = (markup) => rewireDocument(jsdom(markup))

export const rewireWindow = (win) => {
  let oldWindow
  beforeEach(() => {
    oldWindow = global.window
    setGlobalWindow(win)
  })
  afterEach(() => setGlobalWindow(oldWindow))
}
