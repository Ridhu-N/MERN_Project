import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Mapscroll(props){
   return( 
   <div className="d-flex">
        <div>
            <img src={`${props.p1}`} alt="imagesfor"  style={{width:"50vh",paddingTop:"20px"}}/>
            <p style={{textAlign:"center"}}>{props.p2}</p>
            <p style={{fontSize:"small",textAlign:"center"}}>{props.p4}</p>
            <p style={{fontSize:"small",textAlign:"center"}}>{props.p3}</p>
        </div>
    </div>
   );
}
export default Mapscroll;