'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { CanvasRevealEffect } from './ui/CanvasRevealEffect';

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        <span className="text-orange">Development</span> steps
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* Step 1: Very Light Orange */}
        <Card
          title="Design & Architect"
          icon={<AceternityIcon order="Step 1" />}
          des="We'll design and architect the website, defining the overall structure and layout. This step involves understanding the user's needs, setting the aesthetic tone, and planning the technical architecture."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-orange-100 rounded-3xl overflow-hidden"
            colors={[
              [255, 223, 186], // Very light orange
            ]}
          />
        </Card>

        {/* Step 2: Medium Orange */}
        <Card
          title="Development & Testing"
          icon={<AceternityIcon order="Step 2" />}
          des="During this phase, we bring the designs to life by writing the code. Alongside development, we conduct rigorous testing to ensure the website functions as expected across all devices and scenarios."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-orange-300 rounded-3xl overflow-hidden"
            colors={[
              [255, 165, 0], // Medium orange
            ]}
            dotSize={2}
          />
        </Card>

        {/* Step 3: Strong Orange */}
        <Card
          title="Deployment & Improvements"
          icon={<AceternityIcon order="Step 3" />}
          des="We deploy the website and monitor its performance. Based on user feedback, we continuously make improvements to enhance the user experience and maintain the website's performance."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-orange-500 rounded-3xl overflow-hidden"
            colors={[
              [255, 140, 0], // Strong orange
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: '#E4ECFF' }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#fcffcb_0%,#FFA500_50%,#9b965a_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-orange backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
