import React, { useEffect, useRef } from 'react';

export default function ReviewForm({ className, setFormReview }) {
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormReview(false); // Close form if click is outside
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setFormReview]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center ${className}`}
    >
      <div
        ref={formRef}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Review</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
              Review
            </label>
            <textarea
              id="review"
              rows="4"
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            ></textarea>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setFormReview(false)}
              className="text-gray-500 hover:text-red-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
