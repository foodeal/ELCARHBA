import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { CustomHorizontalCard } from '@shared/components';

import styles from './offer-of-the-day.module.scss';
import Slider from 'react-slick';
import { SlickNextArrow, SlickPrevArrow } from '@shared/components/Arrows';

const urls = [
  '/examples/entretien1.jpg',
  '/examples/entretien2.jpg',
  '/examples/entretien3.jpg',
  '/examples/entretien4.jpg',
  '/examples/entretien5.png',
  '/examples/entretien6.jpg'
];

export const OfferOfTheDay: React.FC = () => {
  const [cardData, setCardData] = useState<string>(urls[0]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className={styles.offer_of_the_day_container}>
      <div className={styles.title}> Nos offres du jour </div>
      {/* <div className={styles.offer_card}>
        <CustomHorizontalCard url={cardData} />
      </div> */}
      <div className={styles.carousel_container}>
        <Slider {...settings}>
          {urls &&
            urls.map(url => (
              <div className={styles.carousel_card } key={url}>
                <CustomHorizontalCard url={url} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};
