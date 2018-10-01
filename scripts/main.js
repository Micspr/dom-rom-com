// const heading = document.querySelector('h1').textContent
// const rows = document.querySelectorAll('tr')
// console.log(heading)
// console.log(rows)

// document.querySelector('h1').textContent = 'DOM Romantic Comedy'

// const years = document.querySelectorAll('tr > td:nth-child(2)')
// for(let year of years){
//     console.log(year.textContent)
// }

// const numberOfActors = document.querySelectorAll('tr > td:nth-child(4)')
// console.log(numberOfActors)

// for(let actor of numberOfActors) {
//     actor.textContent = `${actor.textContent} , (${numberOfActors.length})`
// }

// const jumbotron = document.querySelector('.jumbotron')
// jumbotron.classList.remove('bg-dark')
// jumbotron.classList.add('bg-warning')
const movies = require('./data')
const innerHTMLFunction = require('./template')

// document.querySelector('tr').innerHTML = innerHTMLFunction(movies)
const moviesHTML = movies.map(innerHTMLFunction)

document.querySelector('tbody').innerHTML = moviesHTML.join('\n')

console.log(movies)