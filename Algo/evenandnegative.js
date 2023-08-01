
function countEvenNegatives(nums) { 
    var count  = 0;
    if (nums.length){
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