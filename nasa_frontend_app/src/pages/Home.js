// import React, { useEffect, useState } from 'react';
// import ApodCard from '../components/ApodCard';
// import Pagination from '../components/Pagination';

// const ITEMS_PER_PAGE = 10;

// const Home = () => {
//   const [apods, setApods] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const endDate = new Date();
//     const startDate = new Date();
//     startDate.setDate(endDate.getDate() - 29);

//     const format = (d) => d.toISOString().split('T')[0];

//     const getData = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.REACT_APP_API_BASE_URL}/api/nasa/apod?start_date=${format(startDate)}&end_date=${format(endDate)}`
//         );

//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }

//         let data = await res.json();
//         if (!Array.isArray(data)) data = [data];
//         setApods(data.reverse());
//         setError(null);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to fetch data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentItems = apods.slice(startIdx, startIdx + ITEMS_PER_PAGE);
//   const totalPages = Math.ceil(apods.length / ITEMS_PER_PAGE);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>NASA APOD Viewer</h1>
//       {currentItems.map((apod) => (
//         <ApodCard key={apod.date} apod={apod} />
//       ))}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default Home;
