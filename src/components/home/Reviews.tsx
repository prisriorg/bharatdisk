import React from "react";

export const Reviews = () => {
  return (
    <section className="py-12 border-t">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 shadow-lg rounded-lg p-6 mx-4 mb-4 max-w-xs">
            <p className="italic mb-4">
              &quot;The best file storage service I&apos;ve used! Easy to upload
              and share files.&quot;
            </p>
            <p className="font-semibold">Jane Doe</p>
          </div>
          <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 shadow-lg rounded-lg p-6 mx-4 mb-4 max-w-xs">
            <p className="italic mb-4">
              &quot;Great features and excellent customer support. Highly
              recommended!&quot;
            </p>
            <p className="font-semibold">John Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};
