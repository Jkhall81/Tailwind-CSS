import React from "react";

const Typography = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="font-sans">Typography</div>
        <div className="font-serif">Typography</div>
        <div className="font-mono">Typography</div>
      </div>
      <div>
        <p className="text-xs">Font Sizes</p>
        <p className="text-sm">Font Sizes</p>
        <p className="text-base">Font Sizes</p>
        <p className="text-lg">Font Sizes</p>
        <p className="text-xl font-medium">Font Sizes</p>
        <p className="text-2xl font-semibold">Font Sizes</p>
        <p className="text-3xl font-bold">Font Sizes</p>
      </div>
      <div>
        <p className="text-left">text alignment</p>
        <p className="text-center">text alignment</p>
        <p className="text-right">text alignment</p>
      </div>
    </>
  );
};

export default Typography;
