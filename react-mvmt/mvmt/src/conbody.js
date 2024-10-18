import React from "react";
import {WatchScroll,VideoComponent} from "./component/watchdis";
import {MyImage,MyImageII} from "./component/wholediv";
import {Threeimg,ThreeimgII} from "./component/threeimg";
import FeMale from "./component/boygirl";
import {Scrollspy,SixImg} from "./component/scroll";
function ConBody(){
    return(
        <div>
        <MyImage />
        <Threeimg />
        <MyImageII/>
        <ThreeimgII/>
        <VideoComponent/>
        <FeMale/>
        <p style={{fontSize:'large',textAlign:'center'}}>TRENDING NOW</p>
        <WatchScroll />
        <p style={{fontSize:'large',textAlign:'center',fontWeight:'bold',paddingTop:'100px'}}>SHOP BY CATEGORY</p>
        <Scrollspy/>
        <SixImg/>
        
        </div>
    );
}
export default ConBody;
