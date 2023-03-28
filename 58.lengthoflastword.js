
function lengthOfLastWord(s) {
    let count=0;
    let i = s.length-1;
    while(i>=0){
       if(s[i]==' ' && count!=0){
           break;
       } 
       else if(s[i]==' ' && count==0){
           i--;
           continue;
        
       }
       i--;
       count++;
    }
    return count;
};

let s="Hello World"

console.log(lengthOfLastWord(s))