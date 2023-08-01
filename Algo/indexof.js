function indexOf(items, searchItem) {
    if (!(isNaN(searchItem))){
        return -1
    }
    else{
        for(var i = 0 ; i < items.length ; i++){
            if (items[i] == searchItem){
                return i
            }
        }
    }
}

var a = indexOf(["c","a","b"],1);
console.log(a)