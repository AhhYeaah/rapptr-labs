import React, { ReactNode, useEffect, useRef } from 'react';
import { Hexagon } from './Hexagon/Hexagon';
import './ContactPageSucess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faCheckToSlot,
  faShuttleSpace,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

export function ContactPageSucess() {
  const backdrop = useRef<HTMLDivElement>(null);
  const hexagons = useRef<HTMLDivElement>(null);
  const spaceship = useRef<HTMLDivElement>(null);
  const check = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const backdropTimeDuration = 500;
    backdrop.current!.animate(
      [
        {
          background: 'rgb(0,0,0,0)',
        },
        {
          background: 'rgb(0,0,0,0.85)',
        },
      ],
      {
        duration: backdropTimeDuration,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );

    const breathingTime = 500;
    const hexagonAppearenceTimeDuration = 1000;

    hexagons.current!.animate(
      [
        {
          opacity: 0,
          top: '60vh',
        },
        {
          opacity: 1,
          top: 0,
        },
      ],
      {
        duration: hexagonAppearenceTimeDuration,
        delay: backdropTimeDuration + breathingTime,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );

    const shakeDuration = 300;

    spaceship.current!.animate(
      [
        {
          transform: 'rotate(0deg)',
        },
        {
          transform: 'rotate(-5deg)',
        },
        {
          transform: 'rotate(5deg)',
        },
        {
          transform: 'rotate(0deg)',
        },
      ],
      {
        duration: shakeDuration,
        delay:
          backdropTimeDuration +
          breathingTime +
          hexagonAppearenceTimeDuration,
        fill: 'forwards',
      }
    );

    const takeOffDuration = 1500;

    spaceship.current!.animate(
      [
        {
          transform: 'translateY(0px)',
        },
        {
          transform: 'translateY(5px)',
          offset: 0.5,
        },
        {
          transform: 'translateY(-5px)',
          opacity: 1,
          offset: 0.6,
        },
        {
          transform: 'translateY(-60px)',
          opacity: 0,
        },
      ],
      {
        duration: takeOffDuration,
        delay:
          backdropTimeDuration +
          breathingTime +
          hexagonAppearenceTimeDuration +
          shakeDuration,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );

    check.current!.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: takeOffDuration,
        delay:
          backdropTimeDuration +
          breathingTime +
          hexagonAppearenceTimeDuration +
          shakeDuration +
          takeOffDuration,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );

    text.current!.animate(
      [
        {
          opacity: 0,
          top: '30px',
        },
        {
          opacity: 1,
          top: 0,
        },
      ],
      {
        duration: 300,
        delay:
          backdropTimeDuration +
          breathingTime * 2 +
          hexagonAppearenceTimeDuration +
          shakeDuration +
          takeOffDuration,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );
  }, []);

  return (
    <div
      ref={backdrop}
      className="ContactPageSucess h-screen w-screen fixed top-0 left-0 z-50 transition flex flex-center flex-col pb-40"
    >
      <div
        ref={hexagons}
        className="relative h-[300px] w-[300px] overflow-hidden opacity-0"
      >
        <div
          className="absolute
          top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          z-30"
        >
          <div ref={spaceship}>
            <FontAwesomeIcon
              className="text-white text-5xl lg:text-[75px] rotate-[-90deg]"
              icon={faShuttleSpace}
            ></FontAwesomeIcon>
          </div>
        </div>

        <div
          className="absolute
          top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          z-30"
        >
          <div ref={check} className="opacity-0">
            <FontAwesomeIcon
              className="text-6xl lg:text-8xl text-green-600"
              icon={faCheckToSlot}
            ></FontAwesomeIcon>
          </div>
        </div>

        <Hexagon
          className="absolute 
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        text-[300px] text-rapptr-blue leading-none"
        />
        <Hexagon
          className="absolute 
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        text-[250px] z-10 text-black opacity-75 leading-none"
        />
      </div>
      <div
        ref={text}
        className="relative text-white px-5 lg:px-0 text-center mt-10 opacity-0 "
      >
        <h1 className="text-2xl lg:text-4xl font-bold mb-5">
          Thank you for reaching out!
        </h1>
        <p className=" text-xl lg:text-3xl ">
          Our team will review and respond to your message within
          24hours. <br />
          We appreciate your patience and look foward to connecting
          with you soon! 👋
        </p>
        <Button
          className="flex flex-center bg-color mx-auto mt-5 bg-[#0e303d] hover:bg-rapptr-blue rounded-lg transition-colors  duration-300"
          onClick={() => {
            navigate('/');
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <span className="pl-2">Go back to home</span>
        </Button>
      </div>
    </div>
  );
}
