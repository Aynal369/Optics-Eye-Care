import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState({});

  useEffect(() => {
    const url = "/service-data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find((detail) => detail.id === serviceId);
      setSpecificDetail(matchedData);
    }
  }, [details, serviceId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div class="card mb-3">
              <img
                src={specificDetail.img}
                class="card-img-top"
                height="480px"
                alt={specificDetail.title}
              />
              <div class="card-body">
                <h5 class="card-title">{specificDetail.title}</h5>
                <p class="card-text">{specificDetail.shotDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
