import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import postData from '../../worker/callApi';

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
  let [hasCalledSubscribeAPI, setHasCalledSubscribeAPI] = useState(false)
  let [hasSubscribed, setHasSubscribed] = useState(false)
  let [wasCodeSent, setWasCodeSent] = useState(false)
  let [wasMailVerified, setWasMailVerified] = useState(false)
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
    console.log(mail)
    setSomethingWentWrong(false)

    let res = await postData('https://36l693jbic.execute-api.eu-west-1.amazonaws.com/subscribe', {eventType: "Subscribe",mail})
    
    if (res.ok) {
      setWasCodeSent(true)
      setHasCalledSubscribeAPI(true)
    } else {
      setSomethingWentWrong(true)
    }
  }

  const callVerifyAPI = async (mail, verificationCode) => {
    setSomethingWentWrong(false)
    let res = await postData('https://36l693jbic.execute-api.eu-west-1.amazonaws.com/subscribe', {eventType: "Verify", mail, verificationCode})
    
    if (res.ok) {
      setHasSubscribed(true)
      setWasCodeSent(true)
    } else {
      setSomethingWentWrong(true)
    }
    console.log(res)
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
                <TextField id="outlined-basic" color='secondary' label="Email" onChange={(event) => {setEmail(event.target.value)}} value={email} variant="outlined" />
                <Button onClick={() => callSubscribeAPI(email)} variant='contained' color='success'>Subscribe</Button>
                
                {hasCalledSubscribeAPI &&
                  <div>
                    <h4>We have sent you an email with the code</h4>
                    <TextField id="outlined-basic" color='secondary' label="Verification code" variant="outlined" onChange={(event) => {setVerificationCode(event.target.value)}} value={verificationCode}/>
                    <Button onClick={() => callVerifyAPI(email, verificationCode)} variant='contained' color='success'>Verify</Button>
                  </div>
                }
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