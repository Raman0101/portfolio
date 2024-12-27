import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
        <h1 className="text-4xl font-semibold">
          Hey, I'm Raman Kumar. <br />{' '}
        </h1>
        {/* <h2 className="text-3xl">
          
        </h2> */}
        <p className="text-xl text-justify">
         Hello I am Raman Kumar. I am a B.Tech IT Student currently studying in G.L. Bajaj Institute of Technology,  Greater Noida. I am constantly developing my skills and expanding my knowledge in various areas of technology.
         <br />
         <br />
         I want to develop things that have a tangible impact on people's lives. I believe more in practical than theory. So i try to code regularly and learn new things. I'm driven by the belief that technology has the power to transform the world for the better.

         <br />
         <br />
         I also love playing online games, reading books & news on web which improves my critical thinking. I believe in living life to the fullest and finding inspiration in every moment.

         <br />
         <br />
        This website serves as my digital garden where I showcase my projects, share my insights, and connect with like-minded individuals who share my passion for technology and innovation. 
        <br />
          <br /> Find me on{' '}
          <a
            href="https://github.com/raman0101"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="www.linkedin.com/in/raman-kumar-bhagat0101"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          {' '}
         {' '}
          &{' '}
          <a
            href="https://x.com/raman_0411"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Twitter
          </a>
          .
        </p>
        <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/raman-kumar-bhagat0101/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
          >
            Projects
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
