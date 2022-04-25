// 文章目录管理文件
const list = {
    // 新建目录请在moduleName之中加入目录名，如example目录(该目录不会被加载，请勿写在此目录)
    example: {
        moduleName: '目录名',
        // 像下面一样加入目录下文章即可
    },
    initmodule: {
        moduleName: null,
        // 请不要取相同的名字
        // 譬如已经有article1请不要再重复取名article1，将会导致错误,
        // 跨目录也是如此，文件名不能完全相同，但title允许相同（title会被展示而文件名不会）

        // 格式为：
        // 文件名: {
        //     title: '文章标题',
        //     overview: '文章简介',
        // },        
        article1: {
            title: 'Test article',
            overview: 'this is a markdown article'
        },
        article2: {
            title: 'Test article2',
            overview: 'this is another markdown article'
        }        
    }
};

export default list;