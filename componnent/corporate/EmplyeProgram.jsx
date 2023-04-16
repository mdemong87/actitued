import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import hero from "../../public/image-section.jpg";
import styles from "../../src/styles/EmplyeProgram.module.css";

export default function EmplyeProgram() {
    return (
        <div>
            <Container>
                <div>
                    <h1 className={`text-center h1`}>Corporate Employee Volunteer Programs</h1>
                    <p className={`text-center text-muted`}>An impactful corporate employee volunteer program
                        that helps make the world a better place.
                    </p>
                </div>
                <div className={`row mt-5 mb-5`}>
                    <div className={`col-sm-12 col-md-6`}>
                        <Image className={`w-100`} src={hero}></Image>
                    </div>
                    <div className={`col-sm-12 col-md-6`}>
                        <h3>
                            Corporate Employee Volunteer Programs
                            is a powerful way to:
                        </h3>
                        <ul className={`text-muted ${styles.powerfullitemlist}`}>
                            <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Increase employee engagement</li>
                            <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Bring your Corporate Social Responsibilities to life, and reach your CSR goals</li>
                            <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Differentiate and strengthen your employer brand as an employer of choice in recruitment and retainment</li>
                            <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Increase team spirit.</li>
                            <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Create new opportunities for personal
                                and professional development.
                            </li>
                        </ul>
                        <button className={`readMorebtn`}>Read More</button>
                    </div>
                </div>









                <section className={`mt-5 mb-5`}>
                    <div className={`row mt-5 mb-5`}>
                        <div className={`col-sm-12 col-md-6`}>
                            <h3>
                                Support your employees to take action
                                and dedicate their skills, time and care
                                to the needs of people and the planet
                                through corporate employee volunteer opportunities.

                            </h3>
                            <div className={`h5 pt-3 pb-2`}>
                                Employee benefits:
                            </div>
                            <ul className={`text-muted ${styles.powerfullitemlist}`}>
                                <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Increase well-being, joy and fulfillment.</li>
                                <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Increase meaning and purpose through helping people and the planet</li>
                                <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Strong relationships and friendships when collaborating closely with colleagues, NGOs, and others.</li>
                                <li className={`${styles.itemsLink}`}> <TiTick className={`${styles.tickIcons}`} />Exciting new opportunities for learning and practicing important competences.</li>
                            </ul>
                            <button className={`readMorebtn`}>Read More</button>
                        </div>
                        <div className={`col-sm-12 col-md-6`}>
                            <Image className={`w-100`} src={hero}></Image>
                        </div>
                    </div>
                </section>

            </Container>
        </div>
    )
}
