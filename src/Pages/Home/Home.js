import React from 'react';
import Footer from '../Common/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import InfoCard from './Info/Info';
import ReviewsSlider from './ReviewsSlider/ReviewsSlider';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <AppoinmentBanner />
            <ReviewsSlider />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;