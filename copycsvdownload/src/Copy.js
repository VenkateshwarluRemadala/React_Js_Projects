// import React from 'react';
// import './index.css';

// function Copy() {
//     const copy= (elToBeCopied)=>{
// const btnCopyTable = document.querySelector('#btn-copy-table');
// const elTable = document.querySelector('table');
// let range, sel;

// // Ensure that range and selection are supported by the browsers
// if (document.createRange && window.getSelection) {
//   range = document.createRange();
//   sel = window.getSelection();
//   // unselect any element in the page
//   sel.removeAllRanges();

//   try {
//     range.selectNodeContents(elToBeCopied);
//     sel.addRange(range);
//   } catch (e) {
//     range.selectNode(elToBeCopied);
//     sel.addRange(range);
//   }

//   document.execCommand('copy');
// }

// sel.removeAllRanges();

// console.log('Element Copied! Paste it in a file');
//     }

//   return (
//     <div>
//         <h1>saxsc</h1>
//         <button id ="btn-copy-table" onClick={()=>{copy(elTable)}}>copy</button>
//         <div class= "table-container">
//         <table>
//             <thead>
//                 <tr>
//                     <th>name</th>
//                     <th>age</th>
//                     <th>phone</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>venkat</td>
//                     <td>20</td>
//                     <td>999</td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     </div>
//   )
// }

// export default Copy
