import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaTwitterSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
      <p>2021 &copy; Holidaze. All rights reserved</p>
    </footer>
  );
}
