import React from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

export const Form = ({ status, message, onValidated }) => {
    let email;

    const handleMailingListSubmit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });

    const handleKeyDown = e => {
      if (e.keyCode === 13) {
        handleMailingListSubmit();
      }
    }
  
    return (
      <div
        style={{
          background: "#161722",
          display: "inline-block",
          marginTop: -5,
        }}
      >
        {status === "sending" && 
          <div style={{ width: '100%', paddingTop: 20, paddingBottom: 10}}>
            <LinearProgress color="inherit" />
          </div>
        }
        {status === "error" && (
          <div
            style={{ color: 'pink' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ fontFamily: "Luckiest Guy", letterSpacing: 2, paddingTop: 10 }}
            dangerouslySetInnerHTML={{ __html: 'Subscription confirmed!' }}
          />
        )}
        <input
          style={{ fontSize: 16, paddingBottom: 4, paddingTop: 2, paddingLeft: 5, marginLeft: 10 }}
          ref={node => (email = node)}
          type="email"
          placeholder="name@company.com"
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleMailingListSubmit} style={{fontSize: 12, margin: 10, textTransform: 'capitalize', color: "#161722", textDecoration: 'none', backgroundColor: '#cacde8', fontWeight: 'bold'}}>
          Submit
        </Button>
      </div>
    );
  };
