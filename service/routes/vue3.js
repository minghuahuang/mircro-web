const router = require('koa-router')()

router.prefix('/vue3')

router.get('/getMsg', function (ctx, next) {
  ctx.body = {
    code: 200,
    data: 'vue3',
    message: '操作成功'
  }
})

module.exports = router