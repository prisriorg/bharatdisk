import React from "react";

export const Reviews = () => {
  return (
    <section className="py-12 border-toper justify-center items-center text-center py-32  md:px-16">
      <div className="animate-slideLeft container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className=" review-box shadow-lg rounded-lg p-6 mx-4 mb-4 max-w-xs">
            <p className="italic mb-4">
              &quot;The best file storage service I&apos;ve used! Easy to upload
              and share files.&quot;
            </p>
            <p className="font-semibold text-gray-300">Jane Doe</p>
          </div>
          <div className="review-box shadow-lg rounded-lg p-6 mx-4 mb-4 max-w-xs">
            <p className="italic mb-4">
              &quot;Great features and excellent customer support. Highly
              recommended!&quot;
            </p>
            <p className="font-semibold text-gray-300">John Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};
