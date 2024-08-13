import React from "react";

const UploadFile = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="pt-2 px-4 text-2xl font-bold">Upload File</h2>
        {/* <input
          type="file"
          onChange={handleFileUpload}
          className="px-4 py-2 border rounded-lg cursor-pointer"
        /> */}
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm ">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs ">
              PDF, ZIP, MKV, MP4, SVG, PNG, JPG or GIF (MAX. 1TB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadFile;
