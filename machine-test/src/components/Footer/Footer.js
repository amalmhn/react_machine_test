import React from 'react'
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import youtubeLogo from '../../assets/211928_social_youtube_icon.png';
import fbLogo from '../../assets/211901_facebook_social_icon.png';
import linkedInLogo from '../../assets/6214710_linkedin_logo_icon.png';
import twitterLogo from '../../assets/6214703_bird_logo_twitter_icon.png';
import './Footer.css'

function Footer() {
    return (
        <MDBFooter className='bg-light text-center text-black'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <span>
                        <img className="logo-round" src={fbLogo} alt="fb-logo" />
                    </span>
                    <span className='homepage-logos'>
                        <img className="logo-round" src={twitterLogo} alt="twitter-logo" />
                    </span>
                    <span className='homepage-logos'>
                        <img className="logo-round" src={linkedInLogo} alt="linkedIn-logo" />
                    </span>
                    <span className='homepage-logos'>
                        <img className="logo-round" src={youtubeLogo} alt="google-logo" />
                    </span>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div>
                    example@email.com
                </div>
                Copyright © 2020. All rights reserved.
            </div>
        </MDBFooter>
    )
}

export default Footer