import React from "react";
import "./Banner.css";
import cloud1 from "./../../../Images/Banner/cloud1.png";
import cloud2 from "./../../../Images/Banner/cloud2.png";
import cloud3 from "./../../../Images/Banner/cloud3.png";
import cloud4 from "./../../../Images/Banner/cloud4.png";
import cloud5 from "./../../../Images/Banner/cloud5.png";
const Banner = () => {
  return (
    <div class="banner">
      <div class="clouds">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-12">
              <div class="input-group  mb-3 my-1 py-5 w-50 mx-auto">
                <input
                  type="text"
                  class="form-control border rounded  bg-light fs-3"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button type="button" class="btn btn-success text-white fs-4 rounded border-secondary ms-2">Search Tour</button>

              </div>
              <div className="banter_Text shadow mt-1">
                <h1 className="text-center text-secondary fs-1">
                  ADVENTURE IS WORTHWHILE WITH US
                </h1>
                <p className=" w-50 w-lg-50 w-md-75 w-sm-100 mx-auto text-dark text-center fs-3">
                  An adventure is any kind of exciting experience that is a bold or risky undertaking.
                  From traveling and exploring new places to extreme sports like scuba diving, sky diving, parachuting.
                </p>
              </div>

            </div>
          </div>
        </div>
        <img src={cloud1} style={{ "--i": "1" }} />
        <img src={cloud2} style={{ "--i": "2" }} />
        <img src={cloud3} style={{ "--i": "3" }} />
        <img src={cloud4} style={{ "--i": "4" }} />
        <img src={cloud5} style={{ "--i": "5" }} />
      </div>
    </div >
  );
};

export default Banner;
