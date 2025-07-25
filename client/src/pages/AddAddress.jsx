import React from "react";
import { assets } from "../assets/assets";
const inputFiled = () => <input type="text" />;
const AddAddress = () => {
  return (
    <div className="mt-16 pb-16">
      <div className="text-2xl md:text-3xl text-gray-500">Add Shipping</div>
      <span className="font-semibold text-primary">Address</span>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md"></div>
        <img
          src={assets.add_address_iamge}
          alt="add address"
          className="md:mr-16 mb-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
