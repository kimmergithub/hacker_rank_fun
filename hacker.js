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


// the stairs

for (let i = 0; i < (n * n); i++){
        if ( (counter === n) && (hash.length !== n) ){
            hash += '#';
        } else if ( (counter === n) && (hash.length === n) ){
            console.log(hash);
            counter--
        } else if ( (counter < n) && (counter !== 0) ){
            let split = hash.split('');
            split[n - (counter + 1)] = ' ';
            hash = split.join('');
            console.log(hash);
            counter--
        }
    }


  // REAL ANSWER THAT WORKS
  function main() {
    var n = parseInt(readLine());
    let counter = n;
    let hash = ''
    for (let i = 0; i < (n * n); i++){
        if ( (counter === n) && (hash.length !== n) ){
            hash += ' ';
        } else if ( (counter === n) && (hash.length === n) ){
            let split = hash.split('');
            split[split.length - 1] = '#'
            hash = split.join('');
            console.log(hash);
            counter--
        } else if ( (counter < n) && (counter !== 0) ){
           split = hash.split('');
           split[counter - 1] = '#'
           hash = split.join('');
           console.log(hash);
           counter--
        }
    }
}

// reversing a string / array thing
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    answer = arr.reverse().join(' ');
    console.log(answer);
}

//  === running it through a reverse forloop;
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let answer = [];
   for (let i = arr.length; i > 0; i--){
       answer.push(arr[i - 1]);
   }
    console.log(answer.join(' '))
}


// Hourglass javascript solution === I don't understand this yet

function main() {

  // this first block is the given information
   var arr = [], count = -63;

    // This takes all the inputs and puts them into an array so that you can manipulate them
    for(let arr_i = 0; arr_i < 6; arr_i++){

       arr[arr_i] = readLine().split(' ');

       arr[arr_i] = arr[arr_i].map(Number);

       console.log(arr[arr_i])
    }

    // this is very specific for the size of the matrix that you are going to be going through and summing up the hourglasses === this is NOT an one size fits all answer.
   for( i = 0 ; i < 4 ; i ++)
        {
        for( j = 0 ; j < 4 ; j ++)
            {
            var t;


            // this is the hourglass shape that corresponds to the matrix so you can cut out an do the addition on the item...
            t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];


            if( t > count )
                {
                count = t ;
            }
        }
    }

    console.log()

    console.log(count);
}

// MY SOLUTION TO THIS PROBLEM

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    // going to use a forloop that goes throught the legnth of 4 because this is the limits of the hoursglass top to bottom for the matrix size.
    let answer = -100;

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            let pH = 0;
            // need to define the shape of the hourglass?
           pH = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
           if (pH > answer){
           answer = pH;
           };

        };
    };
    console.log(answer);
};

// POSSIBLE LEFT ROTATION SOLUTION === SEEMS TO TIME OUT ON A FEW

let answer;
function leftRotation(a, d) {
    // Complete this function

    for (let i = 0; i < d; i++){
      a.push( a[0] )
       a.shift();
        answer = a.join(' ');
    }
}
