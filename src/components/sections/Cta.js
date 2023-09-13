import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import postData from '../../worker/post';
import API_URL from '../../utils/constants';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  let [email, setEmail] = useState('')
  let [verificationCode, setVerificationCode] = useState('')
  let [hasSubscribed, setHasSubscribed] = useState(false)
  let [somethingWentWrong, setSomethingWentWrong] = useState(false)

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const callSubscribeAPI = async (mail) => {
    setSomethingWentWrong(false)

    let res = await postData(API_URL+"/subscribe", {eventType: "Subscribe",mail})
    
    if (res.ok) {
    } else {
      setSomethingWentWrong(true)
    }
  }

  const callVerifyAPI = async (mail, verificationCode) => {
    setSomethingWentWrong(false)
    let res = await postData(API_URL+"/subscribe", {eventType: "Verify", mail, verificationCode})
    
    if (res.ok) {
      setHasSubscribed(true)
    }
  }
  


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="cta">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Subscribe to the newsletter
              </h3>
          </div>
          <div className="cta-action">
            {!hasSubscribed &&
              <div>
                {somethingWentWrong && 
                  <h4>Sorry, something went wrong, try again or refresh</h4>
                }
                <h4>Email to subscribe, we will send you a code for verification</h4>
                <TextField id="outlined-basic" color='secondary' label="Email" onChange={(event) => {setEmail(event.target.value)}} value={email} variant="outlined" />
                <Button onClick={() => callSubscribeAPI(email)} variant='contained' color='success'>Send code</Button>
                
                <h4>Submite the code for verification and subscribe</h4>
                    <TextField id="outlined-basic" color='secondary' label="Verification code" variant="outlined" onChange={(event) => {setVerificationCode(event.target.value)}} value={verificationCode}/>
                    <Button onClick={() => callVerifyAPI(email, verificationCode)} variant='contained' color='success'>Verify and Subscribe</Button>
              </div>
            }
            {hasSubscribed &&
              <h3>You have successfully subscribed!</h3>
            }
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;