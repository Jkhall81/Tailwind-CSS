import React from "react";

const Colors = () => {
  return (
    <>
      {/* Text Colors */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-black">Tailwind is awesome</p>
        <p className="text-white">Tailwind is awesome</p>
        <p className="text-red-400">Tailwind is awesome</p>
        <p className="text-green-700">Tailwind is awesome</p>
        <p className="text-emerald-600">Tailwind is awesome</p>
        <p className="text-zinc-500">Tailwind is awesome</p>
        <p className="text-slate-800">Tailwind is awesome</p>
      </div>
      {/* Background Colors */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <p className="bg-blue-800">Tailwind is awesome</p>
        <p className="bg-red-800 text-white">Tailwind is awesome</p>
        <p className="bg-emerald-500">Tailwind is awesome</p>
        <p className="bg-cyan-300">Tailwind is awesome</p>
        <p className="bg-amber-600">Tailwind is awesome</p>
        <p className="bg-sky-400">Tailwind is awesome</p>
      </div>
      {/* The clever underline */}
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="underline decoration-red-500">Tailwind is underlining!</p>
        <p className="underline decoration-ermerald-500">
          Tailwind is underlining!
        </p>
        <p className="underline decoration-yellow-500">
          Tailwind is underlining!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <input
          placeholder="type something in here..."
          type="text"
          className="border border-blue-400 text-amber-700"
        />
      </div>
      {/* a divide */}
      <div className="divide-y">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </div>
      <div>
        <button className="outline outline-red-500">Button</button>
      </div>
      <div className="shadow-lg bg-cyan-500 shadow-cyan-500">Subscribe</div>
      <div className="shadow-lg bg-cyan-500 shadow-purple-500/50">
        Subscribe
      </div>
      {/* accent colors */}
      <div className="flex flex-col items-center justify-center mt-5">
        <p>This is a big Check Box</p>
        <input type="checkbox" className="accent-purple-500 h-20 w-20" />
      </div>
    </>
  );
};

export default Colors;
