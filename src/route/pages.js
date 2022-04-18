import main from '../App.vue'
    import welcome from '../views/welcome.vue'

const pages = [
    {
        path: '/',
        redirect: '/main/welcome',
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                meta: {
                    title: '欢迎来到我的blog'
                },
                component: welcome,
            }
        ]
    }
]

export default pages;