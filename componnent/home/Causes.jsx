import styles from "../../src/styles/Causes.module.css";

import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

//img import
import card1 from "../../public/card1.jpg";
import card2 from "../../public/card2.jpg";
import card3 from "../../public/card3.jpg";
import card4 from "../../public/card4.jpg";

export default function Causes() {
    return (
        <div className={`pt-5 pb-5 ${styles.causesWrp}`}>
            <Container>
                <div>
                    <h3 className={`text-center`}>Latest Causes</h3>
                    <p className={`text-center text-muted w-50 m-auto`}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure veniam ratione omnis molestias quaerat pariatur nemo voluptas. Recusandae, deleniti.</p>
                </div>
                <div className={`row pt-5`}>
                    <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.card}`}>
                        <div className={`${styles.cardContainer}`}>
                            <div className={`${styles.imageWrp}`}>
                                <Image className={`w-100 h-100`} src={card1}></Image>
                            </div>
                            <div className={`p-3`}>
                                <h4>card title</h4>
                                <p className={`text-muted`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis blanditiis assumenda dolore.</p>
                                <Link className={`${styles.readmore}`} href={'/'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.card}`}>
                        <div className={`${styles.cardContainer}`}>
                            <div className={`${styles.imageWrp}`}>
                                <Image className={`w-100 h-100`} src={card2}></Image>
                            </div>
                            <div className={`p-3`}>
                                <h4>card title</h4>
                                <p className={`text-muted`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis blanditiis assumenda dolore.</p>
                                <Link className={`${styles.readmore}`} href={'/'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.card}`}>
                        <div className={`${styles.cardContainer}`}>
                            <div className={`${styles.imageWrp}`}>
                                <Image className={`w-100 h-100`} src={card3}></Image>
                            </div>
                            <div className={`p-3`}>
                                <h4>card title</h4>
                                <p className={`text-muted`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis blanditiis assumenda dolore.</p>
                                <Link className={`${styles.readmore}`} href={'/'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.card}`}>
                        <div className={`${styles.cardContainer}`}>
                            <div className={`${styles.imageWrp}`}>
                                <Image className={`w-100 h-100`} src={card4}></Image>
                            </div>
                            <div className={`p-3`}>
                                <h4>card title</h4>
                                <p className={`text-muted`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis blanditiis assumenda dolore.</p>
                                <Link className={`${styles.readmore}`} href={'/'}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
