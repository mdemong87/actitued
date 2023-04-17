import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineGlobal, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { BiLocationPlus } from "react-icons/bi"
import { TiTick } from "react-icons/ti"
import logo from "../public/logo.png"
import styles from '../src/styles/Footer.module.css'
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={`row`}>
            <div className={`col-sm-12 col-md-4 d-flex flex-column justfy-content-center`}>
              <Image className={`w-100 h-100`} src={logo}></Image>

            </div>
            <div className={`col-sm-12 col-md-4 d-flex justify-content-center flex-column`}>
              <h4>Recent campaign</h4>
              <div className={`text-muted ${styles.powerfullitemlist}`}>
                <div className={`${styles.itemsLink}`}>
                  <TiTick className={`${styles.tickIcons}`} />
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                </div>


                <div className={`${styles.itemsLink}`}>
                  <TiTick className={`${styles.tickIcons}`} />
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>


                <div className={`${styles.itemsLink}`}>
                  <TiTick className={`${styles.tickIcons}`} />
                  <span>Lorem ipsum amet consectetur adipisicing elit.</span>
                </div>

                <div className={`${styles.itemsLink}`}>
                  <TiTick className={`${styles.tickIcons}`} />
                  <span>Lorem ipsum amet consectetur adipisicing elit.</span>
                </div>

              </div>
            </div>
            <div className={`col-sm-12 col-md-4 d-flex justify-content-center flex-column`}>
              <h4>Charify Location</h4>
              <div className={`text-muted ${styles.powerfullitemlist}`}>
                <div className={`${styles.itemsLink}`}>
                  <AiOutlineMail className={`${styles.tickIcons}`} />
                  <span>Info@actitude.com  </span>
                </div>

                <div className={`${styles.itemsLink}`}>
                  <AiOutlinePhone className={`${styles.tickIcons}`} />
                  <span>+45 35851000</span>
                </div>

                <div className={`${styles.itemsLink}`}>
                  <AiOutlineGlobal className={`${styles.tickIcons}`} />
                  <span>www.actitude.com</span>
                </div>


                <div className={`${styles.itemsLink}`}>
                  <BiLocationPlus className={`${styles.tickIcons}`} />
                  <span>Rosenørns Alle 44, st. tv., 1926 Frederiksberg, Denmark</span>
                </div>


              </div>
            </div>
          </div>
        </Container>

        <div className={`${styles.bottomFooter}`}>
          <Container>
            <div className={`d-flex gap-3 w-100 ${styles.bottomFooterWrp}`}>
              <div>
                <p className={`text-muted`}>&copy;CopyRight All Right Reserve Actitude.com</p>
              </div>
              <div>
                <AiFillFacebook className={`${styles.topberIcons}`} />
                <AiFillInstagram className={`${styles.topberIcons}`} />
                <AiFillLinkedin className={`${styles.topberIcons}`} />
                <AiFillYoutube className={`${styles.topberIcons}`} />
              </div>

            </div>
          </Container>
        </div>
      </footer >
    </>
  )
}

export default Footer