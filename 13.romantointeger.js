
function getValue(str) {

    if (str == 'I'){
        return 1;
    }
    if (str == 'V'){
        return 5;
    }
    if (str == 'X'){
        return 10;
    }
    if (str == 'L'){
        return 50;
    }
    if (str == 'C'){
        return 100;
    }
    if (str == 'D'){
        return 500;
    }
    if (str == 'M'){
        return 1000;
    }

    return -1;
}

function romanToInt(s) {
    let ans = 0;
  
     for (i = 0; i < s.length; i++){
         
         let s1 = getValue(s[i]);
  
         if (i + 1 < s.length){ 

             let s2 = getValue(s[i+1]);

             if (s1 >= s2){  
                 ans+= s1;
             } 
             else{
                 ans+= s2 - s1;
                 i++;
             }
         } 
         else{
             ans+= s1;
         }
     }
     return ans;

};

let res = romanToInt("MVIII");

console.log(res);
