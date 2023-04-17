import Image from "next/image";
import { Container } from "react-bootstrap";
import logo2 from "../public/logo2.png";
import styles from "../src/styles/Subscrib.module.css";

export default function Subscrib() {
    return (
        <div className={`${styles.subscribWrp}`}>
            <Container>
                <div className={`pt-3 pb-3 d-flex justify-content-center flex-column align-items-center`}>
                    <div>
                        <Image className={`m-auto ${styles.logo2}`} src={logo2} alt="logo2"></Image>
                    </div>
                    <input className={`${styles.input}`} type="text" placeholder="Sign up with your email address to receive news and updates." />
                    <button className={`readMorebtn`}>Subscribe</button>
                </div>
            </Container>
        </div>
    )
}
