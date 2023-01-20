import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import HotelsCards from '../HotelsCards/HotelsCards';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendarDays, faLeftLong } from '@fortawesome/free-solid-svg-icons'

// name str, room int, location str, description str, parking bool, pictureHome str, 
// pictureDetail[], rating, languajes[], category int  
const Details = () => {

    const hotels = [
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        }
    ]

    
    return (
        <div className="container d-flex flex-column align-items-center pt-5 gap-4">
            <p className=" display-4 text-danger fw-bold">NameRoom</p>

            <div className="h1 d-flex justify-content-between w-100 mt-5">
                <p>Family Room</p>
                <p>Price: $ 799</p>
            </div>

            <div className=" w-100 h-100 d-flex justify-content-center">
                <div className=' d-flex flex-column' style={{ width: '900px' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/* <img className='w-100' src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg" alt="room" />
                    <div className='d-flex gap-5 justify-content-center mt-3'>
                        <img style={{width: '100px'}} src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg" alt="room" />
                        <img style={{width: '100px'}} src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg" alt="room" />
                        <img style={{width: '100px'}} src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg" alt="room" />
                        <img style={{width: '100px'}} src="https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg" alt="room" />
                    </div> */}
                </div>

                <div className='w-50 d-flex justify-content-end'>
                    <Form className=' bg-primary w-75 p-5 rounded d-flex flex-column gap-3'>
                        <div style={{ height: '60px' }}>
                            <Form.Control type="date" className=' rounded fs-4' placeholder='Check In' required />
                            {/* <p className='text-danger'>msg de error</p> */}

                        </div>

                        <div style={{ height: '60px' }}>
                            <Form.Control type="date" className='rounded fs-4' placeholder='Check Out' />
                            {/* <p className='text-danger'>msg de error</p> */}
                        </div>

                        <div style={{ height: '60px' }}>
                            <Form.Control className='rounded fs-4' placeholder='Adults' />
                            {/* <p className='text-danger'>msg de error</p> */}
                        </div>

                        <div style={{ height: '60px' }}>
                            <Form.Control className='rounded fs-4' placeholder='children' />
                            {/* <p className='text-danger'>msg de error</p> */}
                        </div>

                        <Button className='bg-danger p-4' type="submit">Booking Now</Button>
                    </Form>

                </div>
            </div>

            <div className='container fs-5 d-flex flex-column gap-5 mt-5'>
                <ListGroup horizontal className='h5 d-flex gap-3 border-0'>
                    <ListGroup.Item>Description</ListGroup.Item>
                    <ListGroup.Item>Aditional Information</ListGroup.Item>
                    <ListGroup.Item>Review</ListGroup.Item>
                    <ListGroup.Item>Pricing Plans</ListGroup.Item>
                </ListGroup>

                <div>
                    <p><span className='fw-bold'> Room size: </span>50ft</p>
                    <p><span className='fw-bold'> Location: </span>5th floor</p>
                    <p><span className='fw-bold'> Bed: </span>2 double bed</p>
                    <p><span className='fw-bold'> View: </span>Panama Sea view</p>
                    <p><span className='fw-bold'> Smoking: </span>Yes</p>
                </div>

                <div className='w-100'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quisquam ea commodi temporibus? Perspiciatis impedit fugit illo illum quam provident. Ad accusamus obcaecati, aliquid ipsa doloribus vero. Illo, reprehenderit quibusdam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aliquam perspiciatis quae consectetur dolore porro esse exercitationem quibusdam beatae minus, sapiente praesentium iure est ipsam veniam officia accusamus cum! Hic.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam, facere, mollitia cumque et nobis ea id dolore placeat perspiciatis sunt iure quas exercitationem nulla vel temporibus est unde dolorem!

                </div>
            </div>

            <div>
                <p className=' display-3 fw-bold text-danger mt-5'>Our Rooms</p>
                
                <HotelsCards hotels={hotels}/>
            </div>

        </div>
    )
}

export default Details;