export default [{
    name: "cms",
    path: "/cms",
    component: resolve => require(['Pages'], resolve),
    children: [{
        name: "page1.1",
        path: "/cms/page1/page1.1",
        meta: {
            title: 'page1.1title'
        },
        component: resolve => require(['Pages/page1/page1.1'], resolve)
    }, {
        name: "page2",
            path: "/cms/page2",
        meta: {
            title: 'page2title'
        },
        component: resolve => require(['Pages/page2'], resolve)
    }]
}]
