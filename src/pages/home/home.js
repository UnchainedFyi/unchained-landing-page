import React, { Fragment } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "@mui/material/Button";
import { Form } from "../../helpers/form";
import { useIsMobile } from "../../helpers/isMobile";
import Hover from 'react-3d-hover';

const header = require("../../images/headerImage.png");
const embarc = require('../../images/embarcLogo2.png');
const nearLogo = require('../../images/nearLogo.png');
const logo = require("../../images/logo.png");

export const Home = () => {
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
    );

    return (
        <div className="home">
            <header className="wrapper fade-in-content" style={{ paddingBottom: 210 }}>
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
                        <h1>The Blockchain Data Lake<span style={{ fontSize: 15, verticalAlign: 'text-top' }}>™</span></h1>
                    )}
                    <Button
                        href="https://app.unchained.fyi"
                        style={{
                            textTransform: "capitalize",
                            marginBottom: 20,
                            padding: 10,
                            margin: 10,
                            color: "#cacde8",
                            textDecoration: "none",
                            border: '2px solid white',
                            fontWeight: "bold",
                        }}
                        variant="outlined"
                    >
                        Unchained API
                    </Button>
                </Fragment>
                <Fragment>
                    <h3 className="subscribe" style={{ textTransform: 'capitalize' }}>Receive Email Updates</h3>
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
            </div>
        </div>
    )
}