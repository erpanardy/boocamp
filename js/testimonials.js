// function sayHello (){
//     console.log('hello')
// }

// function saygoodMorming() {
//     console.log('helo selamat pagi')
// }

// function printWithTimeout(cb){
//     console.log('waiting for device')
//     console.log('found devicr : x')
//     console.log('start printing...')
//     setTimeout(() => {
//         console.log('finis printing ')
//     }, 3000) 
// }

// printWithTimeout(saygoodMorming)

// SISTEM PURCHASE

// function discoun25(price){
//     return price - ( price * 25 / 100 )
// }
// function discoun50(price){
//     return price -(price * 50 / 100)
// }
// function discoun100(price){
//     return price -(price * 100 / 100)
// }

// function purchase(price, callback){
//     const discountedPrice = callback(price)
//     console.log(`final price : ${discountedPrice}`)
// }
// function purchasewithDiscount25(price){
//     const discountedPrice = price - (price * 25 / 100 )
//     console.log(`final price : ${discountedPrice}`)
// }
// function purchasewithDiscount50(price){
//     const discountedPrice = price - (price * 50 / 100 )
//     console.log(`final price : ${discountedPrice}`)
// }
// function purchasewithDiscount100(price){
//     const discountedPrice = price - (price * 100 / 100 )
//     console.log(`final price : ${discountedPrice}`)
// }

// purchasewithDiscount25(5000)


// HOF BUILT-IN


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let result = 0

// for(let i = 0; i < numbers.length; i++)
//     result += numbers[i]
// console.log(result)

//  1.FOREACH
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = 0

// // numbers.forEach((number) => {
// //     result += number
// // })
// function sum(number){
//     result += number
// }

// // // arrow funtion
// // const sum (number) => {
// //     result += number
// // }

// // // anonymous funtion 
// // const sum =function (number) {
// //     result += number
// // }

// numbers.forEach(sum)
// console.log(result)


// 2.MAP

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const dobleNumber = numbers.map(number => {
//     return number * 2
// })

// let result = 0

// dobleNumber.forEach((dobleNumber) =>{
//     result += dobleNumber
// })
// console.log(result)

// 3.FILLTER

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddnumbers = numbers.filter((number) => {
//     if(number % 2 == 1)return true
//     return false
// })
// console.log(oddnumbers)

// CASE FILTER : SCRINING PROFIL KADIDAT

// const candidats = [
//     {
//         name : 'A',
//         score : 60,
//         expetadSallary : 100,
//         prefferedPosition : 'Frontend'
//     },
//     {
//         name : 'B',
//         score : 70,
//         expetadSallary : 200,
//         prefferedPosition : 'backend'
//     },
//     {
//         name : 'C',
//         score : 80,
//         expetadSallary : 300,
//         prefferedPosition : 'Fullstack'
//     },
//     {
//         name : 'D',
//         score : 90,
//         expetadSallary : 400,
//         prefferedPosition : 'Web developer'
//     }
// ]

// const criteria = {
//     score : 30,
//     expetadSallary : 200,
//     prefferedPosition : "backend"
// };

// const passCandidats= candidats.filter((candidat) =>{
//     if(
//         candidat.score >= criteria.score && 
//         candidat.expetadSallary <=  criteria.expetadSallary &&
//         candidat.prefferedPosition == criteria.prefferedPosition || 
//         candidat.prefferedPosition == "Frontend" 
//     )
//     return true;

//     return false;
// });

// console.log(passCandidats)

// 4.RESDUCE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce((prev,curr) => {
//     return 0 + 1
// }, 1)
// console.log(sum)

async function getAllTestimonials() {
  try {
    let testimonials = await fetch (
      "https://api.npoint.io/547ddcee77fc53903251"
    );
    testimonials = await testimonials.json();

    const testimonialHTML = testimonials.map((testimonial) => {
      return `  <div class="col">
    <div class="card">
      <img src="${testimonial.images}" class="card-img-top p-3" style="height: 300px;" alt="...">
      <div class="card-body">
        <h5 class="card-title fst-italic">"${testimonial.content}"</h5>
        <p class="author d-flex justify-content-end ">${testimonial.author}</p>
        <p class="d-flex justify-content-end"><i class="fa-solid fa-star bg-black text-white rounded-2 text-center" style="width: 4rem;">${testimonial.start}</i></p>
      </div>
    </div>
  </div>`;
    })
    document.getElementById('testimoni').innerHTML = testimonialHTML.join("");
  } catch(error){
    console.error(error);
  }
}

async function getTestimonialByStart(start) {

  try{
    let testimonials = await fetch (
      "https://api.npoint.io/547ddcee77fc53903251"
    )
    testimonials = await testimonials.json();

    const filteredTestimonials = testimonials.filter((testimonial) => {
      return testimonial.start === start; 
    });

    const testimonialHTML = filteredTestimonials.map((testimonial) => {
      return `  <div class="col">
    <div class="card">
      <img src="${testimonial.images}" class="card-img-top p-3" style="height: 300px;" alt="...">
      <div class="card-body">
        <h5 class="card-title fst-italic">"${testimonial.content}"</h5>
        <p class="author d-flex justify-content-end ">${testimonial.author}</p>
        <p class="d-flex justify-content-end"><i class="fa-solid fa-star bg-black text-white rounded-2 text-center" style="width: 4rem;">${testimonial.start}</i></p>
      </div>
    </div>
  </div>`;;
    });

    document.getElementById("testimoni").innerHTML = testimonialHTML.join("");
  }catch (error){
    console.error(error)
  }
}
getAllTestimonials();