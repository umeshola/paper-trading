import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pl-24 pr-24 relative">
      {/* Add a div with absolute positioning to overlay the white blur effect */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-20 blur-lg"></div> */}

      <div className="grid grid-cols-12 relative z-10">
        <div className="col-span-7 md:text-8xl lg:text-9xl font-bold text-7xl text-pretty text-white">Discover and trade the market for better you</div>
        <div className="col-span-5">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg h-auto max-w-xl" src="/logo1.jpg" alt="image description" />
          </figure>
        </div>
      </div>

      <div className="pl-16 relative z-10">
        <button className="bg-cyan-500 hover:bg-transparent text-white hover:text-green-600 mr-10 pl-9 pt-5 pr-9 pb-5 text-xl font-bold hover:italic rounded-md transition-all duration-300">Learn</button>
        <button className="bg-cyan-500 hover:bg-transparent text-white hover:text-green-600 pl-9 pt-5 pr-9 pb-5 text-xl font-bold hover:italic rounded-md transition-all duration-300">Trade</button>
      </div>

      <div className="border-2 border-indigo-500/100 mt-10 flex justify-center relative z-10">
        <div >
          <h1 className="text-5xl font-extralight p-3 text-white">All bootStrap</h1>
        </div>

      </div>

      <div className="mt-96 relative z-10">
        <h1 className="text-7xl text-white">HOW THE SITE WORKS</h1>
      </div>

      <div className="grid grid-cols-12 mt-32 relative z-10">
        <div className="col-span-4 min-w-96">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg h-auto max-w-lg" src="/logo.jpg" alt="image description" />
          </figure>
        </div>
        <div className="col-span-6">
          <h1 className="text-5xl font-extralight p-5 text-white">This website can provide you a tool from which you can improve your trading skills without using any real money. Learn and Grow.</h1>
        </div>
        <div className="col-span-2 ">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[500px] after:w-full sm:after:w-[500px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-red-400 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-00/10 after:dark:from-red-900 after:dark:via-[#0141ff]/40 before:lg:h-[500px]">
            <button className="mt-56 rotate-90 bg-cyan-500 hover:bg-transparent text-white hover:text-green-600 mr-10 pl-9 pt-5 pr-9 pb-5 text-xl font-bold hover:italic rounded-md transition-all duration-300">More</button>
          </div>

        </div>
      </div>

      <div className="mt-96 flex justify-center relative z-10">
        <h1 className="text-7xl mt-16 text-white">About Us</h1>
      </div>

      <div className="mt-32 relative z-10">
        <h1 className="text-6xl font-light p-5 text-white">This is the project for us where we can try to learn and grow as an individual.  We are the student of CU. We as a team aspire to build something that can create a impact one the first day, So we have created this website. We like to accepts the challenge and find the creative solution for these challenges as a team. </h1>
      </div>

      <div className="mt-96 flex justify-center relative z-10">
        <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-full sm:before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-blue before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[600px] after:w-full sm:after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-500/10 after:dark:from-sky-100 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">

          <h1 className="text-7xl text-white">Team</h1>
        </div>
      </div>

      <div className="flex justify-center flex-wrap mt-32 relative z-10">
        <div className="p-10">
          <div className="border-2 border-indigo-500/100 w-96 bg-slate-900 hover:bg-transparent">
            <div >img</div>
            <div className="">I like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjds like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljf like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljfhkfjhdskljfls</div>
            <div>Umesh Ola</div>
          </div>
        </div>
        <div className="p-10">
          <div className="border-2 border-indigo-500/100 w-96 ">
            <div >img</div>
            <div className="">I like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjds like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljf like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljfhkfjhdskljfls</div>
            <div>Umesh Ola</div>
          </div>
        </div>
        <div className="p-10">
          <div className="border-2 border-indigo-500/100 w-96 ">
            <div >img</div>
            <div className="">I like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjds like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljf like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljfhkfjhdskljfls</div>
            <div>Umesh Ola</div>
          </div>
        </div>
        <div className="p-10">
          <div className="border-2 border-indigo-500/100 w-96 ">
            <div >img</div>
            <div className="">I like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjds like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljf like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljfhkfjhdskljfls</div>
            <div>Umesh Ola</div>
          </div>
        </div>
        <div className="p-10">
          <div className="border-2 border-indigo-500/100 w-96 ">
            <div >img</div>
            <div className="">I like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjds like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljf like to ola fjfewhfkdsjhf dskf hdskhfklads kfjhkdsa hfdsklafjljdsfdsfdsajhkjdshkfjhdskljfhkfjhdskljfls</div>
            <div>Umesh Ola</div>
          </div>
        </div>
        {/* Add more team member sections as needed */}
      </div>

      <div className="border-2 border-indigo-500/100 mt-32 p-6 flex justify-center relative z-10">
        Footer
      </div>
    </div>
  );
}