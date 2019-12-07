module.exports = api => {
  const { router, playlistService } = api

  router.get('/playlist', async ctx => {
    const { length = 20 } = ctx.query
    ctx.body = playlistService.generate(length)
  })
}
