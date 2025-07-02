import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ImageModal({ item, show, onClose }) {
  if (!item) return null;

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={item.hdurl || item.url} className="img-fluid mb-3" alt={item.title} />
        <p><strong>Date:</strong> {item.date}</p>
        <p><strong>Copyright:</strong> {item.copyright || 'N/A'}</p>
        <p>{item.explanation}</p>
      </Modal.Body>
    </Modal>
  );
}
