import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

var action = { type: "food_category" };
var actionclothes = { type: "clothes_category" };
var actionbaby = { type: "babyshower_category" };
var actionacc = { type: "accesories_category" };
const getcategoryfood = () => {
  return action;
};

const getcategoryclothes = () => {
  return actionclothes;
};
const getcategorybaby = () => {
  return actionbaby;
};
const getcategoryacc = () => {
  return actionacc;
};
// var mapDispatchToProps = (dispatch) =>{
//     return {

//     //     onclickCat : (cat) => {
//     //         action = {type : 'change_category', text:cat}
//     //         dispatch(action);

//     //      }
//     // }
//     const
// }

export default function Home(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row" style={{ margin: "0 auto" }}>
        <Link to="/item/food">
          <div
            className="col-sm-6"
            onClick={() => {
              console.log("clickeeed");
              dispatch(getcategoryfood());
            }}
          >
            <div
              className="card"
              style={{
                border: "solid  black 2px",
                width: "550px",
                height: "550px",
                cursor: "pointer",
                marginTop: "150px",
                marginLeft: "100px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
              }}
            >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="First slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Sweet</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="https://www.simplysated.com/wp-content/uploads/2017/12/IMG_6463.jpg"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Salty</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />
            <br />
          </div>
        </Link>
        <Link to="/item/clothes">
          <div
            className="col-sm-6"
            onClick={() => {
              console.log("clickeeed");
              dispatch(getcategoryclothes());
            }}
          >
            <div
              className="card"
              style={{
                border: "solid  black 2px",
                width: "550px",
                height: "550px",
                cursor: "pointer",
                marginTop: "150px",
                marginLeft: "100px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
              }}
            >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://cdn2.vectorstock.com/i/1000x1000/49/81/female-fashion-set-hand-drawn-set-womens-clothes-vector-22744981.jpg"
                    alt="First slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Women</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="https://cdn5.vectorstock.com/i/1000x1000/94/59/men-clothes-and-accessories-set-in-doodle-style-vector-23109459.jpg"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Men</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0253/2209/4672/files/Trading_Clothes_480x480.jpg?v=1570409114"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: "balck" }}>Kids</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />
            <br />
          </div>
        </Link>
        <Link to="/item/accessories">
          <div
            className="col-sm-6"
            onClick={() => {
              console.log("clickeeed");
              dispatch(getcategoryacc());
            }}
          >
            <div
              className="card"
              style={{
                border: "solid  black 2px",
                width: "550px",
                height: "550px",
                cursor: "pointer",
                marginTop: "180px",
                marginLeft: "100px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
              }}
            >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="First slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Accessories</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />
            <br />
          </div>
        </Link>
        <Link to="/item/babyproducts">
          <div
            className="col-sm-6"
            onClick={() => {
              console.log("clickeeed");
              dispatch(getcategorybaby());
            }}
          >
            <div
              className="card"
              style={{
                border: "solid  black 2px",
                width: "550px",
                height: "550px",
                cursor: "pointer",
                marginTop: "180px",
                marginLeft: "100px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
              }}
            >
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="First slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.taYH3jLJdjG1qJhUSl6zVAHaHa&pid=Api&P=0&w=300&h=300"
                    alt="Third slide"
                    width="720px"
                    height="720px"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <br />
            <br />
          </div>
        </Link>
      </div>
    </div>
  );
}
