/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoHub from '@/components/DemoHub'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/demohub',
            name: 'DemoHub',
            component: DemoHub
        }
    ]
})
