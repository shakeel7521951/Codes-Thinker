// import React from 'react';
// import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   const navLinks = ['Home', 'About', 'Services', 'Clients', 'Company', 'Packages'];
//   const supportLinks = ['Help Center', 'Privacy Policy', 'Terms & Conditions'];
//   const contactInfo = [
//     {
//       label: 'Hassan Manzil Basement Hall Goheer Town Bahawlpur',
//       href: '/#',
//     },
//     {
//       label: 'info@codesthinker.com',
//       href: 'info@codesthinker.com',
//     },
//     {
//       label: '+92 348 3873980',
//       href: '/#',
//     },
//   ];

//   return (
//     <footer className="bg-[#060145] text-white">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 py-10">
//         <div>
//           <div className="flex-shrink-0 flex items-center">
//             <img src="/logo.svg" alt="TOJO Global Logo" className="h-10 w-auto" />
//           </div>
//           <p className="text-md mt-5 w-[90%]">
//             We're your one-stop shop for all things digital, offering a complete range of services — Management,
//             Marketing, Development, Design, and Listing — to propel your business forward.
//           </p>
//         </div>
        
//         <div>
//           <h4 className="text-sm uppercase text-indigo-600 font-bold mb-2">Quick Link</h4>
//           <ul>
//             {navLinks.map((item, i) => (
//               <li key={i}>
//                 <a
//                   href="/#"
//                   className="group relative inline-block my-2 text-white hover:text-[#01b5e8] transition"
//                 >
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#01b5e8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm uppercase text-indigo-600 font-bold mb-2">Support</h4>
//           <ul>
//             {supportLinks.map((item, i) => (
//               <li key={i}>
//                 <a
//                   href="/#"
//                   className="group relative inline-block my-2 text-white hover:text-[#01b5e8] transition"
//                 >
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#01b5e8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm uppercase text-indigo-600 font-bold mb-2">Contact Us</h4>
//           <ul>
//             {contactInfo.map((item, i) => (
//               <li key={i}>
//                 <a
//                   href={item.href}
//                   className="group relative inline-block my-2 text-white hover:text-[#01b5e8] transition"
//                 >
//                   {item.label}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#01b5e8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-indigo-800">
//         <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-md text-white text-center md:text-right">© 2025 All Rights Reserved - Codes Thinker</p>
//           <div className="flex gap-4 mt-2 md:mb-0">
//             {[
//               { icon: <FaTwitter />, href: '/#' },
//               { icon: <FaFacebookF />, href: '/#' },
//               { icon: <FaYoutube />, href: '/#' },
//               { icon: <FaLinkedinIn />, href: '/#' },
//             ].map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.href}
//                 className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#c508ff] to-[#18c9ff] p-[2px] transition-transform duration-300 hover:scale-110"
//               >
//                 <div className="w-full h-full flex items-center justify-center bg-[#060145] rounded-full group-hover:bg-white transition-colors duration-300">
//                   <div className="text-white group-hover:text-[#060145] transition-colors duration-300">
//                     {item.icon}
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





















{/* Footer */}
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#002f3f] text-white py-12 px-4 md:px-20">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-sm">
  <div>
    <img src="/logo2.png" alt="Ireland Pay Logo" className="mb-4 h-10" />
    <p className="-mt-4 text-[7px] ml-3">PEOPLE. PAYMENTS. PURPOSE.</p>
    <p className="mt-6 text-md">Making payments simple, safe and profitable for all.</p>
  </div>

  <div>
    <h3 className=" font-bold mb-2 text-[#0EC90F] sm:mt-20">HEADQUARTERS</h3>
    <p>5000 SW 75th Ave, Suite 401</p>
    <p>Miami, FL 33155</p>
    <p>305-835-8898</p>
  </div>

  <div>
    <h3 className="text-[#0EC90F] font-bold mb-2 sm:mt-20">SOLUTIONS</h3>
    <p>Dual Pricing</p>
    <p>Accounting Integrations</p>
  </div>

  <div>
    <h3 className="text-[#0EC90F] font-bold mb-2 sm:mt-20">COMPANY</h3>
    <p>About Us</p>
    <p>Blog</p>
    <p>Contact</p>
    <p>Giving</p>
  </div>
</div>

<div className="text-white mt-10 space-y-1 px-4 sm:px-6 md:px-20">
  <p className="text-xs sm:text-sm">
    *must be on dual pricing program &nbsp;&nbsp; **for eligible accounts
  </p>
  
  <p className="text-xs sm:text-sm flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-baseline gap-1">
     <span>© 2020 Ireland Pay. All Rights Reserved | Powered by Crexed</span>
         <a href="#" className="underline">
      Terms of Use
    </a>
    <span className="hidden sm:inline">/</span>
    <a href="#" className="underline">
      Privacy Policy
    </a>
  </p>
</div>

</footer>
    </div>
  )
}

export default Footer;
