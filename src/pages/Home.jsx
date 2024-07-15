import React from "react";
import Footer from "../components/footer";
import Carousel from "../components/header_carousel";
import ContactUs from "../components/contact_us_home";
import LocationMap from "../components/global_locations";

const Home = () => {
    return (
        <div>
            <Carousel />
            <LocationMap />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;