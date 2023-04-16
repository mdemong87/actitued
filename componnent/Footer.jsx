import React from 'react'
import style from '../src/styles/Footer.module.css'
import FooterLogo from '../public/logo.png'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
         <Container>
         <div className={style.container}>
              <div>
                  <h3 className={style.footerHeading}>About</h3>
                  <p className={style.footerDescription}>Our vision is to help activateand support people to help make the world a better place. <strong>Our mission is to turn the positive intention to help into practical action</strong>.Actitude is a non-profit organization founded in Copenhagen, Denmark in 2018.</p>
                  <div className={style.footerInfo}>
                      <div className={style.fContact}>
                          <a href="">Info@actitude.com</a>|
                          <a href="">www.actitude.com</a>|
                          <a href="">+45 35851000</a>
                      </div>
                      <p className={style.footerAddress}>Actitude |Rosenørns Alle 44, st. tv., 1926 Frederiksberg, Denmark</p>
                  </div>
                  <div className={style.footerLogo}>
                      <Image src={FooterLogo} />
                  </div>
              </div>
          </div>
         </Container>
      </footer>
    </>
  )
}

export default Footer