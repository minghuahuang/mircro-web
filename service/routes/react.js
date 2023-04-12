const router = require('koa-router')()

router.prefix('/react')

router.get('/getMsg', function (ctx, next) {
  ctx.body = {
    code: 200,
    data: 'react',
    message: '操作成功'
  }
})

module.exports = router