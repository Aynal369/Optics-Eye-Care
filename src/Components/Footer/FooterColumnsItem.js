import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FooterColumnsItem = ({ item }) => {
  const { name, link, fIcon } = item;
  return (
    <>
      <li className="mt-2" style={{ color: "#ccc" }}>
        {
          (name,
          link ? (
            <Link to={link} style={{ textDecoration: "none", color: "#999" }}>
              <FontAwesomeIcon icon={fIcon} className="me-2" color="#444" />
              {name}
            </Link>
          ) : (
            name
          ))
        }
      </li>
    </>
  );
};

export default FooterColumnsItem;
