//1 no difference

//2
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

//3
function min(a,b){
    if(a>b){ return b;}
    return a;
}
//4

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }