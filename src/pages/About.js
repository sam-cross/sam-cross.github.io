import React from 'react';
import ReactMarkdown from 'react-markdown';
import setPageTitle from '../helpers/setPageTitle.js';

import aboutData from '../data/markdown/aboutData.md';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutData: ''
        };
    }
    componentDidMount() {
        setPageTitle(document, 'About');

        fetch(aboutData)
        .then(res => {
            return res.text();
        })
        .then(text => {
            this.setState({ aboutData: text });
        });
    }
    render() {
        return (
            <div className="page page-About">
                <ReactMarkdown source={
`Hi, I'm Sam!

Sometimes I call myself a web developer but that's a little glorified. I dabble in web technologies such as HTML5, CSS3 and JavaScript. I've been on-and-off "learning" React since whenever react-router v4 was in its early stages. I used to know Python and C++, so that's cool.

# Links
* [GitHub](https://github.com/sam-cross)`
                } />
            </div>
        )
    }
}

export default About;