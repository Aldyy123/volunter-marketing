import React from 'react';
import Card from '../Base/Card'
import logo from '../assets/LOGO.png'
import banner from '../assets/banner1.jpg'
import nasionp from '../assets/nasionp.jpg'
import '../Styles/Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper';

const listOfData = [
    logo, banner, nasionp,
    logo, banner, nasionp,
    logo, banner, nasionp,
    logo, banner, nasionp,
    logo, banner, nasionp
]

// {/* <Slider {...settings}>
//     {listOfData.map(e => (
//         <div key={e} style={{ backgroundColor: 'aquamarine' }}>
//             <Card img={e} />
//         </div>
//     ))}
// </Slider> */}

SwiperCore.use([Autoplay])

export default function Carousel() {
    const breakpoints = {
        200: {
            width: 300,
            slidesPerView: 1,
        },
        400: {
            width: 700,
            slidesPerView: 2,
        }
    }
    return (
        <Swiper
            breakpoints={breakpoints}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            // style={{ justifyContent: 'center', display: 'flex' }}
        >
            {listOfData.map((item, index) => {
                return (
                    <SwiperSlide key={index} style={{
                    }}>
                        <Card img={item} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
    // <div className="carousel-container">
    //     <div className="carousel">
    //         {listOfData.map((item, index) => (
    //             <div key={index} style={{ transform: `translate(-${translate}px)` }} onDragLeave={e => dragLeft(e)}>
    //                 <Card img={item} />
    //             </div>
    //         ))}
    //     </div>
    // </div>