module.exports = api => {
  const { router } = api

  router.get('/playlist', async ctx => {
    ctx.body = []
  })
}
