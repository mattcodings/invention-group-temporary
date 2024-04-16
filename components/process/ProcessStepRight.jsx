import React from "react";
import Image from "next/image";

const ProcessStepRight = ({ title, description, img, stepNumber }) => {
  return (
    <div className="p-8 text-primary">
      <div className="xl:flex xl:flex-row-reverse gap-10 w-[80%] mx-auto items-center">
      <div>
          <span className="border-4 px-6 py-4 text-2xl font-bold rounded-full mb-6 inline-block border-neutral">
            {stepNumber}
          </span>
          <h5 className="text-3xl border-b-2 mb-2 border-primary">{title}</h5>
          <p className="text-2xl pb-8">{description}</p>
        </div>
        <Image src={img} width={500} height={300} alt={title} className='mx-auto' />
        
      </div>
    </div>
  );
};

export default ProcessStepRight;
