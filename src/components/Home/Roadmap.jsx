import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-team flex-column">
        {/* <hr /> */}
        <div>
          <h1>ROADMAP</h1>
        </div>
        <div>
          <VerticalTimeline>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(81, 188, 106)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                First and foremost, we are here to build a community of
                wonderful Sinners
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>

              <p>
                Below is our v1 roadmap. Expect a lot to be added as we get
                closer to launch
              </p>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2008 - 2010"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q3 & Q4 2021</h3>
              <p>
                Start of the Internet Kids Podcast and the idea is born.
                Creation of NFTs, discord, and website.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q1 2022</h3>

              <ul>
                <li>
                  Season 1 (January) - 200 NFTs public mint, one piece of
                  physical merchandise with each NFT, private community discord
                  channels created, game 1 begins, private podcasts start, first
                  monthly charitable donation voted on by holders
                </li>
                <li>
                  All Perks for NFT holders will be deployed after Season 1
                </li>
                <li>
                  Private Merch Drop 1 - Only for NFT Holders, Only 25 pieces
                  made in LA
                </li>
                <li>
                  Season 2 (February)- Second NFTs public mint, one piece of
                  physical merchandise with each NFT (Amount of NFTs will be
                  determined soon)
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q2 2022</h3>

              <ul>
                <li>
                  First Event Hosted in Miami or Austin (TBD), First airdrop
                  rewarding all holders, First giveaway rewarded to one random
                  winner (Pay for expenses to event, and unique 1/1 NFT)
                </li>
                <li>
                  Continue alternating between public NFT mints with merch
                  drops, and private merch drops just for NFT holders
                </li>
                <li>Game 2 begins after 1000 total NFTs minted</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q3 & Q4 2022</h3>

              <ul>
                <li>
                  Goal of Hosting at least 3 more events (Cities voted on by NFT
                  holders)
                </li>
                <li>
                  Continue alternating NFT seasons and private merch drops
                </li>
                <li>Game 3 begins after full sell out of 5000 NFTs</li>
                <li>Host Internet Kids Snowboarding/Skiing Trip</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                2023 and Beyond
              </h3>

              <ul>
                <li>
                  Host concerts, track days, boat days, and more events in
                  cities with large IK population
                </li>
                <li>
                  Collaborate with large artists and designers to continue
                  creating badass clothing pieces exclusively for our community
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Faq;
