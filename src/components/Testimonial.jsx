import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import star from "../images/star.png";
import semicolon from "../images/semicolon.png";
import Doctor1 from "../images/doctor1.png";
import Doctor2 from "../images/doctor2 copy.png";
import Doctor4 from "../images/doctor4.png";

import "../css/Testimonial.css";

const testimonials = [
  {
    description: "As a dedicated member of this hospital, I take immense pride in being part of a team that prioritizes patient care above all else. Here, every individual is treated with compassion, respect and dignity.",
    name: "Harsh",
    specialty: "Neurologist",
    image: Doctor1
  },
  {
    description: "Working at this hospital has been an incredibly fulfilling journey. Here, we combine advanced medical technology with a patient first approach to deliver exceptional healthcare.",
    name: "Harsh",
    specialty: "Neurologist",
    image: Doctor2
  },
  {
    description: "Health went above and beyond to ensure my recovery was smooth and comfortable. The staff were always available to answer questions and address any concerns I had.",
    name: "Harsh",
    specialty: "Neurologist",
    image: Doctor1
  },
  {
    description: "I can confidently say that HealthAxis is the best place to receive quality healthcare in our community. Their dedication to patient well-being is truly remarkable.",
    name: "Harsh",
    specialty: "Neurologist",
    image: Doctor4
  }
];

const Testimonial = () => {
  return (
    <div>
      <div className='Testimonial-Heading'>
        <div className="text-center text-3xl mt-[40px] Arvo">
          What our <span className='caladea'>Present Says?</span>
        </div>
      </div>

      <div className="TestimonialMainSection">
        <div className="TestimoialSubSection">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='TestimoialSubSection'>
                  <div className='Testimonial-description'>
                    {testimonial.description}
                  </div>

                  <div className="profile-section">
                    <div className="profile-pic">
                      <img className='rounded-full' src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className='profile-info'>
                      <div className='name'>{testimonial.name}</div>
                      <div className='specialty'>{testimonial.specialty}</div>
                    </div>
                  </div>

                  <div className='star-rating'>
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>

                  <div className='quote-icon'>
                    <img src={semicolon} alt="quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
