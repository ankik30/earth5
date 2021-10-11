import React from "react";
import data from '../../source-data.json';
import './styles/profile_style.css';
const UserProfile = () => {

    return (
        <div>
            <div className="profile-wrap">
                <h2 className="profile-style"> Profile </h2>
                <div className="row">
                    <div id="columns" className="column1">
                        <img className="image-style" src={data.profile.avatarImage} alt="avatar-image" />
                    </div>
                    <div id="columns" className="column2">
                        <div>First name</div>
                        <div>Last name </div>
                        <div>Phone </div>
                        <div>Email </div>
                        <div>Bio </div>
                    </div>
                    <div id="columns" className="column3">
                        <div> {data.profile.firstName} </div>
                        <div>{data.profile.lastName}</div>
                        <div>{data.profile.phone}</div>
                        <div>{data.profile.email}</div>
                        <div><article>{data.profile.bio}</article></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
