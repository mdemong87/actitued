import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "../../src/styles/MeetVolainter.module.css";
// Import Swiper styles
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//image import 
import four from "../../public/four.jpg";
import one from "../../public/one.jpg";
import three from "../../public/three.jpg";
import two from "../../public/two.jpg";


export default function MeetVolainter() {
    return (
        <div className={`pt-5 pb-5 ${styles.causesWrp}`}>
            <Container>
                <div>
                    <h3 className={`text-center`}>Meet Our Volunteers</h3>
                    <p className={`text-center text-muted w-50 m-auto`}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure veniam ratione omnis molestias quaerat pariatur nemo voluptas. Recusandae, deleniti.</p>
                </div>
                <Swiper
                    className={`pt-5`}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={three}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={one}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={two}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`border pb-3 ${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={three}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={four}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={one}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={two}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={three}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slider}`}>
                        <div className={`w-100`}>
                            <Image className={`w-100 h-100`} src={four}></Image>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center gap-3`}>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillFacebook className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillInstagram className={`${styles.sCions}`} /></Link>
                            <Link className={`${styles.sCionsWrp}`} href={`/`}><AiFillLinkedin className={`${styles.sCions}`} /></Link>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </Container>
        </div >
    )
}
