import React from 'react';
import setPageTitle from '../helpers/setPageTitle.js';

class Uses extends React.Component {
    componentDidMount() {
        setPageTitle(document, '/uses');
    }
    render() {
        return (
            <div className="page page-Uses">
                <h1>Stuff I Use</h1>
                <p>As you can see by the fact I haven't even styled this site, I'm by absolutely no means a professional, but nonetheless here's what I use</p>

                <h2>Hardware</h2>
                <ul>
                    <li><b>Laptop:</b> Acer Aspire 5733</li>
                    <li><b>Mouse:</b> Corsair Sabre RGB</li>
                    <li><b>Monitor:</b> HP w2007v</li>
                    <li><b>Over-ears:</b> Beyerdynamic DT 770 Pro (80 ohm)</li>
                    <li><b>In-ears:</b> Sony XB510AS</li>
                </ul>

                <h2>Software and Stuff</h2>
                <ul>
                    <li><b>Browser:</b> Mozilla Firefox</li>
                    <li><b>Editor:</b> VS Code (ST3 for small things)</li>
                    <li><b>Font:</b> Fira Code</li>
                    <li><b>Calendar:</b> Google Calendar</li>
                    <li><b>Video Editing:</b> Magix Vegas Pro 17</li>
                    <li><b>Package manager:</b> npm (planning to switch to yarn)</li>
                    <li><b>Framework:</b> React</li>
                    <li><b>Stock Images:</b> Unsplash</li>
                    <li><b>Music:</b> Google Play Music</li>
                    <li><b>Music:</b> Spotify</li>
                </ul>
            </div>
        )
    }
}

export default Uses;