'use strict';


function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    let figures = [b0, b1, b2];
    let array = [a0, a1, a2];
    let a = 0;
    let b = 0;
    for (let i = 0; i < array.length; i++){

      if ( array[i] > figures[i] ){
        a++;
      } else if ( array[i] < figures[i] ){
        b++;
      } else {
        console.log('no points');
      }

    }

      return a + ' ' + b;
}

solve(5, 6, 7, 3, 6, 10)

function aVeryBigSum(n, ar) {
    // Complete this function
    let answer = 0;
    for (let i = 0; i < ar.length; i++) {
        answer = answer + ar[i];
    }
    console.log(answer);
    return answer;
}


function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    let firstCross = a[0][0] + a[1][1] + a[2][2];
    let secondCross = a[2][0] + a[1][1] + a[0][2];
    let answer = (Math.abs(firstCross - secondCross));
    console.log(answer);

}
