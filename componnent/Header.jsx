import styles from '../src/styles/Header.module.css';
import {Navbar,Nav,Container}from "react-bootstrap";
import logo from "../public/logo.png";
import Image from 'next/image';
import Link from 'next/link';
// import {HiOutlineBars3}from "react-icons/hi"

export default function header() {
  return (
    <header className={styles.headerWrp}>
         <Container>
        <Navbar className={styles.navberWrp} expand="lg">
     
        <Navbar.Brand href="#home">
            <Image className={styles.logostyles} src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.basicnavbarnav}`}>
          <Nav className={`${styles.navgroundlink}`} >
            <Link className={`text-muted ${styles.navlink}`} href="/">Home</Link>
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
