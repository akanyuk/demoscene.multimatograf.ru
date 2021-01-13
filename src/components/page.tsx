import React from 'react';

export const Pages = [
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2006-2010",
];


class Page extends React.Component {
    render() {
        const page = this.props['location'].pathname.substr(1);
        return (
            <div>
                <h1>{page}</h1>
                <p>{page}</p>
            </div>
        )
    }
}

export default Page;