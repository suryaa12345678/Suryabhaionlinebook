import React from 'react'
import Lottie from 'lottie-react';
import Casino01 from './Casino01.json'

export default function Welcome() {
  return (
    <div className="Welcome-div">
      <h1 className="whyhead front-banner-content-heading">Why SuryaBhai best in India?</h1>
      <div className='whycontent'>
        <div className='whyimg'>
          <Lottie animationData={Casino01} />
        </div>
        <div className='whybox'>
          <li>Min 100 deposit</li>
          <li>Superfast service</li>
          <li>2 min id provide time</li>
          <li>5 min withdrawal and 1 min deposit time</li>
          <li>10% bonus on new id and 3% on every refill</li>
          <li>Unlimited withdrawal in single day</li>
          <li>Minimum deposit and withdrawal is 100</li>
          <li>Get 24/7 customer support and calling service</li>
          <li>Higher winning chance 24/7 deposit and withdrawals</li>
          <li>No tax and commissions on withdrawal</li>
          <li>Hassle free gameplay 100% legal and safe platform</li>
          <li>Partners of big company like Diamond, World777, Skyexch</li>
        </div>
      </div>
    </div>
  );
}
