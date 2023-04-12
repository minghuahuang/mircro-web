const router = require('koa-router')()

router.prefix('/vue2')

router.get('/getMsg', function (ctx, next) {
  ctx.body = {
    code: 200,
    data: 'vue2',
    message: '操作成功'
  }
})

module.exports = router