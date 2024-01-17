import React from "react";
import Image from "next/image";

const Positioning = () => {
  return (
    <>
      <div className="relative h-12 w-1/2 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>absolute child</p>
        </div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100 mt-4">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300">
          top left
        </div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100 mt-4">
        <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300">
          top right
        </div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100 mt-4">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300">
          bottom right
        </div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100 mt-4">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300">
          bottom left
        </div>
      </div>
      <div className="relative h-32 w-32 bg-yellow-100 mt-4">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300">
          span the top
        </div>
      </div>
      <div className="w-1/2">
        <Image
          className="float-left m-4"
          width={300}
          height={300}
          src="/horse.jpg"
          alt="picture of a horse"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          magnam aut nemo rerum recusandae non! Quod impedit hic nihil
          consequatur iure repellendus molestiae dolorum dolores beatae, dolore
          error doloribus delectus tempore ut reprehenderit quae facilis eius
          nemo pariatur? Doloremque optio veniam quae ad hic modi itaque
          suscipit error magni odio.
        </p>
      </div>
    </>
  );
};

export default Positioning;
