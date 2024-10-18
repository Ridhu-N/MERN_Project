import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
function Scrollspy() {
  return (
    <div className="container" style={{ paddingTop: "10px" }}>
      <Carousel
        className="my-slider"
        style={{ width: "100%", height: "350px" }}
      >
        <Carousel.Item>
          <div className="row d-flex justify-content-evenly">
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dwd66d59b8/home/newmenswatches.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>MENS WATCHES</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw2d762048/home/newwomenswatches.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>WOMENS WATCHES</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw8138a861/home/newmenssunglasses.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>MENS SUNGLASSES</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dwcea7757b/home/newwomenssunglasses.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>WOMEN SUNGLASSES</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw3ad7592b/home/newmensjewelry.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>MENS JEWELRY</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw395fe769/home/newwomensjewelry.jpg"
                      alt="WOMEN JEWELRY"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>WOMENS JEWELRY</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw311c5073/home/newmenseverscrolls.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>MENS BLUE LIGHT</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="slide">
                <div className="slide-img img-1">
                  <a href="/productall">
                    <img
                      src="https://www.mvmt.com/on/demandware.static/-/Sites-mvmt-eu-storefront/default/dw29bd109e/home/newwomenseverscrolls.jpg"
                      alt="MENS WATCHES"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <br />
                <div>
                  <p>WOMENS BLUE LIGHT</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
function SixImg() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Link to='/productall'>
          <img
            src="https://cdn-yotpo-images-production.yotpo.com/instagram/66/17855678777904266/medium.jpg"
            alt="watch"
            style={{ width: "100%", height: "100%" }}
          ></img>
          </Link>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-4 d-flex">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/89/17963962499346889/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
            <div className="col-4 d-flex pt-2">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/45/17867267432882345/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
            <div className="col-4 d-flex pt-2">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/66/17978516110899666/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
          </div>
          <div className="row"> 
            <div className="col-4 d-flex pt-2">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/72/17982367129858572/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
            <div className="col-4 d-flex pt-2">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/89/17963962499346889/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
            <div className="col-4 d-flex pt-2">
            <Link to='/productall'>
              <img
                src="https://cdn-yotpo-images-production.yotpo.com/instagram/72/17982367129858572/low_resolution.jpg"
                alt="watch"
                style={{ width: "100%", height: "100%" }}
              ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Scrollspy, SixImg };
