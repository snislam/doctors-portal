import React, { useState } from 'react';
import Footer from '../Common/Footer/Footer';
import AppoinmentHero from './AppoinmentHero';
import AppoinmentOn from './AppoinmentOn';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppoinmentHero date={date} setDate={setDate} />
            <AppoinmentOn date={date} />
            <Footer />
        </div>
    );
};

export default Appoinment;