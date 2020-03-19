import React from 'react';
import qs from 'qs';

function About({location}) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true//this deliminates the first '=' in the string set
    });
    console.log(query)
    const showDetail = query.detail ==='true';
    return (
        <div>
            <h1>intro</h1>
            <p>this project uses react router</p>
            {showDetail && <p>detail value is true!</p>}
        </div>
    )
}

export default About;
