import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import Pagination from './components/Pagination';  // Import Pagination component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = ;
  const pageSize = 9;


  const fetchImages = async (path) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}${path}`);
      let data = await res.json();
      if (!Array.isArray(data)) data = [data];
      setImages(data);
      setCurrentPage(1); // Reset to page 1 after new fetch
    } catch (err) {
      console.error('Fetch failed', err);
    }
  };

  const handleSelectImage = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  // Calculate images to display on current page
  const indexOfLast = currentPage * pageSize;
  const indexOfFirst = indexOfLast - pageSize;
  const currentImages = images.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(images.length / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Navbar onFetch={fetchImages} />
      <ImageGrid items={currentImages} onSelect={handleSelectImage} />

      {images.length > pageSize && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <ImageModal item={selectedImage} show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
