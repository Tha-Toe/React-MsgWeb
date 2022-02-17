import React from "react";
import './Messenger.css';

function Messenger ()  {
    return (
        <div className="container">
        <div>
          <header className="header">
            <img className="msgIconImg" src = "https://scontent.xx.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=97xLVFZKwoQAX9b8nAb&_nc_ht=scontent.xx&oh=00_AT9r3WwZ0Nxg5mGSCBcAzmdX9f8aGeRSzxNPLqwwvsF6nQ&oe=620EC7BD" />
            <div>
              <a className="menuItem" href = "https://www.messenger.com/features">Features</a>
              <a className="menuItem" href = "https://www.messenger.com/desktop">Desktop App</a>
              <a className="menuItem" href = "https://www.messenger.com/privacy">Privacy and Safety</a>
              <a className="menuItem" href = "https://developers.facebook.com/products/messenger/">For developer</a>
            </div>
          </header>
          <div className="bodyContainer">
            <div className="leftContainer">
              <p className="hangText">Hang out anytime, anywhere</p>
              <p className="pText">Messenger makes it easy and fun to stay close to your favorite people.</p>
              <input type="text" placeholder="Email address or phone number" className="inputTag"/>
              <input type="number" placeholder="Password" className="inputTag"/>
              <div className="buttonTag">
                <button className="button">Log In</button>
                <a href="https://facebook.com/recover/initiate/?ref=www_reauth_page">forgotten your password?</a>
              </div>
              <div className="blocksmall">         
                    <input type="checkbox" />
                    <span>Keep me signed in</span>
              </div>
              <img className="appstoreimage" src="https://bit.ly/3j9PAx0" /> 
            </div>
            <div className="rightContainer">
            <img className="rightimage" src="https://apk.gold/icons:bz03bDNkc3MmbD0xcDNvJmg9cG5nJmY9Z2xtJmk9MzA2" />
            </div>
          </div>
          <footer className="footer">
            <div>© Meta 2022. The Apple and Google Play logos are trademarks of their respective owners.</div>
            <div>
              <a className = "menuItem" href="https://www.facebook.com/about/privacy/">Data Policy</a>
              <a className = "menuItem" href="https://www.facebook.com/legal/terms/">Terms</a>
              <a className = "menuItem" href="https://www.facebook.com/policies/cookies/">Cookies Policy</a>
            </div>
            <div>English(US)</div>
          </footer>
        </div>
      </div>
    )
}

export default Messenger;