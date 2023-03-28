
function longestCommonPrefix(strs) {
    strs.sort();
    let a= strs[0], b=strs[strs.length-1];
    let ans="";

    for(let i=0;i<a.length;i++){
        if(a[i]==b[i]){
            ans+=a[i];
        }
        else{
            break;
        }
        
    }
    return ans;  
};

let strs = ["flower","flow","flight"];

console.log(longestCommonPrefix(strs));
