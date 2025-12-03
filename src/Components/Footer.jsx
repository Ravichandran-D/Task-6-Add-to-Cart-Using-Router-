import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 bg-[#F2F4F7] mt-4">
      <FaRegCopyright className="text-[#ff0000]" />
      <p className="text-base font-medium text-center text-[#ff0000]">
        Copyright 2025, Mɾ.ɲø_ßøɖy
      </p>
    </div>
  );
};

export default Footer;
