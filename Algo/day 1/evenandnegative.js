
function countEvenNegatives(nums) { 
    var count  = 0;
    if (nums.length == 0){
        return 0
    }
    else{
        for(var i = 0 ; i <= nums.length ; i++){
            if ((nums[i] < 0) && (nums[i] % 2 == 0)){
                count++
            }
        }
    }
    return count;
}

var a = countEvenNegatives([1, 5, -1, 2, -4, 9, -10, 0, -3, -2]);
console.log(a)