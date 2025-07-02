import React from 'react';

export default function ImageGrid({ items, onSelect }) {
  return (
    <div className="container py-4">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {items.map((item, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100" onClick={() => onSelect(item)} style={{ cursor: 'pointer' }}>
              <img
                src={item.url}
                alt={item.title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-truncate">{item.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
