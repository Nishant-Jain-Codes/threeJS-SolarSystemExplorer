import React, { useEffect } from 'react';
import anime from 'animejs';

function StarrySky() {
  const numStars = 500;
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  const starryNight = () => {
    anime({
      targets: ".star",
      opacity: [
        {
          duration: 700,
          value: "0"
        },
        {
          duration: 700,
          value: "1"
        }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  const shootingStars = () => {
    anime({
      targets: ".wish",
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1"
        }
      ],
      width: [
        {
          value: "150px"
        },
        {
          value: "0px"
        }
      ],
      translateX: 350
    });
  };

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * vw).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * vh).toString();
  };

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <circle
          cx={getRandomX()}
          cy={getRandomY()}
          r={randomRadius()}
          stroke="none"
          strokeWidth="0"
          fill="white"
          key={i}
          className="star"
        />
      );
    }
    return stars;
  };

  const renderShootingStars = () => {
    const shootingStars = [];
    for (let i = 0; i < numStars; i++) {
      shootingStars.push(
        <div
          key={i}
          className="wish"
          style={{
            left: `${getRandomY()}px`,
            top: `${getRandomX()}px`
          }}
        />
      );
    }
    return shootingStars;
  };

  return (
    <div>
      <svg id="sky">
        {renderStars()}
      </svg>
      <div id="shootingstars">
        {renderShootingStars()}
      </div>
    </div>
  );
}

export default StarrySky;
