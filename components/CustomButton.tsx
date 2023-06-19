"use client";

import { Ibutton } from "@/types";
import Image from "next/image";

Image;

const CustomButton  = ({title, containerStyles, handleClick, btnType} : Ibutton) => {
  return (
    <button
      disabled={false}
      type={btnType ||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default CustomButton;
