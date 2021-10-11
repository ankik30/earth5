import React, { useState } from "react";
import data from '../../source-data.json';
import UserProfile from "../profile/user_profile";
import AllDetails from '../detail/all_details';
import Detail from "../detail/detail";

const Home = () => {

    const [isProfileClicked, handleProfileClick] = useState(false);
    const [isLogoClicked, handleLogoClick] = useState(false);
    const [isTitleClicked, handleTitleClick] = useState(false);
    const [selectedEntry, handleSelectedEntry] = useState(null);
    const [clickStyleForProfile, setClickStyle] = useState(false);
    const [clickStyleForDetails, setClickStyleForDetails] = useState(false);



    const profileClickHandler = () => {
        handleProfileClick(true);
        handleLogoClick(false);
        handleTitleClick(false);
        setClickStyle(true);
    }

    const logoClickHandler = () => {
        handleLogoClick(true);
        handleProfileClick(false);
        handleTitleClick(false);
    };

    const titleClickHandler = (e) => {
        handleTitleClick(true);
        handleSelectedEntry(e);
        handleProfileClick(false);
        handleLogoClick(false);
        setClickStyleForDetails(true);
    }
    return (
        <div className="all-wrap">
            <div> <img className="logo" src={data.site.logoImage} alt="logo" onClick={logoClickHandler} /></div>
            <div><h1 className="title">{data.site.title}</h1></div>
            <div><button className="profile-button" id={clickStyleForProfile && "clicked-style"} onClick={profileClickHandler}>Welcome {data.profile.firstName} </button></div>
            {isProfileClicked && <UserProfile />}
            {!isProfileClicked && !isTitleClicked && <AllDetails handleTitleClick={titleClickHandler} />}
            {isTitleClicked && <Detail selectedEntry={selectedEntry} clickStyleForDetails={clickStyleForDetails} />}

        </div>
    )
};

export default Home;
