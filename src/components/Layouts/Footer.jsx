import React from "react";
import Icon from "assets/img/pizzaria.png";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrap">
          <div className="content1">
            <p class="title">Internet Kids</p>
            <p>
              Copyright © Internet Kids powered by{" "}
              <span style={{ color: "#6aff6a" }}>Solana</span>
            </p>
          </div>
          <div className="content2">
            {/* <img src={Icon} alt="" srcset="" width="180" height="auto" /> */}
          </div>
          <div className="content3">
            <a target="_blank" href="https://discord.gg/bkWJHedf3X">
              <img src={Discord} alt="" width="30" />
            </a>
            <a target="_blank" href="https://twitter.com/internetkidsio">
              <img src={Twitter} alt="" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
