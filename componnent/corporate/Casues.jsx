import { Container } from "react-bootstrap";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import styles from "../../src/styles/Casues.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Casues() {









    return (
        <div className={`${styles.CasuesWrp}`}>
            <Container>
                <div className={`pt-5 `}>
                    <h3 className={`text-center h1`}>What causes would your company
                        and your employees
                        most like to make a difference on?
                    </h3>
                    <div className={`text-muted h5`}>
                        Examples of the causes employees can support:
                    </div>

                    <Swiper
                        className={`${styles.swiper}`}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className={`${styles.swiperSlide}`}>
                            <h3>Free from tuarchar</h3>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae odio ex repellendus, ab dignissimos ullam sit dolorem non doloribus?</p>
                        </SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide}`}>
                            <h3>Free from tuarchar</h3>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae odio ex repellendus, ab dignissimos ullam sit dolorem non doloribus?</p></SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide}`}>
                            <h3>Free from tuarchar</h3>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae odio ex repellendus, ab dignissimos ullam sit dolorem non doloribus?</p></SwiperSlide>
                        <SwiperSlide className={`${styles.swiperSlide}`}>
                            <h3>Free from tuarchar</h3>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae odio ex repellendus, ab dignissimos ullam sit dolorem non doloribus?</p>
                        </SwiperSlide>
                        ...
                    </Swiper>

                </div>
            </Container>
        </div>
    )
}
