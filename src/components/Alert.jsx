import Image from "next/image";
import warning from "../../public/warning.jpg";

// Simple alert pop up.
const Alert = () => {
  return (
    <>
      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
        <Image className="w-12 h-12" src={warning} alt="warning" />
        <div className="flex flex-col">
          <div className="text-xl font-medium text-black">Are You sure?</div>
          <p className="text-slate-500">You are about to delete a post.</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
