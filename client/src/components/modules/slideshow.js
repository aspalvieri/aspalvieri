import { useMemo, useState } from "react";
import classNames from "classnames";

const imageModules = import.meta.glob("../../assets/**/*.webp", {
  eager: true,
  import: "default"
});

function Slideshow({ values }) {
  const [current, setCurrent] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = useMemo(() => {
    const rows = [];
    for (let i = 1; i <= values.size; i += 1) {
      const imagePath = `../../assets/${values.folder}/${i}.webp`;
      rows.push(imageModules[imagePath] || "");
    }
    return rows;
  }, [values.folder, values.size]);

  const currentImage = images[current - 1];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1 > values.size ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 <= 0 ? values.size : prev - 1));
  };

  return (
    <div>
      <div className="slideshow">
        <div className="slide">
          <img
            onClick={() => setIsModalOpen(true)}
            src={currentImage}
            alt={`Project screenshot ${current} of ${values.size}`}
          />
        </div>

        <div className="slide-controls">
          <button type="button" onClick={prevSlide} className="slidebutton slidebutton-nav" aria-label="Previous slide">
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>

          {images.map((_, index) => (
            <button
              type="button"
              key={`slide-${index + 1}`}
              onClick={() => setCurrent(index + 1)}
              className={classNames("slidebutton", { "button-active": current === index + 1 })}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="visually-hidden">Slide {index + 1}</span>
            </button>
          ))}

          <button type="button" onClick={nextSlide} className="slidebutton slidebutton-nav" aria-label="Next slide">
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className={classNames("sh-modal", { "is-open": isModalOpen })}>
        <img
          onClick={() => setIsModalOpen(false)}
          className="sh-modal-content"
          src={currentImage}
          alt={`Zoomed project screenshot ${current} of ${values.size}`}
        />
        <button type="button" onClick={() => setIsModalOpen(false)} className="close" aria-label="Close image preview">
          &times;
        </button>
        <div>
          <button type="button" onClick={prevSlide} className="slidebutton slidebutton-nav" aria-label="Previous slide">
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button type="button" onClick={nextSlide} className="slidebutton slidebutton-nav" aria-label="Next slide">
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
