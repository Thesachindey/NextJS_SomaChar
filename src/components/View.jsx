import React from "react";

const View = async () => {

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return <div>100k views!</div>;
};

export default View;
