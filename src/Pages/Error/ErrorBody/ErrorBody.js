import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import './ErrorBody.css'

const ErrorBody = () => {
  return (
    <div class="page_404">
      <div class="container">
        <div class="d-flex flex-column ">
          <div >

            <div class="four_zero_four_bg  ">
              <h1 class="text-center ">404</h1>


            </div>

            <div class="contant_box_404 fs-1 mx-auto">
              <h3 class="fs-1 fw-bold">
                Look like you're lost
              </h3>

              <p>The page you are looking for not avaible!</p>
              <Link to="/"><Button className="link_404 btn color-pink fs-1 fw-bold">Go to Home</Button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>



    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12 text-center">
    //         <img src={errorImg} className="my-5 img-fluid " alt="" />
    //         <h1 className="ts-2">OOPS! THAT PAGE CAN’T BE FOUND.</h1>
    //         <h3 className="text-Gray my-3">
    //           The page you are looking is not available or has been removed. Try
    //           going to Home Page by using the button below.
    //         </h3>
    //         <Link to="/home">
    //           <button className="btn btn-travel mb-5">
    //             <i className="fas fa-arrow-left "></i> Home
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ErrorBody;
