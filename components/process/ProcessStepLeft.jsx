import React from "react";
import Image from "next/image";

const ProcessStepLeft = ({ title, description, img, stepNumber }) => {
  return (
    <div className="bg-primary p-8 text-white">
      <div className="xl:flex gap-10 w-[80%] mx-auto items-center">
        <div>
          <span className="border-4 px-6 py-4 text-2xl font-bold rounded-full mb-6 inline-block border-neutral">
            {stepNumber}
          </span>
          <h5 className="text-3xl border-b-2 mb-2">{title}</h5>
          <p className="text-2xl pb-8">{description}</p>
        </div>
        <Image src={img} width={500} height={300} alt={title} className='mx-auto'/>
      </div>
    </div>
  );
};

export default ProcessStepLeft;
