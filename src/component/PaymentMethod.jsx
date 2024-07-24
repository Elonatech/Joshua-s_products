import React, { useState } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCardSharp } from "react-icons/io5";
import { RiBankCard2Fill } from "react-icons/ri";
import { PiDeviceMobileFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import Input from './Input';
import { useNavigate } from 'react-router-dom';



const PaymentMethod = () => {
      const navigate = useNavigate();

    const [confirmed, setConfirmed] = useState(false)
  return (
    <div className="border-2 bg-white p-4">
      <div className="heading p-1">
        <h2 className="uppercase font-semibold">3. Payment Method</h2>
      </div>
      <div className="flex items-center">
        <Input />
        <div className="flex items-center space-x-2">
          <CiDeliveryTruck className="text-white bg-orange-400" />
          <span className="">Pay On Delivery</span>
        </div>
      </div>
      <div className="flex items-center">
        <Input />
        <div className="flex items-center space-x-2">
          <IoCardSharp className="text-white bg-orange-400" />
          <span className="">Pay With Cards</span>
        </div>
      </div>
      <div className="flex items-center">
        <Input />
        <div className="flex items-center space-x-2">
          <RiBankCard2Fill className="text-white bg-orange-400" />
          <span className="">Bank Payment/USSD</span>
        </div>
      </div>
      <div className="flex items-center">
        <Input />
        <div className="flex items-center space-x-2">
          <PiDeviceMobileFill className="text-white bg-orange-400" />
          <span className="">Mobile Money</span>
        </div>
      </div>
      <div className="flex items-center">
        <Input/>
        <div className="flex items-center space-x-2">
          <FaAddressCard className="text-white bg-orange-400" />
          <span className="">Pay With Paystack</span>
        </div>
      </div>
      <div
        onClick={() => {
         navigate("/Payment")   
        setConfirmed(true)}

        }

            
            
        className={`${
          confirmed
            ? "w-full bg-green-500 text-white p-2 items-center rounded-sm justify-center"
            : "w-full bg-orange-500 text-white p-2 items-center rounded-sm justify-center"
        }`}
      >
        <button type="submit">
          <span className=''>{`${
            confirmed ? "Payment Method Confirm" : "Confirm Payment Method"
          }`}</span>
        </button> 
      </div>
    </div>
  );
}

export default PaymentMethod