import React from 'react';
import AppointmentBanner from "../ApppoinmentBanner/AppointmentBanner"
import OurServices from '../OurServices/OurServices';
import Banner from "../Banner/Banner"
import Navigation from './../../Shared/Navigation/Navigation';
import Doctors from '../Doctors/Doctors';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner> </Banner>
            <OurServices></OurServices>
            <Doctors></Doctors>
            <AppointmentBanner></AppointmentBanner>  
        </div>
    );
};

export default Home;