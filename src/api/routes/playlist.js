module.exports = api => {
  const { router, playlistService } = api

  router.get('/playlist', async ctx => {
    ctx.body = playlistService.generate(20)
  })
}
