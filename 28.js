function solution(str, ending){
    let aLen = str.length;
    let bLen = ending.length;
    let arr1 = [];
    let arr2 = [];
    if(bLen === 0){
      return true
    } else {
    for(j = aLen - bLen; j < aLen; j++){
       arr1.push(str[j]);
           }
    for(i = 0; i < bLen; i++){
        arr2.push(ending[i])
    } 
    if(arr1 == arr2) {
        return true
    } else {
        return false
    }
    }
  }
    console.log(solution('abc', 'bc'))
function equal(a, b){
   return(a === b) 
}
console.log(equal("[4,3]", "[4,2]"))