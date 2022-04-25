import welcome from '../views/welcome.vue'
import mainStructure from '../views/mainStructure.vue'
    import articlePages from '../views/sections/articlePages.vue'
    import articleList from '../views/sections/articleList.vue'
import about from '../views/about.vue'

const pages = [
    {
        path: '/',
        redirect: '/welcome',
    },
    {
        path: '/blog',
        redirect: '/articleList',
    },
    {
        path: '/welcome',
        name: 'welcome',
        meta: {
            title: 'welcome',
            pageIndex: 1
        },
        component: welcome,
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'aboutpages',
            pageIndex: 2
        },
        component: about,
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
            title: 'structure',
            pageIndex: 3
        },
        component: mainStructure,
        children: [
            {
                path: '/articlePages',
                name: 'articlePages',
                meta: {
                    title: 'articleContainer',
                    componentIndex: 1
                },
                component: articlePages,
            },
            {
                path: '/articleList',
                name: 'articleList',
                meta: {
                    title: 'articleListContainer',
                    componentIndex: 2
                },
                component: articleList,
            }
        ]
    },
]

export default pages;