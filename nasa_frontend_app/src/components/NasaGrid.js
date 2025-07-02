// // src/components/NasaGrid.js
// import React from 'react';

// const NasaGrid = ({ items, onImageClick }) => {
//   return (
//     <div className="container py-4 py-xl-5">
//       <div className="row mb-4">
//         <div className="col-md-8 col-xl-6 text-center mx-auto">
//           <h2>NASA Astronomy Pictures</h2>
//           <p className="w-lg-50">Click on any image to view in full with details.</p>
//         </div>
//       </div>
//       <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
//         {items.map((item, index) => (
//           <div className="col" key={index}>
//             <div role="button" onClick={() => onImageClick(item)}>
//               <img
//                 className="rounded img-fluid d-block w-100 fit-cover"
//                 style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
//                 src={item.url}
//                 alt={item.title}
//               />
//               <div className="py-3">
//                 <h5>{item.title}</h5>
//                 <p className="text-truncate">{item.explanation}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NasaGrid;
