import './home.css';
import Header from '../components/header'
import Footer from '../components/footer'
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import { MdArrowBackIos, MdOutlinePlayArrow } from 'react-icons/md';
import MintImg from '../assets/images/mintimg.png'
import Roll from '../assets/images/roll.png'
import PicBlue from '../assets/images/picblue.png'
import PicYellow from '../assets/images/picyellow.png'
import PicRed from '../assets/images/picred.png'
import PicGreen from '../assets/images/picgreen.png'
import PicGray from '../assets/images/picgray.png'
import PicPurple from '../assets/images/picpurple.png'
import RarityImg from '../assets/images/rarityimg.png'
import { Slide, Zoom } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Home = () => {
    const [sellValue, setSellValue] = useState(1)
    const increaseSell = () => {
        setSellValue(sellValue + 1)
    }
    const decreaseSell = () => {
        if (sellValue > 1) {

            setSellValue(sellValue - 1)
        } else {
            setSellValue(sellValue)
        }
    }
    return (
        <div className='home-container'>
            <div className='background-main-img'>
                <div className='background-main-img-img'>
                    <Header />
                </div>
                <MdArrowBackIos className="down-arrow-2" />
                <MdArrowBackIos className="down-arrow" />
            </div>
            <Container className='welcome-text-with-images'>
                <Row className='justify-content-around img-six-text'>
                    <Col lg={5}>
                        <Slide direction="up" duration={200} >
                            <h1 className='welcome-header'>Welcome to Wolf of AVAX </h1>
                        </Slide>
                        <Slide direction='left' duration={200}>

                            <p className='welcome-text'>
                                WOA is a unique DAO with a collection of 8888 wolves, programmatically generated on the Avalanche blockchain. Each wolf will give you 4 streams of passive income; along with a place to build, hang out & exchange alpha in Virtual Reality in our Wolf's Lair.
                                Be an original minter (OG) to get exclusive perks.
                            </p>
                        </Slide>
                    </Col>
                    <Col md={8} lg={6}>
                        <Row className="justify-content-around mt-3 mb-2">

                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='down' duration={200} >
                                    <img className='img-six' src={PicBlue} alt="" />
                                </Slide>

                            </Col>
                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='down' duration={200} delay={50} >
                                    <img className='img-six' src={PicRed} alt="" />
                                </Slide>

                            </Col>
                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='down' duration={200} delay={100} >
                                    <img className='img-six' src={PicGreen} alt="" />
                                </Slide>

                            </Col>
                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='up' duration={200} delay={50} >
                                    <img className='img-six' src={PicGray} alt="" />
                                </Slide>

                            </Col>
                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='up' duration={200} >
                                    <img className='img-six' src={PicYellow} alt="" />
                                </Slide>

                            </Col>
                            <Col xs={6} sm={5} md={4}>
                                <Slide direction='up' duration={200} delay={100}  >
                                    <img className='img-six' src={PicPurple} alt="" />
                                </Slide>

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
            <div className='mint-page-container'>
                <Container>
                    <Slide direction='up' cascade duration={100} >

                        <h3 className='mt-4 dont-miss-text' >
                            You don’t want to miss out, join the Wolf’s Lair now!
                        </h3>

                        <h3 className='mt-4 dont-miss-text-small' >
                            8888 / 8888 <span>ALREADY JOINED</span>
                        </h3>
                        <div className='sell-container'>
                            <button onClick={decreaseSell}>-</button> <sapn className="value-sell">{sellValue}</sapn>  <button onClick={increaseSell}>+</button> <span className='sell-btn'>Sell Out</span>
                        </div>
                    </Slide>
                    <div className='mint-img'>
                        <Zoom duration={200} >

                            <img src={MintImg} alt='' />
                        </Zoom>
                    </div>

                </Container>
            </div>
            <div className='mint-page-container'>
                <Container className='mb-50'>
       
                    <Row className='justify-content-between'>
                        <Col md={6}>
                        <Slide direction="up" duration={200}  >

<h1 className='rarity-header'>RARITY RANKING </h1>
</Slide>
<Slide direction='left' duration={200}  >

<p className='rarity-text'>In the Wolf’s Lair we have no dress code. All are welcome, and our amenities are top notch.  Our Wolf’s of AVAX come in different fur colors, suits, and stylish accessories.  We used a 5-tier scale to rank the Wolf’s of AVAX. </p>
</Slide>
<Slide direction='left' cascade duration={200}  >

<p className='rarity-text'>Tiers:</p>
<h4 className='green'>1. Common</h4>
<h4 className='blue'>2. Rare</h4>
<h4 className='red'>3. Ledendary</h4>
<h4 className='purple'>4. Super Rare</h4>
<h4 className='yellow'>5. Iconic</h4>
</Slide>

                        </Col>
                        <Col md={5} className='rarity-img'>
                            <img src={RarityImg} alt='' />
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className=' roadmap-container'>
                <Container>
                <Slide direction="up" duration={200}  >

<h1 className='rarity-header roadmap'>Roadmap </h1>
</Slide>
                    <img className='movie-style-bg' src={Roll} alt='' />
                </Container>

                <Container className='mt-3' >
                    
                    <Slide direction='down' cascade duration={200}  >

                        <ul className=' justify-content-around roadmap-img'>
                            <li >
                                <img src="https://cdn.discordapp.com/attachments/891822051382407198/912374301376794654/unknown.png" alt='' />
                            </li>
                            <li >
                                <img src="https://cdn.discordapp.com/attachments/891822051382407198/912403255508746310/Airdroppe.jpg" alt='' />
                            </li>

                            <li >
                                <img src="https://cdn.discordapp.com/attachments/891822051382407198/912403254812504165/RAFFLE.jpg" alt='' />
                            </li>
                            <li >
                                <img src="https://cdn.discordapp.com/attachments/891822051382407198/912400344892457000/unknown.png" alt='' />
                            </li>
                        </ul>
                    </Slide>
                    <Slide direction='down' duration={300}  >

                        <ul className='roadmap-text '>
                            <li >
                                <p>25% Wolf of Avax sale begins</p>
                            </li>
                            <li >
                                <p>50% 5 WOA will be randomly airdropped to minters!<br />We will give away 5 $Avax to Wolf’s Lair members.</p>

                            </li>

                            <li >
                                <p>75%  Second giveaway! We will raffle 10 WOA and 10 $Avax to Wolf’s Lair members</p>

                            </li>
                            <li >
                                <p>100% Sale is done now the fun begins! We will be releasing our custom marketplace and setting up the Wolf Lair!</p>

                            </li>
                        </ul>
                    </Slide>
                </Container>

            </div>
            <div className='t-and-r' >
                <Container>

                    <Slide direction="up" duration={200}  >

                        <h1 className='rarity-header'>Tokenomics and Royalties </h1>
                    </Slide>
                    <Slide direction='left' duration={200}  >
                        <p className='rarity-text'>
                            <br />

                            We have seen so many NFT projects not go anywhere after the sale. Our NFT’s will hold their value, we have many unique twists, 100% Royalties go to all holders and minters.
                            Minters of the project will receive 15% of all royalties collected for the lifetime
                            of the project: holders or not.
                            85% of all royalties will go to the holders
                            of the project.  So a total of 100%
                            <br />
                            <br />
                            Minters of WOA will receive 15% of royalties for all
                            secondary market sales to come, and holders
                            will receive 85% of all royalties.
                            <br />
                            <br />
                            Wolf’s Lair is a members only club.  You must be the original minter and are still holding your NFT in order to enter. The more NFT’s you mint and hold the more you can earn.   We will keep Avalanche secure and are planning to set up a node and become validators.  Through securing the network we will be rewarded with Avax and we will distribute Avax to our members. Only
                        </p>
                    </Slide>
                </Container>
            </div>

            <div>
                <Container className='pb-5 faq-container'>
                    <Slide direction="up" duration={200}  >

                        <h1 className='rarity-header mb-5'>FAQ</h1>
                    </Slide>
                    <Slide direction="up" cascade duration={200}  >

                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><MdOutlinePlayArrow className='arrow-faq' />Is there a limit on minting?</Accordion.Header>
                                <Accordion.Body>
                                    We will limit people to 20 WOA per mint.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Accordion >
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><MdOutlinePlayArrow className='arrow-faq' />What are the advantages in minting a Wolf?</Accordion.Header>
                                <Accordion.Body>
                                    The people who mint an original Wolf will forever be rewarded with 15% of all royalties collected from secondary-market sales and get access into the Wolf’s Lair.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Accordion >
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><MdOutlinePlayArrow className='arrow-faq' />What is the Wolf Lair? </Accordion.Header>
                                <Accordion.Body>
                                    The Wolf’s Lair is an exclusive membership group where residual income will flow.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Accordion >
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><MdOutlinePlayArrow className='arrow-faq' />Is reflection only available on WOA marketplace? </Accordion.Header>
                                <Accordion.Body>
                                    For now it will be only available on Wolf of AVAX marketplace.  We will be adding secondary market places in the near future where you will be able to receive your reflection from there too.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                        <Accordion >
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><MdOutlinePlayArrow className='arrow-faq' />Who created Wolf of AVAX NFT? </Accordion.Header>
                                <Accordion.Body>
                                    Halo Labs LLC
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Slide>
                </Container>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
