import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => <Link to={to} className="text-[1em] md:text-[1.3em] font-medium text-teal-700">{children}</Link>;

export default CustomLink;
