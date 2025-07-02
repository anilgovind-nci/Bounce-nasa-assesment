import React, { useEffect, useState } from 'react';
import { fetchApodData } from '../api/apod';
import ApodCard from '../components/ApodCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [apods, setApods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 29);

    const format = (d) => d.toISOString().split('T')[0];

    const getData = async () => {
      try {
        const data = await fetchApodData(format(startDate), format(endDate));
        setApods(data.reverse());
        setError(null);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = apods.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(apods.length / ITEMS_PER_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>NASA APOD Viewer</h1>
      {currentItems.map(apod => <ApodCard key={apod.date} apod={apod} />)}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;
