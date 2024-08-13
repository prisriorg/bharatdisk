import React from "react";

export const HowWorking = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 border-toper"
    >
      <div className="container md:px-32 mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="working-box shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <svg
                 className="w-12 h-12"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7l9 6 9-6-9-6-9 6zm0 13l9-6 9 6-9-6-9 6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="">Upload your files to BharatDisk.</p>
          </div>
          <div className="working-box shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11V2M12 22v-4m0-6l-6 6m6-6l6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="">Share your files with others.</p>
          </div>
          <div className="working-box shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 11h6m-6 4h6m-6-8h6m-6 12h6m-6-8v2m0-2v-2m6 10v2m0-2v-2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="">
              Earn rewards based on the views and shares of your files.
            </p>
          </div>
          <div className="working-box shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <svg
                 className="w-12 h-12"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m-6-6h12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Step 4</h3>
            <p className="">
              Manage your files and rewards easily from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
