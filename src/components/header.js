import './header.css';
import { Row, Col, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navLinks = [
        {name:"Home",
        link:"/"    },
        {name:"My Woa",
        link:"/mywoa"},
        {name:"Market",
        link:"/"}
    ]
    const [activeIndex, setActiveIndex] = useState(-1)
    return (
        <div className='header-nav-container'>
            <Offcanvas className="nav-offcanvas" show={show} onHide={handleClose}>
                <Offcanvas.Header closeVariant='white' closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <ul className='navbar-li-small'>
                        <li className='mb-5 '>
                            <Link  to="/">
                            <img width="150px" src={Logo} alt="" />        
        
                            </Link>
                        </li>

                        {navLinks.map((nav, index) => {
                            return (
                                <li key={index}  >
                                    <Link to={nav.link}  class={activeIndex === index ? "cool-link active" : "cool-link"} onClick={() => setActiveIndex(index)} >
                                        {nav.name}
                                    </Link>
                                </li>

                            )
                        })}

                        <li className='btn-connect small-nav mt-5'>
                            <Link  to="/">
                                Connect
                            </Link>
                        </li>

                    </ul>



                </Offcanvas.Body>
            </Offcanvas>

            <Row className='justify-content-around '>

                <Col xs={3} lg={3}>
                <img width="150px" src={Logo} alt="" />        

                </Col>
                <Col xs={7} md={7} lg={5}>

                    <ul className='navbar-li'>
                        {navLinks.map((nav, index) => {
                            return (
                                <li key={index} >
                                    <Link to={nav.link} class={activeIndex == index ? "cool-link active" : "cool-link"} onClick={() => setActiveIndex(index)} href="" >
                                        {nav.name}
                                    </Link>
                                </li>

                            )
                        })}

                        <li className='btn-connect'>
                            <Link to="/" to="/">
                                Connect
                            </Link>
                        </li>
                    </ul>

                </Col>
                <Col xs={1} className='menu-icon'>
                    <div onClick={handleShow}>
                        <HiMenu />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
