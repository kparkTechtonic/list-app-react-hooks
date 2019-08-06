Array.prototype.reIndexOf = function (rx) {
    for (var i=1;i<this.length ;i++) {
        if (this[i].toString().match(rx)) {
            if(i===0){
                continue
            }
            if(i==="reIndexOf"){
                return -1
            }
            return Number(i);
        }
    }
    return -1;
};