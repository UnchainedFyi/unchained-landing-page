import React from "react";
import { useIsMobile  } from "../../helpers/isMobile";

export const About = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{paddingBottom: 100}}>
      <h1
        style={{ marginBottom: 50 }}
        className="title animated animatedFadeInUp fadeInUp"
      >
        About Us
      </h1>
      <div
        className="fade-in-content"
        style={{ textAlign: "left", paddingLeft: isMobile ? "10%" : "30%", paddingRight: isMobile ? "10%" : "30%", lineHeight: 2}}
      >
      <p style={{paddingBottom: 20}}>
        Public blockchain data is difficult to consume at scale (requiring block explorers, running a node, etc). 
        The goal at Unchained is to make analyzing {" "}
        <a style={{color: "#E4E5F1"}} target="_blank" rel="noopener noreferrer" href="https://www.anyblockanalytics.com/blog/what-is-a-blockchain-rpc-node-api/">blockchain RPC data</a> 
        {" "} as easy as running a SQL query. 
      </p>
      <p style={{paddingBottom: 20}}>
        We provide our customers with access to our blockchain {" "}
        <a style={{color: "#E4E5F1"}} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Data_lake">data lake</a>
        {" "} and empower them to consume and analyze data with tools common to engineers and analysts.
      </p>
      <p style={{paddingBottom: 20}}>
        Since receiving a grant from {" "}
        <a style={{color: "#E4E5F1"}} target="_blank" rel="noopener noreferrer" href="https://near.org/grants">NEAR foundation</a> 
        {" "} and being accepted as a member of Embarc Collective's 2022 {" "}
        <a style={{color: "#E4E5F1"}} target="_blank" rel="noopener noreferrer" href="https://www.embarccollective.com/foundations-program">Foundations Program</a> 
        , we have been laser-focused on becoming the de-facto standard RPC data provider for NEAR Protocol. 
      </p>
      <p style={{paddingBottom: 20}}>
        If you're interested in frictionless access to NEAR RPC data, please {" "}
        <a target="_blank" rel="noopener noreferrer" style={{color: "#E4E5F1"}} href="https://forms.gle/AwFmZMBs3YMkaCFe9">get in touch</a>.
      </p>
      </div>
    </div>
  );
};
