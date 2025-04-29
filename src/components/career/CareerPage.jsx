import React from "react";
const CareerPage = () => {
  return (
    <div className=" text-white min-h-screen font-sans">
     <section className="max-w-6xl mx-auto px-4 py-12 text-center">
  <h1 className="text-2xl md:text-5xl font-bold mb-4">
    Build <span className="text-purple-400">Your Future</span> with <span className="text-blue-300">Us</span>
  </h1>
  <p className="text-gray-200 max-w-4xl mx-auto mb-6 text-lg">
    TOJO Global is a leading digital solutions provider, offering a comprehensive suite of services in Management, Marketing, Development, Design, and Listing.
  </p>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
  <div className="w-full max-w-xl mx-auto">
    <img
      src="./career/1.png"
      alt="career step"
      className="w-full h-auto max-h-[23rem] object-contain"
    />
  </div>

  <div className="px-2">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Why Join Us?</h2>
    <p className="text-base sm:text-lg font-light mb-5 text-gray-200">
      Grow with us! Learn, innovate, and make a real impact. Collaborative environment, competitive benefits, and exciting opportunities await.
    </p>
    <ul className="list-disc list-inside text-base sm:text-lg font-medium text-white space-y-2">
      <li>Continuous Learning Opportunities</li>
      <li>Mentorship and Collaboration</li>
      <li>Work on Meaningful Projects</li>
      <li>Be at the Forefront of Innovation</li>
      <li>Collaborative and Fun Work Environment</li>
    </ul>
  </div>
</div>

</section>
    </div>
  );
};

export default CareerPage;
