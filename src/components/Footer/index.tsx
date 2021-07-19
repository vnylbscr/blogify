import React, { Fragment } from "react";
import "./index.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const SOCIAL_MEDIA_MENU = [
  {
    title: "Facebook",
    icon: <FacebookIcon className="social-media-icon" />,
  },
  {
    title: "Instagram",
    icon: <InstagramIcon className="social-media-icon" />,
  },
  {
    title: "Twitter",
    icon: <TwitterIcon className="social-media-icon" />,
  },
  {
    title: "Email",
    icon: <AlternateEmailIcon className="social-media-icon" />,
  },
];
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-items-container">
        {/* Item 1 */}
        <div className="social-media-container">
          <div className="social-media-title">Blogify</div>
          <div className="social-media-items">
            {SOCIAL_MEDIA_MENU.map((item) => (
              <Fragment>{item.icon}</Fragment>
            ))}
          </div>
        </div>
        {/* Item 2 */}
      </div>
    </footer>
  );
};

export default Footer;
