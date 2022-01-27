import React from "react";
import Landing from "../Components/Landing/Landing.component";
import MainSection from "../Components/Main-Section/MainSection.component";

import "./Homepage.styles.css"

const Homepage = () => {
    return (
        <div >
            <Landing />
            <MainSection />
        </div>
    )
}

export default Homepage;