import './SeasonDisplay.css';

import React from 'react';

const seasonConfig = {
    summer: {
        text: 'let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it\'s chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    // Assuming 6 months summer and 6 month winter
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    // Date is 0-indexed (i.e. 10 is November)
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season] // {text, iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`} />
            <h1>{ text }</h1>
            <i className={`icon-right ${iconName} massive icon`} />
        </div>
    );
}

export default SeasonDisplay;