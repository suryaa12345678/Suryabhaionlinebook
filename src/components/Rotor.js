import React, { useEffect } from 'react';

export default function Rotor() {
  useEffect(() => {
    function spinWheel() {
      // Get the wheel element
      var wheel = document.getElementById("wheel-img");

      // Set the initial rotation angle
      var angle = 0;

      // Define the animation duration and timing function
      var duration = 3000; // 3 seconds

      // Define speed parameters
      var acceleration = 0.05;
      var maxSpeed = 10;
      var deceleration = 0.02;

      // Calculate a random number of rotations (between 5 and 10)
      var rotations = 5 + Math.random() * 5;

      // Calculate the final angle of rotation
      var finalAngle = angle + rotations * 360;

      // Apply the animation using CSS transition
      wheel.style.transition = `transform ${duration}ms ease-in-out`;

      // Function to animate the wheel with variable speed
      var animateWheel = function() {
        // Increase speed until reaching maxSpeed
        if (duration > 500) {
          duration -= acceleration * duration;
          if (duration < 500) duration = 500; // Limit minimum duration
          wheel.style.transition = `transform ${duration}ms ease-in-out`;
        }
        // Decelerate when close to final rotation
        else if (Math.abs(finalAngle - angle) < 20) {
          duration += deceleration * duration;
          wheel.style.transition = `transform ${duration}ms ease-in-out`;
        }
        
        angle += 5; // Increment rotation angle
        wheel.style.transform = `rotate(${angle}deg)`; // Apply rotation

        // Check if reached final rotation
        if (angle < finalAngle) {
          requestAnimationFrame(animateWheel); // Continue animation
        } else {
          // Snap back to the nearest full rotation
          wheel.style.transition = 'none'; // Remove transition
          wheel.style.transform = `rotate(${finalAngle % 360}deg)`;
        }
      };

      animateWheel(); // Start animation
    }

    spinWheel(); // Start spinning when component mounts

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div className="Rotor-div golden-background">
      <div className="Rotor-box0" id="wheel">
        <img
          id="wheel-img"
          src="https://www.aaonlinebook.com/images/unnamed.png"
          alt=""
        />
      </div>
      <div className="Rotor-box1">
        <h1 className="front-banner-content-heading">
          The Punter Friendly BOOK
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
        <img
          id="wheel-img"
          src="https://www.aaonlinebook.com/images/unnamed.png"
          alt=""
        />
      </div>
    </div>
  );
}