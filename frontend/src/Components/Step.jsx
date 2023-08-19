import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const Category = ({ formData, setCurrentStep }) => {
  const handleChange = (e) => {
    setCurrentStep(e);
    //add value in array
  };
  const handlePrevChange = (e) => {
    setCurrentStep(e);
    //remove last element from array
  };

  return (
    <div className="bg-primary">
      <h1 className="flex justify-center font-black text-secondary lg:text-[60px] sm:text-[40px] xs:text-[40px] text-[30px] lg:leading-[98px] my-4">
        Select your Category
      </h1>

      <div className="lg:mx-40 md:mx-20 mx-10">
        <h2 className="flex justify-center text-[#E9F2EC] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          {formData.title}
        </h2>

        <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10">
          {formData.subCategories.map((category, index) => (
            <div
              key={index}
              className="my-10 w-[240px]"
              onClick={() => handleChange(category.step)}
            >
              <Tilt>
                <div className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card">
                  <div className="bg-tertiary rounded-[20px] h-[340px] flex justify-evenly items-center flex-col">
                    <img
                      className="rounded-[20px] h-[340px] w-full hover:opacity-50"
                      src={category.img}
                      alt={category.title}
                    />
                  </div>
                </div>
              </Tilt>

              <h3 className="mt-8 text-white text-[20px] font-bold text-center">
                {category.subCategoryTitle}
              </h3>
            </div>
          ))}
        </div>
        {formData.prevStep ? (
          <div className="flex justify-end">
            <button
              className="mt-8 hover:bg-yellow-200 text-primary bg-yellow-500 px-10 rounded-full text-[20px] font-bold text-center mb-20"
              onClick={() => handlePrevChange(formData.prevStep)}
            >
              Go Back
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Category;
