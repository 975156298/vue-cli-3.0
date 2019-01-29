import router from './router'
import store from './store'

// 路由跳转前的验证
router.beforeEach((to, from, next) => {
    console.log(store.getters.name)
    next()
})

router.afterEach(() => {
    // 路由跳转结束后
})
