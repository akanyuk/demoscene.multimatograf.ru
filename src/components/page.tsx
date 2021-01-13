import React from 'react';

import Page2018 from './pages/2018';
import Page2017 from './pages/2017';
import Page2016 from './pages/2016';

const titlePrefix = "Multimatograf";
const defaultPage = "2018";

export const Pages = {
    "2018": Page2018,
    "2017": Page2017,
    "2016": Page2016,
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
        if (Pages[pageKey] === undefined) {
            document.title = titlePrefix;
        } else {
            page = Pages[pageKey];
            document.title = titlePrefix + " " + pageKey;
        }

        window.scrollTo(0, 0);

        return (
            <div>
                {page()}
            </div>
        )
    }
}

export default Page;