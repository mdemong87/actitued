
import Link from "next/link";
import { Container } from "react-bootstrap";
import { BiDonateHeart } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import styles from "../../src/styles/VolantireMakter.module.css";


export default function VolantireMakter() {
    return (
        <div className={`${styles.VolantireMakterWrp}`}>
            <Container>
                <div className={`row pt-5 pb-5`}>
                    <div className={`col-sm-12 col-md-4 text-center d-flex flex-column align-items-center`}>
                        <BiDonateHeart className={`${styles.icons}`} />
                        <h3>Make Donation</h3>
                        <p className={`w-75 m-auto text-muted`}>"Your donation can help us make a difference in the lives of those in need. Join us in creating positive change today."</p>
                        <Link className={`${styles.readMore}`} href="/">Read More</Link>
                    </div>
                    <div className={`col-sm-12 col-md-4 text-center d-flex flex-column align-items-center`}>
                        <HiOutlineEmojiHappy className={`${styles.icons}`} />
                        <h3>Become a patner</h3>
                        <p className={`w-75 m-auto text-muted`}>"Join us for global impact, partner with our non-profit organization today."</p>
                        <Link className={`${styles.readMore}`} href="/">Read More</Link>
                    </div>
                    <div className={`col-sm-12 col-md-4 text-center d-flex flex-column align-items-center`}>
                        <FiUsers className={`${styles.icons}`} />
                        <h3>Become a Volunler</h3>
                        <p className={`w-75 m-auto text-muted`}>"Volunteering at a non-profit - helping others while gaining personal fulfillment and making a positive impact."</p>
                        <Link className={`${styles.readMore}`} href="/">Read More</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
