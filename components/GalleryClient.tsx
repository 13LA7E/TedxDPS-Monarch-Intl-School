'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'IMG_1297.JPG', 'IMG_1319.JPG', 'IMG_1323.JPG', 'IMG_1333.JPG', 'IMG_1336.JPG',
  'IMG_1338.JPG', 'IMG_1340.JPG', 'IMG_1341.JPG', 'IMG_1343.JPG', 'IMG_1345.JPG',
  'IMG_1360.JPG', 'IMG_1383.JPG', 'IMG_1387.JPG', 'IMG_1393.JPG', 'IMG_1397.JPG',
  'IMG_1401.JPG', 'IMG_1405.JPG', 'IMG_1413.JPG', 'IMG_1419.JPG', 'IMG_1431.JPG',
  'IMG_1432.JPG', 'IMG_1446.JPG', 'IMG_1452.JPG', 'IMG_1453.JPG', 'IMG_1460.JPG',
  'IMG_1462.JPG', 'IMG_1473.JPG', 'IMG_1477.JPG', 'IMG_1481.JPG', 'IMG_1490.JPG',
  'IMG_1494.JPG', 'IMG_1497.JPG', 'IMG_1511.JPG', 'IMG_1520.JPG', 'IMG_1524.JPG',
  'IMG_1531.JPG', 'IMG_1536.JPG', 'IMG_1541.JPG', 'IMG_1546.JPG'
];

export default function GalleryClient() {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxActive(false);
    document.body.style.overflow = 'auto';
  };

  const showPrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxActive) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxActive, currentImageIndex]);

  return (
    <>
      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 200px;
          grid-auto-flow: dense;
          gap: 15px;
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease;
          cursor: pointer;
          position: relative;
        }
        
        .gallery-item:nth-child(11n + 1) { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(11n + 2) { grid-column: span 1; grid-row: span 1; }
        .gallery-item:nth-child(11n + 3) { grid-column: span 1; grid-row: span 2; }
        .gallery-item:nth-child(11n + 4) { grid-column: span 2; grid-row: span 1; }
        .gallery-item:nth-child(11n + 5) { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(11n + 6) { grid-column: span 1; grid-row: span 1; }
        .gallery-item:nth-child(11n + 7) { grid-column: span 2; grid-row: span 1; }
        .gallery-item:nth-child(11n + 8) { grid-column: span 1; grid-row: span 2; }
        .gallery-item:nth-child(11n + 9) { grid-column: span 2; grid-row: span 2; }
        .gallery-item:nth-child(11n + 10) { grid-column: span 1; grid-row: span 1; }
        .gallery-item:nth-child(11n + 11) { grid-column: span 2; grid-row: span 1; }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 30px rgba(230, 43, 30, 0.4);
          z-index: 10;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .lightbox {
          display: ${lightboxActive ? 'flex' : 'none'};
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          align-items: center;
          justify-content: center;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          position: relative;
        }

        .lightbox-content img {
          width: auto;
          height: auto;
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 40px;
          color: white;
          cursor: pointer;
          background: rgba(230, 43, 30, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
          z-index: 10000;
          border: none;
        }

        .lightbox-close:hover {
          background: var(--vibrant-orange);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 40px;
          color: white;
          cursor: pointer;
          background: rgba(230, 43, 30, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
          user-select: none;
          border: none;
        }

        .lightbox-nav:hover {
          background: var(--vibrant-orange);
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        @media (max-width: 1400px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 180px;
          }
          .gallery-item:nth-child(n) { grid-column: span 1; grid-row: span 1; }
          .gallery-item:nth-child(7n + 1) { grid-column: span 2; grid-row: span 2; }
          .gallery-item:nth-child(7n + 4) { grid-column: span 2; grid-row: span 1; }
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 160px;
            gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
            gap: 8px;
            padding: 0 8px;
          }
          .gallery-item:nth-child(n) { grid-column: span 1; grid-row: span 1; }
          .gallery-item:nth-child(5n + 1) { grid-column: span 2; grid-row: span 1; }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: 12px;
            padding: 0 12px;
          }
          .gallery-item:nth-child(n) { grid-column: span 1; grid-row: span 1; }
          .gallery-item {
            border-radius: 8px;
          }
          .gallery-item img {
            height: 250px;
            object-fit: cover;
          }
        }
      `}</style>

      <div className="gallery-grid" id="gallery">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item fade-in" 
            style={{animationDelay: `${index * 0.05}s`}}
            onClick={() => openLightbox(index)}
          >
            <img src={`/Gallery/${img}`} alt={`TEDx Event Photo ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div className="lightbox" onClick={(e) => e.target === e.currentTarget && closeLightbox()}>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
          &times;
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={showPrevImage} aria-label="Previous image">
          &#8249;
        </button>
        <div className="lightbox-content">
          <img src={`/Gallery/${images[currentImageIndex]}`} alt="Gallery Image" />
        </div>
        <button className="lightbox-nav lightbox-next" onClick={showNextImage} aria-label="Next image">
          &#8250;
        </button>
      </div>
    </>
  );
}
