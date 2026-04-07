import React from "react";
import SyncLoader from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader />
    </div>
  );
};

export default Loading;
