const service = {
    deepClone: function deepClone(target){
        if(typeof target !== 'object' || target === null){
            return target;
        }else{
            var newobj = target.constructor === Array?[] :{};
            for(var key in target){
                newobj[key] = this.deepClone(target[key]);
            }
            return newobj;
        }
    }
};

export default service;