import React, { useState } from "react";

function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-project d-flex flex-column m-auto justify-content-center align-items-center">
        {/* <hr /> */}
        <div className="text-center">
          <h1>CHARITY AND COMMUNITY WALLET</h1>
        </div>
        <div className="wrap w-100 flex-column mx-auto">
          <div className="desc text-center pb-4">
            We will be donating 10% of profit from every mint to a charity that
            will be voted on by NFT holders. We will also create a community
            wallet with the goal of funding projects that reward IK NFT holders.
            Airdrops, giveaways, prizes for winners of The Game and live events
            will be funded with this wallet.
          </div>
          {/* <div className="w-75 mx-auto">
            <div className="img mx-auto"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Faq;
