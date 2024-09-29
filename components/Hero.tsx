import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="orange"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="pink" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Image Box */}
      <div className="flex justify-center my-10 relative z-10">
        <img
          src="/profile.png"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-0"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 mt-0">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Converting Ideas into Smooth User Interactions"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Shawn, Full Stack Software Engineer Based in Seattle,
            WA
          </p>
          <a href="https://www.linkedin.com/in/seunghyukpark/" target="_blank">
            <MagicButton
              title="Connect With Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
