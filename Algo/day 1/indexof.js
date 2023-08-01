function indexOf(items, searchItem) {
    if (!(isNaN(searchItem)) || items.length == 0){
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

var a = indexOf([],"c");
console.log(a)