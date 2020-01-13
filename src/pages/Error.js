import React from 'react';
import setPageTitle from '../helpers/setPageTitle.js';

class Error extends React.Component {
    componentDidMount() {
        setPageTitle(document, 'Error');
    }
    render() {
        return (
            <div className="page page-Error">
                This page doesn't exist. Here, have a random link which you totally shouldn't click!
                <a href="https://github.com/sam-cross">clickmeclickmeclickme</a>
            </div>
        )
    }
}

export default Error;