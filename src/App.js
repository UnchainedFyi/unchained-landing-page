import React, { Fragment } from "react";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "@mui/material/Button";
import { Form } from "./helpers/form";
import { useIsMobile } from "./helpers/isMobile";
import Hover from 'react-3d-hover';
import Typography from '@mui/material/Typography';
import './App.css';

const header = require("./images/headerImage.png");
const logo = require("./images/logo.png");
const embarc = require('./images/embarcLogo2.png');
const nearLogo = require('./images/nearLogo.png');
const twitterLogo = require('./images/twitterLogo.png');

function App() {
  const isMobile = useIsMobile();
  const headerImage = window && window.innerWidth >= 275 ? (
    <img
      alt="unchained logo"
      className="animated animatedFadeInUp fadeInUp"
      src={header}
      style={{
        width: isMobile ? 400 : 550,
        marginLeft: isMobile ? -20 : 0,
        paddingTop: isMobile ? 30 : 0,
      }}
    />) : (
    <img
      alt="unchained logo"
      className="animated animatedFadeInUp fadeInUp"
      src={logo}
      style={{
        width: 100,
        paddingTop: 50,
      }}
    />
  )

  return (
    <div className="App home">
      <AppBar style={{ background: '#06060a', paddingLeft: 10 }}>
        <Toolbar variant="dense">
          <Fragment>
            <div style={{ paddingRight: 15 }}>
              <a href="https://twitter.com/unchainedllc" target="_blank" rel="noopener noreferrer">
                <img alt="unchained twitter account" src={twitterLogo} style={{ width: 20, marginTop: 8 }} />
              </a>
            </div>
            <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ color: "#E4E5F1", textDecoration: 'none', paddingLeft: 22 }}>
              <img alt="unchained company logo" hidden={window && window.innerWidth < 275} src={logo} style={{ width: 24, marginTop: 8 }} />
            </Typography>
            <Button href="https://app.unchained.fyi?#login" style={{textTransform: 'uppercase', color: "#161722", textDecoration: 'none', backgroundColor: '#cacde8', fontWeight: 'bold'}}>
                Log In
              </Button>
          </Fragment>
        </Toolbar>
      </AppBar>
      <header className="wrapper fade-in-content" style={{ paddingTop: 50, paddingBottom: 210 }}>
        {isMobile ?
          headerImage :
          <div style={{ maxWidth: isMobile ? 400 : 550, marginLeft: 'auto', marginRight: 'auto' }}>
            <Hover max={25} perspective={1000} speed={1000}>
              {headerImage}
            </Hover>
          </div>
        }
      </header>
      <div className="fade-in-content">
        <Fragment>
          {isMobile ? (
            <h2 style={{ marginTop: isMobile ? -10 : 19 }}>The Blockchain Data Lake.<span style={{ fontSize: 15, verticalAlign: 'text-top' }}>™</span></h2>
          ) : (
            <h1>The Blockchain Data Lake.<span style={{ fontSize: 15, verticalAlign: 'text-top' }}>™</span></h1>
          )}
          <Button
            href="https://app.unchained.fyi?#login"
            style={{
              textTransform: "uppercase",
              marginBottom: 20,
              padding: 10,
              color: "#161722",
              textDecoration: "none",
              backgroundColor: "#cacde8",
              fontWeight: "bold",
            }}
          >
            START BUILDING FOR FREE
          </Button>
        </Fragment>
        <Fragment>
          <h3 className="subscribe" style={{ textTransform: 'capitalize' }}>Subscribe to email blasts:</h3>
          <MailchimpSubscribe
            url={process.env.REACT_APP_MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <Form
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </Fragment>
        <div style={{ paddingTop: 100, paddingBottom: 30 }}>
          <h3 style={{ fontFamily: "Luckiest Guy", letterSpacing: 2, paddingBottom: 15 }}>Supported by</h3>
          <div>
            <a href="https://www.embarccollective.com" target="_blank" rel="noopener noreferrer">
              <img style={{ height: 60, paddingRight: 40 }} src={embarc} alt="embarc collective" />
            </a>
            <a href="https://near.foundation" target="_blank" rel="noopener noreferrer">
              <img style={{ height: 60 }} src={nearLogo} alt="near foundation" />
            </a>
          </div>
        </div>
        <div className="footer">
          <p style={{ paddingBottom: 20 }}>
            Unchained LLC, 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
