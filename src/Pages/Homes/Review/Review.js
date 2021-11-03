import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from "./../../../Images/Review/pic1.png";
import sliderImg2 from "./../../../Images/Review/pic2.png";
import sliderImg3 from "./../../../Images/Review/pic3.png";
import sliderImg4 from "./../../../Images/Review/pic4.png";
import "./Review.css";

const Review = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="my-5">
      <div className="title">
        <h4 className="sub-heading">Our Customers Review</h4>
        <h3 class="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h3>
      </div>
      <div className="review_slider">
        <div className="container">
          <div className="row">
            <Carousel responsive={responsive}>
              <div className="review ">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg1} alt="" />
                  <h3 className="color-pink">Selena</h3>
                  <p>
                    Most people’s experience of the Norwegian fjords is from the deck of a cruise ship, but it’s more rewarding to set out on foot and explore.I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg2} alt="" />
                  <h3 className="color-pink">Trevar Loard </h3>
                  <p>
                    From this point, it’s an easy walk across white granite slabs with stunning views of the fjord below. Soon the rock itself comes into sight as you negotiate a narrow path along the cliffs. It juts out into the air, high above the water, and there are no
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg3} alt="" />
                  <h3 className="color-pink">john deo</h3>
                  <p>
                    I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden. Cruise passengers take day trips here to see the Langfoss Waterfall; it’s a 612m drop making it one of Norway’sfinest.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg4} alt="" />
                  <h3 className="color-pink">Hulk</h3>
                  <p>
                    I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden. Cruise passengers take day trips here to see the Langfoss Waterfall; it’s a 612m drop making it one of Norway’sfinest.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review ">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg1} alt="" />
                  <h3 className="color-pink">Selena</h3>
                  <p>
                    Most people’s experience of the Norwegian fjords is from the deck of a cruise ship, but it’s more rewarding to set out on foot and explore.I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg2} alt="" />
                  <h3 className="color-pink">Captain America</h3>
                  <p>
                    I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden. Cruise passengers take day trips here to see the Langfoss Waterfall; it’s a 612m drop making it one of Norway’sfinest.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box border border-4 border-info rounded-pill">
                  <img className="border border-4 border-info rounded-pill" src={sliderImg4} alt="" />
                  <h3 className="color-pink">Tony Stark</h3>
                  <p>
                    I leave my base in Stavanger and head north through tunnels and even a ferry before arriving at Åkrafjorden. Cruise passengers take day trips here to see the Langfoss Waterfall; it’s a 612m drop making it one of Norway’sfinest.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                </div>
              </div>


            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
