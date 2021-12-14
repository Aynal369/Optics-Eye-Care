import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ServiceItem = ({ data }) => {
  const { id, img, icon, title, shotDescription } = data;
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card shadow h-100">
        <div className="cover-img">
          <img src={img} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-evenly border-bottom border-2 mb-3">
            <img
              src={icon}
              alt="icon"
              height="25px"
              style={{ opacity: "0.5" }}
            />
            <Link to={`/service/${id}`} style={{ textDecoration: "none" }}>
              <h5 className="card-title text-primary">{title}</h5>
            </Link>
          </div>
          <p className="card-text text-center text-muted">
            {shotDescription.slice(0, 170)}
          </p>
        </div>
        <button
          onClick={handleMoreDetails}
          type="button"
          className="btn btn-light"
        >
          <FontAwesomeIcon
            icon={faLink}
            size="sm"
            className="me-1"
            color="#ccc"
          />
          More details ...
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
