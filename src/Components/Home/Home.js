import React from 'react';
import Feedbacks from './Feedbacks/Feedbacks';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    document.title='IT-service'
    return (
        <div>
            <Header></Header>
            
            <Services></Services>
            <Slider></Slider>
            <Feedbacks></Feedbacks>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;