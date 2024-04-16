import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  CardWrapper,
} from './newslettersignup.styles';
import InputField from '../InputField';
import { validators } from '../../utilities/Validator';
import Message from '../Message';

const NewsLetterSignUp = () => {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [messageVariant, setMessageVariant] = useState('danger');
  const [messageLoading, setMessageLoading] = useState(false);

  const handleFullName = (fullName) => setFullName(fullName);
  const handleEmailAddress = (emailAddress) => setEmailAddress(emailAddress);

  const submitHandler = (e) => {
    e.preventDefault();
    if ((fullName || emailAddress) === '') {
      setMessage('Please fill in all the fields');
    } else {
      setMessageLoading(true);
      // SEND EMAIL HERE
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessage('Subscription successful. Thank you!');
            setMessageVariant('success');
            // console.log('Emailjs text: ',result.text);
          },
          (error) => {
            console.log(error);
            setMessage('Subscription unsuccessful. Please try again');
            setMessageVariant('danger');
            // console.log('Emailjs error: ', error.text);
          }
        );

      // CLEAR INPUT FIELDS AFTER SENDING EMAIL
      setFullName('');
      setEmailAddress('');
      setMessageLoading(false);
    }
  };

  return (
    <CardWrapper className='card'>
      <div className='card-header text-center'>JOIN OUR NEWSLETTER</div>
      <div className='card-body'>
        {message && <Message variant={messageVariant}>{message}</Message>}
        <div className='text-center'>Subscribe to our newsletter to receive the latest updates every week. No spam.</div>
        <br />
        <form ref={form} onSubmit={submitHandler}>
            <input type='hidden' name='subject' value='Newsletter subscription' />
          <InputField
            name='user_name'
            value={fullName}
            placeholder='First and Last Name'
            type='text'
            validators={[
              {
                check: validators.required,
                message: 'This box cannot be empty',
              },
            ]}
            onChange={handleFullName}
            required
          />
          <InputField
            name='user_email'
            value={emailAddress}
            placeholder='Email Address'
            type='email'
            validators={[
              {
                check: validators.required,
                message: 'This box cannot be empty',
              },
            ]}
            onChange={handleEmailAddress}
            required
          />

          <div className='justify-content-center'>
            <button type='submit' className='btn btn-primary my-3'>
              {messageLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </CardWrapper>
  );
};

export default NewsLetterSignUp;
