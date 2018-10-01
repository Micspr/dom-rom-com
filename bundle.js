(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const movies = [
    { title: 'Say Anything...', year: 1989, score: '98%', starring: 'John Cusack, Ione Skye, John Mahoney, Lili Taylor' },
    { title: 'Groundhog Day', year: 1993, score: '96%', starring: 'Bill Murray, Andie MacDowell, Chris Elliott, Stephen Tobolowsky' },
    { title: 'Obvious Child', year: 2014, score: '90%', starring: 'Jenny Slate, Gaby Hoffmann, David Cross, Jake Lacy' }
]

module.exports = movies
},{}],2:[function(require,module,exports){
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
},{"./data":1,"./template":3}],3:[function(require,module,exports){
// const movies = require('./data')

// const returnsInnerHTML = movie => {
//     return `
//     <tr>
//         <td>
//             ${movie.title}
//         </td>
//         <td>
//             ${movie.year}
//         </td>
//         <td>
//             ${movie.score}
//         </td>
//         <td>
//             ${movie.starring}
//         </td>
//     </tr>`
// }

const returnsInnerHTML = ({title, year, score, starring}) => (`<tr><td>${title}</td><td>${year}</td><td>${score}</td><td>${starring}</td></tr>`)

module.exports = returnsInnerHTML
},{}]},{},[2]);
