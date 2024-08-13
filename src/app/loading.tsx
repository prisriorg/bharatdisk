// /app/loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen main-background">
      <div className="text-center">
        <div className="mx-auto animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        <h2 className="text-white text-2xl font-semibold mt-4">Loading...</h2>
        <p className="text-gray-200 mt-2">Please wait while we load the content.</p>
      </div>
    </div>
  );
};

export default Loading;
