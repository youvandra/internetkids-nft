import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "components/LoadingScreen";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Team from "components/Home/Team";
import ShowCase from "components/Home/Showcase";
import Roadmap from "components/Home/Roadmap";
import Project from "components/Home/Project";
import Menu from "components/Menu";
import Faq from "components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);

  return (
    <div>
      <div className="wrap-body">
        <Zoom top>
          <Banner />
        </Zoom>
        {/* <Menu /> */}

        <div
          id="home-desc"
          className=""
          style={{
            background: "rgb(40 40 40)",
            paddingTop: "30px",
          }}
        >
          <Desc />
        </div>

        {/* <div
          id="home-showcase"
          className=""
          style={{
            background: "#000000",
            marginTop: "30px",
            paddingBottom: "70px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <ShowCase />
        </div> */}

        <div
          id="home-roadmap"
          className=""
          style={{
            background: "rgb(18 18 18 / 0%)",
            marginTop: "30px",
            paddingBottom: "70px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Roadmap />
        </div>
        {/* <div
          className=""
          style={{
            background: "#000000",
            marginTop: "30px",
            paddingBottom: "70px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Team />
        </div> */}
        <div
          id="home-project"
          className=""
          style={{
            background: "#f5f5f5",
            paddingTop: "30px",
            paddingBottom: "70px",
            // borderTopLeftRadius: "20px",
            // borderTopRightRadius: "20px",
          }}
        >
          <Project />
        </div>
        <div
          id="home-faq"
          className=""
          style={{
            background: "#f5f5f5",
            paddingTop: "50px",
            paddingBottom: "70px",

            // borderTopLeftRadius: "20px",
            // borderTopRightRadius: "20px",
          }}
        >
          <Faq />
        </div>
      </div>
    </div>
  );
}

export default Index;
