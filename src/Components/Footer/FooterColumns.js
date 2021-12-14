import React from "react";
import FooterColumnsItem from "./FooterColumnsItem";

const FooterColumns = (props) => {
  const { Title, Items } = props;
  return (
    <div className="col-lg-2 col-sm-6 mt-5 mx-auto">
      <div>
        <h4 className="text-primary">{Title}</h4>
        <hr className="bg-light" />
        <ul className="list-unstyled mt-4">
          {Items.map((item, index) => (
            <FooterColumnsItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterColumns;
