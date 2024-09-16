import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Take initiative toward{' '}
          <span className="text-orange">your software development</span> needs
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s get in touch, and discuss how I can help you achieve your
          goals.
        </p>
        <a href="mailto:shawnpark2397@jsmastery.pro">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shawn (Seung Hyuk) Park
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
