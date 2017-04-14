
export default async function (ctx) {
  await ctx.render('index', {
    user: 'John'
  })
}
