
import Lottie from 'lottie-react';
import Casino from './Casino.json';

export default function Rotor() {

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
        <br />
        <br />
        <button className="btn golden-btn btn-warning">+918438948999</button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn golden-btn btn-warning" >+914857392747</button>
      </div>
      <div className="Rotor-box2" id="wheel">
      <Lottie animationData={Casino}
        />
      </div>
    </div>
  );
}