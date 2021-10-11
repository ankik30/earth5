import React, { useState } from "react";
import data from '../../source-data.json';
import '../detail/styles/details_styles.css';
import moment from "moment";

const Detail = (props) => {

    const time = data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.time;
    return (
        <div className="detail-wrap">

            <h2 className="selected-detail-style"> {data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.title}</h2>
            <div className="detail-row">
                <div className="detail-keys">
                    <div>Title </div>
                    <div>Magnitude </div>
                    <div>Time </div>
                    <div>Status </div>
                    <div>Tsunami </div>
                    <div>Type </div>

                </div>
                <div className="detail-values">
                    <div>{data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.title} </div>
                    <div>{data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.mag} </div>
                    <div>{moment(time).format('MMM DD, YYYY, hh:mm A')} </div>
                    <div>{data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.status} </div>
                    <div>{data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.tsunami} </div>
                    <div>{data.data.features.filter((feature) => props.selectedEntry === feature.id)[0].properties.type} </div>

                </div>
            </div>

        </div>
    )
};

export default Detail;
