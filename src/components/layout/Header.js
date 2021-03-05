import { Link } from "gatsby";
import React, { Fragment } from "react";

const menuData = [
  {
    title: "courses",
    icon: "/images/icons/courses.svg",
    link: "/courses",
  },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  {
    title: "Pricing",
    icon: "/images/icons/pricing.svg",
    link: "/pricing",
  },
];

const Header = () => {
  return (
    <>
      {menuData.map((item, index) => (
        <Link to={item.link} key={index}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default Header;
