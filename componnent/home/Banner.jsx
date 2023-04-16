import { Container } from "react-bootstrap";
import styles from "../../src/styles/Banner.module.css";
export default function banner() {
    return (
        <div className={`${styles.bannerWrp}`}>

            <Container>
                <div className="w-100 h-100 d-flex align-items-center">
                    <div className={`text-light w-50`}>
                        <small>hello</small>
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime eum accusamus quod incidunt ullam.</p>
                        <button className={`readMorebtn`}>Read More</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
