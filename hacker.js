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

// PROMISE AND CALL BACKS EXAMPLE EXPLAINED:

// the promise is to clean the room... the resolve/reject passthrough function arguments are the callback...
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  // cleaning the room
  let isClean = true;

  if (isClean){
    resolve('Clean');
  } else {
    reject();
  }
});

// Call backs are pretty self explanatory === promises can be used anywhere and everywhere.
// Promises keep you code clean because you can individually define them and you don't have run callback upon callback upon callback...
promiseToCleanTheRoom.then(funciton (fromResolve){
  console.log('room is clean ' + fromResolve);
}).catch(function(fromReject){
  console.log('the room is ' + fromReject);
});

// JUST GOING TO KEEP ON PUTTING IN SOLUTIONS HERE:

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    let neg = 0;
    let pos = 0;
    let zero = 0;

   arr.forEach(ele => {
       if (ele < 0) {
           neg++
       } else if (ele > 0){
           pos++
       } else {
           zero++
       }
   })
    neg = (neg / n)
    pos = (pos / n)
    zero = (zero / n )

    console.log( pos.toFixed(6) )
    console.log( neg.toFixed(6) )
    console.log( zero.toFixed(6) )

}
