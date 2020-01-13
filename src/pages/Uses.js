import React from 'react';
import ReactMarkdown from 'react-markdown';
import setPageTitle from '../helpers/setPageTitle.js';

class Uses extends React.Component {
    componentDidMount() {
        setPageTitle(document, 'Uses');
    }
    render() {
        return (
            <div className="page page-Uses">
                <ReactMarkdown source={
`# Stuff I Use
As you can see by the fact I've barely styled this site, I'm by no means a professional. But here's the stuff I use anyway - you might _(MIGHT)_ find it interesting!

## Hardware
* **Laptop:** Acer Aspire 5733
* **Mouse:** Corsair Sabre RGB
* **Monitor:** HP w2007v
* **Over-ears:** Beyerdynamic DT 770 Pro (80 ohm)
* **In-ears:** Sony XB510AS

## Software
* **Operating System:** Microsoft Windows 10
* **Phone:** Nokia 7 plus
* **Browser:** Mozilla Firefox
* **Editor:** VS Code (or Sublime Text 3, for small bits)
    * **Font:** Fira Code (ligatures enabled)
* **Image Manipulation:** Adobe Photoshop CC
* **Video Editing:** Sony Vegas Pro

## Tech Stack
* **Languages:** HTML, CSS, Javascript
* **Framework:** React

## Services
* **Calendar:** Google Calendar
* **Stock Images:** [Unsplash](https://unsplash.com/)
* **Music**
    * Google Play Music
    * Spotify
`
                } />
            </div>
        )
    }
}

export default Uses;