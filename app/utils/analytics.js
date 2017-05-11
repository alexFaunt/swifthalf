export default (...ev) => {
  if (process.browser) window.ga('send', ...ev)
  return ev
}
