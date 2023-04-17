import { Container } from "react-bootstrap";
import styles from "../../src/styles/Banner.module.css";
export default function banner() {
    return (
        <div className={`${styles.bannerWrp}`}>

            <Container>
                <div className="w-100 h-100 d-flex align-items-center">
                    <div className={`text-light w-50`}>
                        <h1 className={`${styles.bannerheading}`}>"Empowering Communities Through Non-Profit Action"</h1>
                        <p className={`${styles.bannerPara}`}>"We're a non-profit organization dedicated to empowering communities through education, advocacy, and social action."</p>
                        <button className={`readMorebtn`}>Read More</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
