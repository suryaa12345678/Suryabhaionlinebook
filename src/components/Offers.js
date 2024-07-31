import React from 'react';
import Lottie from 'lottie-react';
import Bonus from './Bonus.json';
import { number2 } from '../numbers';

export default function Offer() {

    return (
        <div className='offers'>

            <div className="offersTransparent">
                <div className='offersLeft'>

                    <p class="offerspline front-banner-content-heading">SuryaBhai Online Book</p>
                    <h3 class="offerssubtitle">Offers Free</h3>
                    <h2 class="offer_list">
                        <div>
                            <span><b>10%</b> Joining Bonus</span>
                            <span><b>3%</b> Every Deposit Bonus</span>
                            <span><b>3%</b> Referral Bonus Now</span>
                        </div>
                    </h2>
                    <a target="_blank" href={`https://wa.me/91${number2}`} class="whatsappicon">
                        <img src="./whatsapp.webp" alt="WhatsApp" width={'50px'} title="WhatsApp" />   WhatsApp
                    </a>
                </div>
                <div className='offersRight'>
                    <Lottie animationData={Bonus} />
                </div>
            </div>
        </div>
    );
}
