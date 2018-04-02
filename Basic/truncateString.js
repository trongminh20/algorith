//adding ... at the end of the string 
function truncateString(str, num){
    if(str.length <= num){
        return str;
    }
    else if(str.length > num && num > 3){
        return str.slice(0, num - 3) + '...';
        // because '...' = 3 in length
    }
    else if(num <= 3){
        return str.slice(0, num)+'...';
    }
}

console.log(truncateString('this is testing the truncat function',6));

console.log(truncateString('trung', 3));
