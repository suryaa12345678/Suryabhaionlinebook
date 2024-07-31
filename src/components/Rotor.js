
import Lottie from 'lottie-react';
import Casino from './Casino.json';
import { number1, number2 } from '../numbers';

export default function Rotor() {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className="Rotor-div golden-background">
      <div className="Rotor-box0" id="wheel">
        <Lottie animationData={Casino}
        />
      </div>
      <div className="Rotor-box1">
        <h1 className="front-banner-content-heading">
          SuryaBhai Online BOOK
        </h1>
        <h3>
          We Deals With All Branded Sites, And Present The Fastest Withdrawal
          Service.
        </h3>
        <hr className="Rotor-line" />
        <h3>We Deals Only On WhatsApp</h3>
        <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick(`https://wa.me/91${number1}`)}>+91 {number1}</button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick(`https://wa.me/91${number2}`)}>+91 {number2}</button>
        <a target="_blank" href={`https://wa.me/91${number1}`} class="claimButton golden-btn"><span>Get your free ID Here</span></a>
      </div>
      <div className="Rotor-box2" id="wheel">
        <Lottie animationData={Casino}
        />
      </div>
    </div>
  );
}
