import React from 'react'

import {Link} from "react-router-dom";
import {AiTwotoneFileMarkdown, FaGooglePlay, GrApple} from "react-icons/all"

export const Footer = () => {
  return    <footer>
    <div className="section">
      <span className="title">Scorp App</span>
      <Link to="/" className="text">
        About Us
      </Link>
      <Link to="/" className="text">
        Careers
      </Link>
      <Link to="/" className="text">
        Newsroom
      </Link>
      <Link to="/" className="text">
        Contact
      </Link>
    </div>

    <div className="section">
      <span className="title">HELP</span>
      <Link to="/" className="text">
        Support Hub
      </Link>
      <Link to="/" className="text">
        Terms & Conditions
      </Link>
      <Link to="/" className="text">
        Privacy & Cookies
      </Link>
      <Link to="/" className="text">
        Returns & Refunds
      </Link>
    </div>

    <div className="section">
      <span className="title">Business</span>
      <Link to="/" className="text">
        Business Center
      </Link>
      <Link to="/" className="text">
        Developer & Publisher
      </Link>
      <Link to="/" className="text">
        Marketing Partnership
      </Link>
    </div>

    <div className="section large horizon">
      <AiTwotoneFileMarkdown className="brand-icon" />
      <div className="vertical ml-15">
        <span className="title">Install the app</span>
        <span className="text">
            -- Insert scorp motto here --
          </span>
      </div>
    </div>

    <div className="section small">
      <FaGooglePlay className="store-icon" />
      <span className="title fs-13">Get it on Google Play©</span>
    </div>

    <div className="section small">
      <GrApple className="store-icon" />
      <span className="title fs-13">Download on the App Store®</span>
    </div>
  </footer>
}
