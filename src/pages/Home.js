import React from 'react';
import setPageTitle from '../helpers/setPageTitle.js';

class Home extends React.Component {
    componentDidMount() {
        setPageTitle(document, 'Home');
    }
    render() {
        return (
            <div className="page page-Home">
                Welcome! There's not much here yet. Look back later!
            </div>
        )
    }
}

export default Home;