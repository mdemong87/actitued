import { Container } from "react-bootstrap";
import styles from "../../src/styles/Event.module.css";
// import Swiper core and required modules
// import Swiper core and required modules
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from "../../public/image-section.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Event() {
    return (
        <div className={`pt-5 pb-5 ${styles.eventWrp}`}>
            <Container>
                <div>
                    <h3 className={`text-center`}>Upcoming Events</h3>
                    <p className={`text-center text-muted w-50 m-auto`}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure veniam ratione omnis molestias quaerat pariatur nemo voluptas. Recusandae, deleniti.</p>
                </div>

                <Swiper
                    className={`pt-5`}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-50`}>
                            <Image src={slider}></Image>
                        </div>
                        <div className={`border p-3`}>
                            <h3>Event Header</h3>
                            <div className={`d-flex align-items-center mt-3`}><CiCalendarDate className={`${styles.icons}`} />29/10/2023 to 01/11/2023</div>
                            <div className={`d-flex align-items-center mt-2 mb-2`}><BiLocationPlus className={`${styles.icons}`} />New York,USA</div>
                            <p className={`text-muted mt-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde sapiente ea eos assumenda. Magnam, magni similique!</p>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-50`}>
                            <Image src={slider}></Image>
                        </div>
                        <div className={`border p-3`}>
                            <h3>Event Header</h3>
                            <div className={`d-flex align-items-center mt-3`}><CiCalendarDate className={`${styles.icons}`} />29/10/2023 to 01/11/2023</div>
                            <div className={`d-flex align-items-center mt-2 mb-2`}><BiLocationPlus className={`${styles.icons}`} />New York,USA</div>
                            <p className={`text-muted mt-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde sapiente ea eos assumenda. Magnam, magni similique!</p>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-50`}>
                            <Image src={slider}></Image>
                        </div>
                        <div className={`border p-3`}>
                            <h3>Event Header</h3>
                            <div className={`d-flex align-items-center mt-3`}><CiCalendarDate className={`${styles.icons}`} />29/10/2023 to 01/11/2023</div>
                            <div className={`d-flex align-items-center mt-2 mb-2`}><BiLocationPlus className={`${styles.icons}`} />New York,USA</div>
                            <p className={`text-muted mt-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde sapiente ea eos assumenda. Magnam, magni similique!</p>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-50`}>
                            <Image src={slider}></Image>
                        </div>
                        <div className={`border p-3`}>
                            <h3>Event Header</h3>
                            <div className={`d-flex align-items-center mt-3`}><CiCalendarDate className={`${styles.icons}`} />29/10/2023 to 01/11/2023</div>
                            <div className={`d-flex align-items-center mt-2 mb-2`}><BiLocationPlus className={`${styles.icons}`} />New York,USA</div>
                            <p className={`text-muted mt-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde sapiente ea eos assumenda. Magnam, magni similique!</p>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-50`}>
                            <Image src={slider}></Image>
                        </div>
                        <div className={`border p-3`}>
                            <h3>Event Header</h3>
                            <div className={`d-flex align-items-center`}><CiCalendarDate className={`${styles.icons}`} />29/10/2023 to 01/11/2023</div>
                            <div>fsdds</div>
                            <p className={`text-muted`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde sapiente ea eos assumenda. Magnam, magni similique!</p>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </Container>
        </div>
    )
}
