// import './Category.css';
import  { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosStar } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

const data = [
    {
      "id": 1,
      "title": "Pepperoni Pizza",
      "image": "https://i.ibb.co/dWSS235/image-3.png",
      "cat": "Di napoles",
      "price": 10,
      "rating": 5
    },
    {
      "id": 2,
      "title": "Pepperoni Pizza",
      "image": "https://i.ibb.co/znPcfYB/image-22-1.png",
      "cat": "Di napoles",
      "price": 10,
      "rating": 4.5
    },
    {
      "id": 3,
      "title": "Vegetarian Pizza",
      "image": "https://i.ibb.co/dDBrtYw/image33.png",
      "cat": "Di napoles",
      "price": 10,
      "rating": 4.3
    },
    {
      "id": 4,
      "title": "Mediterranean Pizza",
      "image": "https://i.ibb.co/mFDHF5S/pizza-2-1.png",
      "cat": "Di napoles",
      "price": 10,
      "rating": 4.00
    },
    {
        "id": 5,
        "title": "Vegetarian Pizza",
        "image": "https://i.ibb.co/dDBrtYw/image33.png",
        "cat": "Di napoles",
        "price": 10,
        "rating": 4.3
      }
  ];
const Category = () => {

    const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  
  const renderBullet = (index, className) => {
    return `<span class="${className} custom-dot"></span>`;
  };

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  
    return (
        <div className='categoryMain'>
      <h2 className="catTitle">Our Popular <span className="highlight">Categories</span></h2>
      <div>
        <div className='foodItem'>
        <div className='foodCategory'>
            <img src="https://i.ibb.co/7vQ2n6q/Group-3172.png" alt="" />
            <h2>Pizzas</h2>
        </div>
        <div className='foodCategoryNo'>
            <img src="https://i.ibb.co/ssWjd2B/burger.png" alt="" />
            <h2>Burgers</h2>
        </div>
        <div className='foodCategoryNo'>
            <img src="https://i.ibb.co/C8RSBj5/salad.png" alt="" />
            <h2>Salads</h2>
        </div>
        <div className='foodCategoryNo'>
            <img src="https://i.ibb.co/r3bccBr/combos.png" alt="" />
            <h2>Combos</h2>
        </div>
            
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={true}
          virtual
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <div className="rating-container">
                  <img src="https://i.ibb.co/K9XqYZZ/Vector-616.png" alt="" className='rating' />
                  <IoIosStar className='star'></IoIosStar>
                  <p className='rate'>{item.rating}</p>
                </div>
                <img src={item.image} alt={item.title} className="image" />
                <div className="card-info">
                  <h3 className="cardTitle">{item.title}</h3>
                  <p>{item.cat}</p>
                  <p className="cardPrice">${item.price}</p>
                  <button className='button'>Add to cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
};

export default Category;