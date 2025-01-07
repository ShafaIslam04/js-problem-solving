// Q1. Print Odd numbers between 0 to 100f

// for(let i=0; i<100; i++){
//     if(i%2!==0){
//         console.log("odd number",i)
//     }
// }

// let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]

// let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
// let temp;

// for (let i = 0; i < $numbers.length; i++) {
//   for (let j = i + 1; j < $numbers.length; j++) {
//     if ($numbers[i] > $numbers[j]) {
//       temp = $numbers[i];
//       $numbers[i] = $numbers[j];
//       $numbers[j] = temp;
//     }
//   }
// }

// console.log($numbers); 

// Q3. Calculate the sum of numbers within $numbers (reduce method)


 

//   let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];

// const totalSum = $numbers.reduce((acc, currentValue) => {
//   return acc + currentValue;
// }, 0);

// console.log(totalSum); 

// Q4. Remove similar numbers from $numbers. 

// let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];

// for (let i = 0; i < $numbers.length; i++) {
//   for (let j = i + 1; j < $numbers.length; j++) {
//    if(i!=j){
//     if ($numbers[i] === $numbers[j]) {
      
//         $numbers.splice(j, 1);
        
//       }
//    }
//   }
// }

// console.log($numbers); 

// Q5. Filter out negative numbers from $numbers2.



// let $numbers = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]

// for(let i=0;i<$numbers.length;i++){
//     if($numbers[i]>0){
//         console.log($numbers[i])
//         $numbers.splice($numbers[i],1)
        
//     }
// }
// console.log($numbers);

// Return numbers in $numbers divisible by 10
// let $numbers = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]
// for(let i = 0; i<$numbers[i];i++){
//    if($numbers[i]/10){
//     console.log(i)
//    }
// }

// Q7. Return the number of vowels in a string. Example: vowels (‘ How are you ’) => 5
// let vowels = 'How are you'
// // function getVowels(str) {
// //     var vowelsCount = 0;
  
    
//     var string = vowels.toString();
//        let vowelCount = 0;
    
//     for (var i = 0; i <= vowels.length; i++) {
  
    
//       if (string.vowels(i) == "a" || string.vowels(i) == "e" || string.vowels(i) == "i" || string.vowels(i) == "o" || string.vowels(i) == "u") {
//         vowelCount += 1;
//       }
//     }
//     console.log(vowelCount)


