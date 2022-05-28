import React, {Fragment} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const nearPhoto = require('../../images/nearLogo.png');

export const Roadmap = () => (
    <Fragment>
        <h1 style={{marginBottom: 50}} className="title animated animatedFadeInUp fadeInUp">Roadmap</h1>
        <Timeline position="alternate" className="fade-in-content" style={{marginBottom: 60}}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: 'white' }}>
                        <DeviceHubIcon style={{ width: 30, height: 30, color: 'black' }} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.secondary' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className="title">
                        2022 Q2
                    </Typography>
                    <Typography className="subtitle">API (TestNet) Beta, NEAR RPCs.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.secondary' }}/>
                    <TimelineDot sx={{ bgcolor: 'white' }}>
                        <LaptopMacIcon style={{ width: 28, height: 28, padding: 2, color: 'black'}}/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className="title">
                        2022 Q2.5
                    </Typography>
                    <Typography className="subtitle">Interactive API sandbox on website.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined">
                        <EngineeringIcon style={{ width: 28, height: 28, padding: 2 }}/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className="title">
                        2022 Q3
                    </Typography>
                    <Typography className="subtitle"><a style={{color: "#E4E5F1"}} target="_blank" rel="noopener noreferrer" href="https://forms.gle/AwFmZMBs3YMkaCFe9">Early Partner access</a> to API (MainNet) Beta, NEAR RPCs.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="inherit" variant="outlined" style={{padding: 10}}>
                        <img alt="near logo" style={{ width: 20, height: 20 }} src={nearPhoto} />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className="title">
                        2022 Q4
                    </Typography>
                    <Typography className="subtitle">Public release of API (MainNet) Beta, NEAR RPCs </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        <Button href="https://forms.gle/AwFmZMBs3YMkaCFe9" className="fade-in-content" target="_blank" rel="noopener noreferrer" style={{textTransform: 'uppercase', color: "#161722", textDecoration: 'none', backgroundColor: '#cacde8', marginTop: 30, marginBottom: 50, fontWeight: 'bold'}}>
            Request a Feature
        </Button>
    </Fragment>
);
