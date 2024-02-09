import Content from './Content';
import profile from '../assets/profile-pato.png';
import Footer from './Footer';

export default function Card() {
  return (
    <div className="card">
      <img src={profile} alt="Patricio Horn profile picture" className="card--image" />
      <div className="card--content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}
