import React from "react";
import { CiMobile4, CiDesktop, CiCamera, CiHeadphones } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { VscGame } from "react-icons/vsc";
import CategoryCard from "./common/CategoryCard"; // Adjust the import path as needed
import SectionHeader from "./common/SectionHeader";
import PopupAnimation from "./common/PopupAnimation";

const categories = [
  { icon: <CiMobile4 />, label: "Phones" },
  { icon: <CiDesktop />, label: "Computers" },
  { icon: <IoWatchOutline />, label: "SmartWatch" },
  { icon: <CiCamera />, label: "Camera" },
  { icon: <CiHeadphones />, label: "HeadPhones" },
  { icon: <VscGame />, label: "Gaming" },
];

const BrowserByCategory = () => {
  return (
    <section className="my-100 px-6 sm:px-14 lg:px-28">
      {/* <SectionHeader title="Categories" subtitle="Browse By Category" /> */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-10 sm:my-10 md:my-10 lg:mx-10 xl:my-16">
        {categories.map((category) => (
          <div key={category.label}>
            <PopupAnimation>
              <CategoryCard icon={category.icon} label={category.label} />
            </PopupAnimation>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowserByCategory;
