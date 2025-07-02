import React, { useState } from 'react';

export default function Navbar({ onFetch }) {
  const [mode, setMode] = useState('today');
  const [count, setCount] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const isRangeInvalid =
    mode === 'range' &&
    (!startDate || !endDate || new Date(startDate) > new Date(endDate));

  const isRandomInvalid = mode === 'random' && count < 1;

  const handleFetch = () => {
    if (mode === 'today') {
      onFetch('/api/nasa/apod');
    } else if (mode === 'range') {
      if (!isRangeInvalid) {
        onFetch(`/api/nasa/apod?start_date=${startDate}&end_date=${endDate}`);
      }
    } else if (mode === 'random') {
      if (!isRandomInvalid) {
        onFetch(`/api/nasa/apod?count=${count}`);
      }
    }
  };

  return (
    <div className="p-4 bg-light border-bottom">
      <div className="container">
        <h4 className="mb-3">🌌 NASA APOD Viewer</h4>
        <div className="row g-3 align-items-end">
          <div className="col-auto">
            <select className="form-select" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="today">Today</option>
              <option value="range">Date Range</option>
              <option value="random">Random</option>
            </select>
          </div>

          {mode === 'range' && (
            <>
              <div className="col-auto">
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              {isRangeInvalid && (
                <div className="col-12 text-danger">
                  Please select a valid date range (start ≤ end).
                </div>
              )}
            </>
          )}

          {mode === 'random' && (
            <div className="col-auto">
              <input
                type="number"
                min="1"
                max="100"
                className="form-control"
                value={count}
                onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>
          )}

          <div className="col-auto">
            <button
              onClick={handleFetch}
              className="btn btn-primary"
              disabled={isRangeInvalid || isRandomInvalid}
            >
              Fetch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
