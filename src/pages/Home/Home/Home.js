import React from 'react';
import AppointmentBanner from "../ApppoinmentBanner/AppointmentBanner"
import OurServices from '../OurServices/OurServices';
import Banner from "../Banner/Banner"
import Navigation from './../../Shared/Navigation/Navigation';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner> </Banner>
            <OurServices></OurServices>
            <AppointmentBanner></AppointmentBanner>  
        </div>
    );
};

export default Home;