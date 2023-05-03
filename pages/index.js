import React from "react";
import Header from '../Components/header'
import HeroSection from "../Components/heroSection";
import Box from "../Components/box";
import DollarMaking from "../Components/dollarMaking";
import SpecializedTracks from "../Components/specializedTracks";
import Footer from "../Components/footer";

const Navbar = () => {
  return (
    // <>
    //   <div className="bg-gray-800 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
    //     <h1 className="w-full text-3xl font-bold text-red-600">PANAVERSE .</h1>

    //     <ul className="hidden md:flex">
    //       <li className="font-bold text-1xl p-4">Home</li>
    //       <li className="font-bold text-1xl p-4">Courses</li>
    //       <li className="font-bold text-1xl p-4">About</li>
    //       <li className="font-bold text-1xl p-4">Resources</li>
    //     </ul>
    //   </div>
    //   <div className="mt-10 text-black">
    //     <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
    //       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
    //         Certified Web 3.0 & Metaverse Developer With Panaverse
    //       </h1>
    //       <div className="flex justify-center items-center"></div>
    //       <p className="md:text-2xl text-xl font-bold text-gray-800">
    //         A One and Quarter Years Panaverse DAO Earn as you Learn Program.
    //         Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
    //         Cloud, Edge, and Ambient Computing/IoT Technologies
    //       </p>
    //       <div className="flex justify-center">
    //         <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
    //           Apply Now
    //         </button>
    //         <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <section class="mt-5 bg-gray-200 text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto flex flex-wrap">
    //       <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    //         <Image
    //           src="/dao.png"
    //           alt="Picture of the author"
    //           width={700}
    //           height={700}
    //         />
    //       </div>
    //       <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    //         <div class="flex flex-col mb-10 lg:items-start items-center">
    //           <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-6 h-6"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    //             </svg>
    //           </div>
    //           <div class="flex-grow">
    //             <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
    //               Shooting Stars
    //             </h2>
    //             <p class="leading-relaxed text-base">
    //               Blue bottle crucifix vinyl post-ironic four dollar toast vegan
    //               taxidermy. Gastropub indxgo juice poutine.
    //             </p>
    //             <a class="mt-3 text-indigo-500 inline-flex items-center">
    //               Learn More
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 class="w-4 h-4 ml-2"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M5 12h14M12 5l7 7-7 7"></path>
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //         <div class="flex flex-col mb-10 lg:items-start items-center">
    //           <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-6 h-6"
    //               viewBox="0 0 24 24"
    //             >
    //               <circle cx="6" cy="6" r="3"></circle>
    //               <circle cx="6" cy="18" r="3"></circle>
    //               <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
    //             </svg>
    //           </div>
    //           <div class="flex-grow">
    //             <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
    //               The Catalyzer
    //             </h2>
    //             <p class="leading-relaxed text-base">
    //               Blue bottle crucifix vinyl post-ironic four dollar toast vegan
    //               taxidermy. Gastropub indxgo juice poutine.
    //             </p>
    //             <a class="mt-3 text-indigo-500 inline-flex items-center">
    //               Learn More
    //               <svg
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 class="w-4 h-4 ml-2"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M5 12h14M12 5l7 7-7 7"></path>
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //         <div class="flex flex-col  lg:items-start items-center"></div>
    //       </div>
    //     </div>
    //   </section>
    //   <section class="mt-10 bg-gray-800 text-white ">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-col text-center w-full mb-20">
    //         <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
    //           The Program in a Nutshell: Earn While You Learn
    //         </h1>
    //         <p class="lg:w-2/3 mx-auto leading-relaxed text-xl">
    //           In this brand-new type of curriculum, students will learn how to
    //           make money and boost exports in the classroom and will begin doing
    //           so within six months of the program’s beginning. It resembles a
    //           cross between a corporate venture and an educational project.
    //         </p>
    //       </div>
    //       <div class="flex flex-wrap text-white">
    //         <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    //           <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
    //             Web 3
    //           </h2>
    //           <p class="leading-relaxed text-base mb-4">
    //             Web 3.0, sometimes known as Web 3, is the concept of the next
    //             generation of the web, in which most users will be connected via
    //             a decentralized network and have access to their own data. This
    //             article taught us about the technologies that are anticipated to
    //             advance and change in the upcoming years
    //           </p>
    //           <a class="text-white inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //         <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    //           <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
    //             Metaverse
    //           </h2>
    //           <p class="leading-relaxed text-base mb-4">
    //             In science fiction, the "metaverse" is a hypothetical iteration
    //             of the Internet as a single, universal, and immersive virtual
    //             world that is facilitated by the use of virtual reality (VR) and
    //             augmented reality (AR) headsets.
    //           </p>
    //           <a class="text-white inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //         <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    //           <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
    //             Artificial Intelligence
    //           </h2>
    //           <p class="leading-relaxed text-base mb-4">
    //             Artificial intelligence is the simulation of human intelligence
    //             processes by machines, especially computer systems. Specific
    //             applications of AI include expert systems, natural language
    //             processing, speech recognition and machine vision.
    //           </p>
    //           <a class="text-white inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //         <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
    //           <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
    //             Full Stack Developer
    //           </h2>
    //           <p class="leading-relaxed text-base mb-4">
    //             A full stack web developer is a person who can develop both
    //             client and server software. In addition to mastering HTML and
    //             CSS, he/she also knows how to: Program a browser (like using
    //             JavaScript, jQuery, Angular, or Vue) Program a server (like
    //             using PHP, ASP, Python, or Node
    //           </p>
    //           <a class="text-white inline-flex items-center">
    //             Learn More
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 ml-2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section class=" text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-wrap -m-4">
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/Ai.jpeg"
    //               alt="Picture of the author"
    //               width={700}
    //               height={700}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Machine Learning
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/artificial-intellegence.jpg"
    //               alt="Picture of the author"
    //               width={700}
    //               height={700}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Artificial Intelligence
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/gettyimages-1348369701.webp"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Web 3 Metverse
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/What_Is_Metaverse_Technology.avif"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Web 3 Metaverse
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/enterprise-AI.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Deep Learning
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/Deep-Learning-vs-Machine-Learning.avif"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Block Chain
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/960x0.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Cloud Native & Mobile Web Computing
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/computer_networks.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Ambient Computing & loT Specialization
    //             </h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section class=" text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-wrap -m-4">
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/Ai.jpeg"
    //               alt="Picture of the author"
    //               width={700}
    //               height={700}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Machine Learning
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/artificial-intellegence.jpg"
    //               alt="Picture of the author"
    //               width={700}
    //               height={700}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Artificial Intelligence
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/gettyimages-1348369701.webp"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Web 3 Metverse
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/What_Is_Metaverse_Technology.avif"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Web 3 Metaverse
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/enterprise-AI.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Deep Learning
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/Deep-Learning-vs-Machine-Learning.avif"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Block Chain
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/960x0.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Cloud Native & Mobile Web Computing
    //             </h2>
    //           </div>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <a class="block relative h-48 rounded overflow-hidden">
    //             <Image
    //               src="/computer_networks.jpg"
    //               alt="Picture of the author"
    //               width={800}
    //               height={800}
    //             />
    //           </a>
    //           <div class="mt-4">
    //             <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 class="text-gray-900 title-font text-lg font-medium">
    //               Ambient Computing & loT Specialization
    //             </h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section class="text-gray-600 body-font relative">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-col text-center w-full mb-12">
    //         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    //           Contact Us
    //         </h1>
    //         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
    //           Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
    //           gentrify.
    //         </p>
    //       </div>
    //       <div class="lg:w-1/2 md:w-2/3 mx-auto">
    //         <div class="flex flex-wrap -m-2">
    //           <div class="p-2 w-1/2">
    //             <div class="relative">
    //               <label for="name" class="leading-7 text-sm text-gray-600">
    //                 Name
    //               </label>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div>
    //           <div class="p-2 w-1/2">
    //             <div class="relative">
    //               <label for="email" class="leading-7 text-sm text-gray-600">
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div>
    //           <div class="p-2 w-full">
    //             <div class="relative">
    //               <label for="message" class="leading-7 text-sm text-gray-600">
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    //               ></textarea>
    //             </div>
    //           </div>
    //           <div class="p-2 w-full">
    //             <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    //               Button
    //             </button>
    //           </div>
    //           <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
    //             <a class="text-indigo-500">example@email.com</a>
    //             <p class="leading-normal my-5">
    //               49 Smith St.
    //               <br />
    //               Saint Cloud, MN 56301
    //             </p>
    //             <span class="inline-flex">
    //               <a class="text-gray-500">
    //                 <svg
    //                   fill="currentColor"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   class="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                 </svg>
    //               </a>
    //               <a class="ml-4 text-gray-500">
    //                 <svg
    //                   fill="currentColor"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   class="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                 </svg>
    //               </a>
    //               <a class="ml-4 text-gray-500">
    //                 <svg
    //                   fill="none"
    //                   stroke="currentColor"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   class="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <rect
    //                     width="20"
    //                     height="20"
    //                     x="2"
    //                     y="2"
    //                     rx="5"
    //                     ry="5"
    //                   ></rect>
    //                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //                 </svg>
    //               </a>
    //               <a class="ml-4 text-gray-500">
    //                 <svg
    //                   fill="currentColor"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   class="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                 </svg>
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <footer class="text-white bg-gray-800 body-font">
    //     <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //       <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    //         <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //           <span class="ml-3 text-2xl text-white">PANAVERSE</span>
    //           <Image
    //             src="/Logo.png"
    //             alt="Picture of the author"
    //             width={80}
    //             height={60}
    //           />
    //         </a>
    //         <p class="mt-2 text-xl text-white">
    //           The Presidential Initiative for Artificial Intelligence and
    //           Computing
    //         </p>
    //       </div>
    //       <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-bold text-white tracking-widest text-2xl mb-3">
    //             COURSES
    //           </h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class=" text-white text-1xl hover:text-red-400">
    //                 Artificial Intelligence
    //               </a>
    //             </li>
    //             <li>
    //               <a class="text-white text-1xl hover:text-red-400">
    //                 Cloud Native Computing
    //               </a>
    //             </li>
    //             <li>
    //               <a class="text-white text-1xl hover:text-red-400">
    //                 Block Chain
    //               </a>
    //             </li>
    //             <li>
    //               <a class="text-white text-1xl hover:text-red-400">
    //                 Web 3 Metaverse
    //               </a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2
    //             class="title-font font-bold text-white text-2xl tracking-widest
    //      mb-3"
    //           >
    //             PIAIC
    //           </h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class="text-white hover:text-gray-800">Help Centre</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:text-gray-800">Website</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:text-gray-800">Announcement</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:text-gray-800">Bootcamp</a>
    //             </li>
    //           </nav>
    //         </div>
    //         <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    //           <h2 class="title-font font-bold to-white tracking-widest text-2xl mb-3">
    //             ABOUT
    //           </h2>
    //           <nav class="list-none mb-10">
    //             <li>
    //               <a class="text-white hover:texto-white">First Link</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:texto-white">Second Link</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:texto-white">Third Link</a>
    //             </li>
    //             <li>
    //               <a class="text-white hover:texto-white">Fourth Link</a>
    //             </li>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="bg-gray-100">
    //       <div class=" justify-center font-extrabold text-3xl  container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    //         <p class="text-gray-500 text-sm text-center sm:text-left">
    //           Made By
    //           <a
    //             href="https://twitter.com/knyttneve"
    //             rel="noopener noreferrer"
    //             class="text-gray-600 ml-1"
    //             target="_blank"
    //           >
    //             Abdul Rehman Taufeeq
    //           </a>
    //         </p>
    //         <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
    //           <a class="text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-5 h-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-5 h-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-5 h-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //             </svg>
    //           </a>
    //           <a class="ml-3 text-gray-500">
    //             <svg
    //               fill="currentColor"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="0"
    //               class="w-5 h-5"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 stroke="none"
    //                 d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //               ></path>
    //               <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //             </svg>
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </footer>
    // </>
    <>
      <section className="bg-[url('/background.jpg')]">
        <Header></Header>
        <HeroSection></HeroSection>
        <Box></Box>
        <DollarMaking></DollarMaking>
        <SpecializedTracks></SpecializedTracks>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Navbar;
