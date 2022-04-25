
export const filehandler = {
    readAllMd(...options){
        let files = require.context('../assets/article', false, /.md$/);
        let filesObject = {};

        if(options[0] === true){
            let filesName = new Array();
            files.keys().forEach(path => {
                filesName.push(path.replace(/\.\//g,""))
            })
            return filesName;
        }

        files.keys().forEach(path => {
            filesObject[path.replace(/\.\//g,"").replace(/\.md/g,"")] = files(path).default;
        });
        return filesObject;
    }
};

export const getImport = function(){};

export let getCom = filehandler.readAllMd();