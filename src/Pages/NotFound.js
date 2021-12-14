import React from "react";
import notFoundPic from "../Images/not-found.jpg";

const NotFound = () => {
  return (
    <main className="text-center">
      <img src={notFoundPic} alt="not-found" />
    </main>
  );
};

export default NotFound;
