import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/Public";
import Home from "components/Home";
import TheGame from "components/TheGame";
import Menu from "components/Menu/LoadPdf";
import Connect from "components/Transactions";
import MenuMobile from "components/Menu";
import LoadingScreen from "components/LoadingScreen";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        {/* guest routes */}
        {/* <GuestRoutes exact path="/menu" component={Menu} /> */}
        {/* <GuestRoutes exact path="/menu-mobile" component={Menu} /> */}
        {/* <GuestRoutes exact path="/connect" component={Connect} /> */}
        <GuestRoutes exact path="/" component={Home} />
        <GuestRoutes exact path="/thegame" component={TheGame} />
      </Switch>
    </>
  );
};

export default Routes;
