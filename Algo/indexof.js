function indexOf(items, searchItem) {
    if (!("A" <= searchItem.ToUpperCase() <= "Z")){
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