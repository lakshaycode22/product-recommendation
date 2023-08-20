// MultiStepForm.js
import React, { useState } from "react";
import Step from "./Step";
import {
  broadCategory,
  qualityOfProduct,
  clothing,
  clothingWomen,
  clothingMens,
  clothingChildren,
  jewellery,
  footwear,
  footwearChildren,
  footwearMen,
  footwearWomen,
  mobileAccessories,
  beauty
} from "../Constants";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // create a array and pass in every value;

  let content = null;
  switch (currentStep) {
    case 1:
      content = (
        <Step formData={qualityOfProduct} setCurrentStep={setCurrentStep} />
      );
      break;
    case 2:
      content = (
        <Step formData={broadCategory} setCurrentStep={setCurrentStep} />
      );
      break;
    case 3:
      content = <Step formData={clothing} setCurrentStep={setCurrentStep} />;
      break;
    case 3.1:
      content = (
        <Step formData={clothingWomen} setCurrentStep={setCurrentStep} />
      );
      break;
    case 3.2:
      content = (
        <Step formData={clothingMens} setCurrentStep={setCurrentStep} />
      );
      break;
    case 3.3:
      content = (
        <Step formData={clothingChildren} setCurrentStep={setCurrentStep} />
      );
      break;
    case 4:
      content = <Step formData={jewellery} setCurrentStep={setCurrentStep} />;
      break;
    case 5:
      content = <Step formData={footwear} setCurrentStep={setCurrentStep} />;
      break;
    case 5.1:
      content = <Step formData={footwearMen} setCurrentStep={setCurrentStep} />;
      break;
    case 5.2:
      content = (
        <Step formData={footwearWomen} setCurrentStep={setCurrentStep} />
      );
      break;
    case 5.3:
      content = (
        <Step formData={footwearChildren} setCurrentStep={setCurrentStep} />
      );
      break;
    case 6:
      content = (
        <Step formData={mobileAccessories} setCurrentStep={setCurrentStep} />
      );
      break;
    case 7:
        content = (
          <Step formData={beauty} setCurrentStep={setCurrentStep} />
        );
        break;
    default:
      break;
  }

  return <div>{content}</div>;
};

export default MultiStepForm;
