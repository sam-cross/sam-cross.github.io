import React from 'react';
import setPageTitle from '../helpers/setPageTitle.js';

class Home extends React.Component {
    componentDidMount() {
        setPageTitle(document, 'Home');
    }
    render() {
        return (
            <div className="page page-Home">
                This almost didn't exist, but I just had to add a homepage.
                <a href="https://github.com/sam-cross">Check out my GitHub while I work on this site.</a>
            </div>
        )
    }
}

export default Home;