import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import logo from "../public/logo.png";
import styles from '../src/styles/Header.module.css';
// import {HiOutlineBars3}from "react-icons/hi"

export default function header() {
  return (
    <header className={styles.headerWrp}>
      <div className={`${styles.topHeader}`}>
        <Container>
          <div className={` pt-2 pb-2 ${styles.topheaderWrp}`}>
            <div className={`d-flex gap-3`}>
              <div className={`d-flex align-items-center gap-2`}> <AiOutlineMail className={`${styles.topberIcons}`} /> Example@gmail.com</div>
              <div className={`d-flex align-items-center gap-2`}> <BsTelephone className={`${styles.topberIcons}`} /> 019876544353</div>
            </div>
            <div className={`d-flex gap-3`}>
              <AiFillFacebook className={`${styles.topberIcons}`} />
              <AiFillInstagram className={`${styles.topberIcons}`} />
              <AiFillLinkedin className={`${styles.topberIcons}`} />
              <AiFillYoutube className={`${styles.topberIcons}`} />

            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Navbar className={styles.navberWrp} expand="lg">

          <Navbar.Brand href="#home">
            <Image className={styles.logostyles} src={logo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={`${styles.basicnavbarnav}`}>
            <Nav className={`${styles.navgroundlink}`} >
              <Link className={`text-muted ${styles.navlink}`} href="/">Home</Link>
              <Link className={`text-muted ${styles.navlink}`} href="/About">About</Link>
              <Link className={`text-muted ${styles.navlink}`} href="/Mission">Mission</Link>
              <Link className={`text-muted ${styles.navlink}`} href="/corporate">Corporate</Link>
              <Link className={`text-muted ${styles.navlink}`} href="/future">Future</Link>
              <Link className={`text-muted ${styles.navlink}`} href="/individual">Individual</Link>
              <select className={` text-muted border ${styles.selete}`} name="languess" id="">
                <option value="English">English</option>
                <option value="Danish">Danish</option>
              </select>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
