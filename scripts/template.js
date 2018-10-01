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