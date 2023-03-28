
function isValid(s) {
    let st = [];
  
    for (let i = 0; i < s.length; i += 1) {
        let top = st[st.length - 1];
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            st.push(s[i]);
        } 
        else if (s[i] === ')' && top === '(' && st.length !== 0) {
            st.pop();
        } 
        else if (s[i] === ']' && top === '[' && st.length !== 0) {
            st.pop();
        } 
        else if (s[i] === '}' && top === '{' && st.length !== 0) {
            st.pop();
        } 
        else {
            return false;
        }
    }
  
  return st.length === 0;
};

let s="()";

console.log(isValid(s))

