import React from 'react';

import Page2018 from './pages/2018';
import Page2017 from './pages/2017';

const titlePrefix = "Multimatograf";
const defaultPage = "2018";

export const Pages = {
    "2018": Page2018,
    "2017": Page2017,
    // "2016",
    // "2015",
    // "2014",
    // "2013",
    // "2012",
    // "2011",
    // "2006-2010",
};

class Page extends React.Component {
    render() {
        let page = Pages[defaultPage];
        let pageKey = this.props['location'].pathname.substr(1);
        let header = "";
        if (Pages[pageKey] === undefined) {
            pageKey = defaultPage;
            header = titlePrefix + " " + pageKey;
            document.title = titlePrefix;
        } else {
            page = Pages[pageKey];
            header = titlePrefix + " " + pageKey;
            document.title = titlePrefix + " " + pageKey;
        }

        return (
            <div>
                <h1>{header}</h1>
                {page()}
            </div>
        )
    }
}

export default Page;