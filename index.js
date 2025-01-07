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
// // let $numbers = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]
// for (let i = 0; i < $numbers.length; i++) {
//     if ($numbers[i] % 10 === 0) { 
//        console.log($numbers[i]); 
//     }
//  }

// Q7. Return the number of vowels in a string. Example: vowels (‘ How are you ’) => 5
// let vowels = 'How are you';
// let string = vowels.toString();
// function getCount(str){
//     let vowelCount = 0;
//     for(let i =0;i<vowels.length;i++){
//         if(str[i] == "a"|| str[i] == "e"|| str[i] == "i"||str[i] == "o"||str[i] == "u" ){
//             vowelCount++  
//         }
//     }

//     return vowelCount
// } 

// console.log(getCount(string))


// Q8. Arrange products from highest price to lowest.

const phoneData = [
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
  ];
  
  const table = document.getElementById('table');
  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Price', 'Brand', 'Rating', 'Discount'];
  
  
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  
//   Q8. Arrange products from highest price to lowest

  const sortedData = phoneData.sort((priceA, priceB) => priceB.price - priceA.price);
  
  
  sortedData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.brand}</td>
      <td>${data.rating.average}</td>
      <td>${data.discount}</td>
    `;
    table.appendChild(row);
  });
  
//   Q9. Using a javascript array method add a new field (discounted_price) to each of the objects in the 
//   array. Calculate the discounted_price form price and discount. discounted_price should be 2 decimal places.






const updatedPhoneData = phoneData.map(data=>{
   
    const discount = parseInt(data.discount) || 0;
    const discountedPrice = data.price - (data.price)*(discount/100);
    return{
        ...data,
        discounted_price :discountedPrice.toFixed(2)

    }

}) 
console.log(updatedPhoneData)


const second_table = document.getElementById('second-table');
const second_row = document.createElement('tr')

const updatedHeader = ['Name', 'Price', 'Brand', 'Rating', 'Discount','discounted_price']


updatedHeader.forEach(header=>{
    const th = document.createElement('th');
    th.textContent=header;
    second_row.appendChild(th)
})
second_table.appendChild(second_row)
 
updatedPhoneData.forEach(data=>{
    const row = document.createElement('tr');
    row.innerHTML=`
      <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.brand}</td>
      <td>${data.rating.average}</td>
      <td>${data.discount}</td>
       <td>${data.discounted_price}</td>
    
    `
    second_table.appendChild(row)
})


// Q10. Arrange products from highest discounted_price to lowest.
 
const third_table = document.getElementById('trird-table')
const third_row = document.createElement('tr')
const header = ['Name', 'Price', 'Brand', 'Rating', 'Discount','discounted_price'];
header.forEach(data=>{
    const th = document.createElement('th');
    th.textContent=data;
    third_row.appendChild(th)

})
third_table.appendChild(third_row )

const sortedDiscount = updatedPhoneData.sort((highestPrice,lowestPrice)=>lowestPrice.discounted_price-highestPrice.discounted_price)
sortedDiscount.forEach(data=>{
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.brand}</td>
      <td>${data.rating.average}</td>
      <td>${data.discount}</td>
       <td>${data.discounted_price}</td>

    `
    third_table.appendChild(tr)
})

// Q11. Arrange the products from the highest average rating to the lowest.
const fourth_table = document.getElementById('fourth-table');
const fourth_row = document.createElement('tr');
 const fourth_header = ['Name', 'Price', 'Brand', 'Rating', 'Discount','discounted_price'];
 fourth_header.forEach(data=>{
    const th = document.createElement('th')
    th.textContent=data;
    fourth_row.appendChild(th)
 })
 fourth_table.appendChild(fourth_row);

 const sortedRatings = phoneData.sort((highestRating,lowestRating)=>lowestRating.rating.average-highestRating.rating.average)
 sortedRatings.forEach(data=>{
    const row = document.createElement('tr')
    row.innerHTML=`
     <td>${data.name}</td>
      <td>${data.price}</td>
      <td>${data.brand}</td>
      <td>${data.rating.average}</td>
      <td>${data.discount}</td>
       <td>${data.discounted_price}</td>
    `
    fourth_table.appendChild(row)
 })
 
//  Q12. Find iPhones that will cost less than $500
 const fifth_table = document.getElementById('fifth-table');
 const fifth_row = document.createElement('tr')
 const fifthHeader = [ 'Price', 'Brand'];
 fifthHeader.forEach(data=>{
    const th = document.createElement('th');
    th.textContent=data;
    fifth_row.appendChild(th)
 })
 fifth_table.appendChild(fifth_row)

 const filteredPhone = phoneData.filter(phone=>phone.brand==='iphone' && phone.price<550 )
 filteredPhone.forEach(data=>{
    const row = document.createElement('tr');
    row.innerHTML=`
    <td>${data.price}</td>
      <td>${data.brand}</td>
      
    `
    fifth_table.appendChild(row)
 })


//  Q13. Get all phones from Samsung and iPhone which will cost more than $400

const last_table = document.getElementById('last-table');
const last_row = document.createElement('tr')
const lastHeader = [ 'Price', 'Brand'];
fifthHeader.forEach(data=>{
   const th = document.createElement('th');
   th.textContent=data;
   last_row.appendChild(th)
})
last_table.appendChild(last_row)

const Phones = phoneData.filter(phone=>(phone.brand === 'iphone' || phone.brand === 'samsung') && phone.price > 400 )
filteredPhone.forEach(data=>{
   const row = document.createElement('tr');
   row.innerHTML=`
   <td>${data.price}</td>
     <td>${data.brand}</td>
     
   `
   last_table.appendChild(row)
})









