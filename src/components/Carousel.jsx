import React from 'react';
import Slider from 'react-slick';
import styles from '../style/Carousel.module.css'; 

const slides = [
  {
    id: 1,
    img: 'https://i.pinimg.com/564x/a6/16/e2/a616e2410e3e63be28f7424fc9283c33.jpg',
    caption: 'Занятия ведутся большими группами, позволяя повысить уровень разговорного английского.'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/564x/0a/11/c2/0a11c291318c5c676aa4c1bc72d5f73d.jpg',
    caption: 'Персонализированные программы обучения.'
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/564x/57/45/36/57453653ee5b50f45388b9b6eb811c7c.jpg',
    caption: 'Опытные преподаватели — носители языка.'
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/564x/be/80/fa/be80fa8dea3342264f9a7552ca13a8ea.jpg',
    caption: 'Современные методики обучения.'
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className={styles.levelTest}>
      <h2 id='Carousel'>Наши преимущества</h2>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.img} alt={`Слайд ${slide.id}`} />
            <p>{slide.caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
