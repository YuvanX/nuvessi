import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-10 flex justify-between items-end">
      <div className="text-9xl text-[#E5E5E3] font-semibold tracking-tighter">
        slavan.
      </div>
      <div className="mb-5 flex gap-10 text-[#E5E5E3]">
       <FaInstagram size={20} />
       <FaXTwitter size={20} />
      </div>
    </div>
  );
};
