import Slider from 'react-slick';
import { Card } from '../../cards/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { data } from '../../cards/data';

export function SimpleCarousel() {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992 - 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((data, index) => (
        <Card
          key={data.title}
          title={data.title}
          quantity={data.quantity}
          price={data.price}
          timeline={data.timeline}
          index={index}
        />
      ))}
    </Slider>
  );
}
