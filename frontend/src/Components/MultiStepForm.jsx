// MultiStepForm.js
import firestore from "../../firebaseConfig";
import { useEffect, useState } from "react";
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
  beauty,
} from "../Constants";
import ProductList from "./ProductList";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [arr, setArr] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (arr.length!=0) {
      console.log("arr is full");
      console.log(arr);
  
      const documentRef = firestore.collection("collect-output").doc("3SvfHdX9YqcPibybPQPC");
      documentRef.set({
        array: arr
      });
    }
  }, [arr]);

  
  // useEffect(() => {
  //   const documentRef = firestore.collection("collect-output").doc("0s3GSuyAUnsqiRuHyz5Z");
  //   documentRef.get().then((doc) => {
  //     if (doc.exists) {
  //       //data user kaaaaaaaaaa yaha pr h
  //       setData(doc.data());
  //       console.log("Document data:", doc.data());
        
  //     } else {
  //       console.log("No such document!");
  //     }
  //   });
  // }, [arr]);

  useEffect(() => {
    const documentRef = firestore.collection("collect-output").doc("0s3GSuyAUnsqiRuHyz5Z");
  
    const unsubscribe = documentRef.onSnapshot((doc) => {
      if (doc.exists) {
        // Data from the document is here
        setData(doc.data());
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document!");
      }
    });
      return () => {
      unsubscribe();
    };
  }, []);
  
  let content = null;
  switch (currentStep) {
    case 1:
      content = (
        <Step
          formData={qualityOfProduct}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 2:
      content = (
        <Step
          formData={broadCategory}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 3:
      content = (
        <Step
          formData={clothing}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 3.1:
      content = (
        <Step
          formData={clothingWomen}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 3.2:
      content = (
        <Step
          formData={clothingMens}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 3.3:
      content = (
        <Step
          formData={clothingChildren}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 4:
      content = (
        <Step
          formData={jewellery}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 5:
      content = (
        <Step
          formData={footwear}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 5.1:
      content = (
        <Step
          formData={footwearMen}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 5.2:
      content = (
        <Step
          formData={footwearWomen}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 5.3:
      content = (
        <Step
          formData={footwearChildren}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 6:
      content = (
        <Step
          formData={mobileAccessories}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 7:
      content = (
        <Step
          formData={beauty}
          setCurrentStep={setCurrentStep}
          arr={arr}
          setArr={setArr}
        />
      );
      break;
    case 10:
      content =(
        <ProductList data={data}/>
      ) ;
      break;
    default:
      break;
  }

  return <div>{content}</div>;
};

export default MultiStepForm;
