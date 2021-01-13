import React, {FC} from 'react';

import Menu from "./components/menu";

const App: FC = () => (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">Multimatograf</h3>
                <Menu />
            </div>
        </header>

        <main role="main" className="inner cover">
            <h1>Cover your page.</h1>
            <p>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and
                add your own fullscreen background photo to make it your own.</p>
        </main>
    </div>);

export default App;