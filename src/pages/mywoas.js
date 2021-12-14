import './mywoas.css';
import { useEffect, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import PicBlue from '../assets/images/picblue.png'
import PicYellow from '../assets/images/picyellow.png'
import PicRed from '../assets/images/picred.png'
import PicGreen from '../assets/images/picgreen.png'
import PicGray from '../assets/images/picgray.png'
import PicPurple from '../assets/images/picpurple.png'
import Modal from '../components/modal'
import { Slide, Zoom } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
const MyWoas = () => {
    const [modalShow, setModalShow] = useState(false);

    const purchasedWoaData=[
        {
            Name:"Avax Apa",
            Code:"0000",
            Url:PicPurple
        },
        {
            Name:"Popax Apa",
            Code:"0001",
            Url:PicRed
        },
        {
            Name:"Novax Apa",
            Code:"0002",
            Url:PicYellow
        },
        {
            Name:"Chipax Apa",
            Code:"0003",
            Url:PicGreen
        },
        {
            Name:"Bvax Apa",
            Code:"0004",
            Url:PicGray
        },
    ]

    const [currentWoa,setCurrentWoa]=useState({})
    
    useEffect(()=>{
        console.log(purchasedWoaData.length)
            },[currentWoa])
        
    return (
        <div className='mywoas-container'>
            <Header />
            <Container>
            <Row className='justify-content-between my-woa-row'>
            <Col md={6}>
            <Slide direction='left' duration={200}  cascade >

            <h1 className='my-woas-header'>My Woas</h1>
            <button type='button' className='user-transection' >VIEW USER TRANSACTIONS</button>
</Slide>         
            </Col>
            <Col className='my-woa-buttons' md={6}>
                <Slide direction='right' duration={200} delay={300} cascade >

                <div className='mb-3'>
                <h6 className='woa-btn-header'>Mint Rewards</h6>
                <div className='woa-btn'>--<span><img width="20px" src='https://partyanimals.xyz/static/media/avax.234db155.svg' alt='' /></span><button type="button" className='claim-btn'>Claim</button><span></span></div>
                </div>
                <div className='mb-3'>
                <h6 className='woa-btn-header'>Royalty Rewards</h6>
                <div className='woa-btn'>--<span><img width="20px" src='https://partyanimals.xyz/static/media/avax.234db155.svg' alt='' /></span><button type="button" className='claim-btn'>Claim</button><span></span></div>
                </div>
                <div className='mb-3'>
                <h6 className='woa-btn-header'>Avax Validator Reward</h6>
                <div className='woa-btn'>--<span><img width="20px" src='https://partyanimals.xyz/static/media/avax.234db155.svg' alt='' /></span><button type="button" className='claim-btn'>Claim</button><span></span></div>
                </div>
                <div className='mb-3'>
                <h6 className='woa-btn-header'>PNG Reward</h6>
                <div className='woa-btn'>--<span><img width="20px" src='https://partyanimals.xyz/static/media/avax.234db155.svg' alt='' /></span><button type="button" className='claim-btn'>Claim</button><span></span></div>
                </div>
                </Slide>
        
            </Col>
             
            </Row>
            <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            Woa={currentWoa}
            />
            <Zoom duration={200} direction='up' >

            <div className='my-woas-header-small '>Purchased Woas</div>
            </Zoom>
            <Row className='justify-content-between my-woa-row-purchased'>
                {purchasedWoaData.map((woa,index)=>{
                    return(
             <Col key="index" lg={2} md={4} sm={4} xs={6} className='mt-4 mb-2'>
                 <Slide duration={200} direction='up' cascade>

                 <img onClick={() => setModalShow(true) || setCurrentWoa(woa)} className='purchased-woa' src={woa.Url} alt='' />
                 </Slide>
             
             </Col>

                    )
                })}
             
            </Row>

            </Container>
            <Footer />
        </div>
    );
}

export default MyWoas;
