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
