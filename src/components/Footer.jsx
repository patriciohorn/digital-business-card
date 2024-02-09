import '../styles.css';
import twitterIcon from '../assets/twitter-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import githubIcon from '../assets/github-icon.svg';

export default function Footer() {
  return (
    <ul className="card--social_icons">
      <li>
        <a href="#">
          <img src={twitterIcon} />
        </a>
      </li>

      <li>
        <a href="#">
          <img src={facebookIcon} />
        </a>
      </li>

      <li>
        <a href="#">
          <img src={instagramIcon} />
        </a>
      </li>

      <li>
        <a href="#">
          <img src={githubIcon} />
        </a>
      </li>
    </ul>
  );
}
