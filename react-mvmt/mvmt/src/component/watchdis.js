import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mapscroll from "./Mapscroll";
import animation from "./Image/animationvideo.mp4"
const watches = [
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc73de299/images/products/28000253_fr.jpg?sw=512&sh=512&q=85",
    des: "CHRONO CERAMIN | 45MM",
    sdes: "GLOSS BLACK",
    price: "L39,533.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw006ed264/images/products/28000086_fr.jpg?sw=512&sh=512&q=85",
    des: "LEGACY SLIM | 42MM",
    sdes: "EAGLE TAN",
    price: "L16,981.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw5fb8a4e4/images/products/28000224_fr.jpg?sw=512&sh=512&q=85 ",
    des: "AVENUE",
    sdes: "GLOSS SILVER",
    price: "L15,706.00 - L18,307.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw71501f62/images/products/28000230_fr.jpg?sw=512&sh=512&q=85 ",
    des: "VOYAGER",
    sdes: "SKYLINE SILVER",
    price: "L20,960.00 - L22,287.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc326fff8/images/products/28000244_fr.jpg?sw=512&sh=512&q=85 ",
    des: "AIRHAWK | 42MM",
    sdes: "CASHMERE",
    price: "L30,247.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw57a5c7ba/images/products/28000191_fr.jpg?sw=512&sh=512&q=85 ",
    des: "SIGNATURE SQUARE CERAMIC | 26MM",
    sdes: "TAUPE",
    price: "L29,450.00",
  },
  {
    Image:
      "https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw57ad2b29/images/products/28000206_fr.jpg?sw=512&sh=512&q=85",
    des: "AVENUE",
    sdes: "EAGLE TAN",
    price: "L15,706.00 - L18,307.00",
  },
];
function WatchScroll() {
  return (
    <div className="slide" style={{ display: "flex" }}>
      {watches.map((watch) => {
        return (
          <Mapscroll
            p1={watch.Image}
            p2={watch.des}
            p3={watch.price}
            p4={watch.sdes}
          />
        );
      })}
    </div>
  );
}

function VideoComponent() {
  return (
    <video autoPlay loop muted controls={false} style={{ width:"100%" }}>
       <source src={`${animation}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export { WatchScroll, VideoComponent };
