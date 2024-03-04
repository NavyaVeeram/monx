import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Bang1 from '../GalleryBang/Bang1.jpeg'; 
import Bang2 from '../GalleryBang/Bang2.jpeg'; 
import Bang3 from '../GalleryBang/Bang3.jpeg';
import Bang4 from '../GalleryBang/Bang4.jpeg';
import Bang5 from '../GalleryBang/Bang5.jpeg';

const Marquee = () => {

    return (
        <Container fluid>
            <div className="row ">
                <h1 style={{color:'red'}}>THE MONX GROUP RESORT FACILITIES</h1>
                <div className="col-12">
                    <marquee>
                        <div className="d-flex">
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang1}
                                alt="Bang1"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang2}
                                alt="Bang2"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang3}
                                alt="Bang3"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang3}
                                alt="Bang3"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang1}
                                alt="Bang1"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang2}
                                alt="Bang2"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang3}
                                alt="Bang3"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        <div style={{width:'400px',height:'350px', flex: '0 0 auto', marginRight: '10px'}}>
                            <img
                                src={Bang3}
                                alt="Bang3"
                                style={{width:'100%', borderRadius: '10px'}}
                            />
                        </div>
                        </div>
                        
                    </marquee>
                </div>
                
            </div>
        </Container>
    );
};

export default Marquee;
