// let btn1 = document.querySelector('.box-1')
// btn1.addEventListener('click', function(){
//     alert('hello')
// })
// revealBtn = document.querySelector('.reveal-btn')
// hiddenContent = document.querySelector('.hidden-class')

// function revealContent() {
//     if (hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn')
//     } else {
//         hiddenContent.classList.add('reveal-btn')
//         revealBtn.innerText = 'Hide Content'
//     }
// }
// revealBtn.addEventListener('click', revealContent)

// document.querySelector('#foods').addEventListener('click', function(e) {
//     console.log("hello world")
// const target = e.target
// if (target.matches('li')) {
//     target.style.backgroundColor = "red"
// }    
// })

// const sports = document.querySelector('#foods')
// const newFood = document.createElement('li')

// newFood.innerText = 'dates'
// newFood.setAttribute('id', 'dates')
// newFood.setAttribute('class', 'list-items')

// sports.append(newFood)


const btn = document.querySelector('.new-quote')
const quote = document.querySelector('.message-box')
const person = document.querySelector('.person')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch("https://api.quotable.io/quotes/random")
    .then(function(response) {
    return response.json(); 
    })
    .then(function(data) {
        // const randomIndex = Math.floor(Math.random() * data.length);
        // const randomText = data[randomIndex].content
        // const randomPerson = data[randomIndex].author
        if (Array.isArray(data) && data.length > 0) {
            const quoteData = data[0]; // Access the first object in the array
            const randomText = quoteData.content;
            const randomPerson = quoteData.author;

            quote.innerText = randomText;
            person.innerText = randomPerson;
        } else {
            console.error("Invalid response format");
        }
    })
    .catch(function(error) {
    console.error("Error fetching quotes");
    });
})