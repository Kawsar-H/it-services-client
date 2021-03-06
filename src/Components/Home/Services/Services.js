import React, { useState } from 'react';
import { useEffect } from 'react';
import {Container, Row} from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';
import loader from '../../../images/loader.gif'
const Services = () => {
    const [allService,setAllService]=useState([])
    useEffect(()=>{
        fetch('https://floating-beyond-40893.herokuapp.com/show-all-service')
        .then(res=>res.json())
        .then(result=>{
            setAllService(result)
            console.log(result)
        })
    },[])
    return (
        <div style={{marginTop:'100px', marginBottom:'50px'}}>
            <Container>
                <h4 style={{color:'#2d2d2d', fontSize:'34px', fontWeight:'600'}} className='text-center'>
                    PROVIDE AWESOME SERVICES
                </h4>
                <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
                    {
                        allService.length<1 && 
                        <img src={loader} alt="it is loader" style={{width:'300px', margin:'auto'}}/>
                    }
                    {
                        allService.map(service=>{
                            return <ServiceDetails key={service._id} service={service}></ServiceDetails>
                        })
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;