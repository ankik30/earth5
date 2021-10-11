import React, { useEffect, useState } from "react";
import moment from "moment";
import data from '../../source-data.json';
import './styles/details_styles.css';
const AllDetails = ({ handleTitleClick, clickStyleForDetails }) => {

    let sourceData = data.data.features.sort((x, y) => y.properties.mag - x.properties.mag);
    const [sortedData, sortHandler] = useState(sourceData);
    const [sortDirection, setSortDirection] = useState(true);

    const onTitleClick = (e) => {
        handleTitleClick(e.id);
    }

    const sortByValue = (id) => {
        const values = [...sortedData];
        if (id === 0) {
            values.sort((a, b) => {
                return (sortDirection ? a : b).properties.place.localeCompare((sortDirection ? b : a).properties.place, undefined, {
                    numeric: true,
                    sensitivity: 'base'
                });

            });

        } else if (id === 1) {
            values.sort((x, y) => sortDirection ?
                y.properties.mag - x.properties.mag : x.properties.mag - y.properties.mag);
        } else {
            values.sort((x, y) => sortDirection ?
                y.properties.time - x.properties.time : x.properties.time - y.properties.time);
        }
        sortHandler(values);
        setSortDirection((prev) => !prev);
    }

    return (
        <div>
            <div className="details-title">{data.data.metadata.title}</div>
            <div className='some-page-wrapper'>
                <div className='row'>
                    <div className='column'>
                        <div id="title" onClick={() => sortByValue(0)}> Title </div>
                        <div id={clickStyleForDetails && 'clicked-style'} className='title-column'>
                            {sortedData.map(feature =>
                                <div onClick={() => onTitleClick(feature)} key={feature.properties.ids}>{feature.properties.place}</div>
                            )}
                        </div>
                    </div>
                    <div className='column'>
                        <div id="magnitude" onClick={() => sortByValue(1)}> Magnitude </div>
                        <div className='magnitude-column'>
                            {sortedData.map(feature =>
                                <div key={feature.properties.ids}>{feature.properties.mag}</div>
                            )}
                        </div>
                    </div>
                    <div className='column'>
                        <div id="time" onClick={() => sortByValue(2)}> Time </div>
                        <div className='time-column'>
                            {sortedData.map(feature =>
                                <div key={feature.properties.ids}>{moment(feature.properties.time).format('MMM DD, YYYY, hh:mm A')}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* } */}
        </div>
    )
};

export default AllDetails;
