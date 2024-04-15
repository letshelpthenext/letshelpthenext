import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  MainWrapper,
  CaptionBox,
  ContentBox,
  CardWrapper,
} from './contactus.styles';
import InputField from '../InputField';
import { validators } from '../../utilities/Validator';
import Message from '../Message';
import NewsLetterSignUp from '../NewsLetterSignUp/NewsLetterSignUp';

const ContactUs = () => {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [messageVariant, setMessageVariant] = useState('danger');
  const [messageLoading, setMessageLoading] = useState(false);

  const handleFullName = (fullName) => setFullName(fullName);
  const handleEmailAddress = (emailAddress) => setEmailAddress(emailAddress);
  const handleEmailMessage = (emailMessage) => setEmailMessage(emailMessage);
  const handleSubject = (subject) => setSubject(subject);

  const submitHandler = (e) => {
    e.preventDefault();
    if ((fullName || emailAddress || emailMessage) === '') {
      setMessage('Please fill in all the required fields');
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
            setMessage('Message sent successfully');
            setMessageVariant('success');
            // console.log('Emailjs text: ',result.text);
          },
          (error) => {
            console.log(error);
            setMessage('Action unsuccessful. Please try again');
            setMessageVariant('danger');
            // console.log('Emailjs error: ', error.text);
          }
        );

        // CLEAR INPUT FIELDS AFTER SENDING EMAIL
        setFullName('');
        setEmailAddress('');
        setSubject('');
        setEmailMessage('');
        setMessageLoading(false);
    }
  };
  return (
    <MainWrapper>
      <CaptionBox className="bg-info p-3">
        <h4>Contact Us</h4>
      </CaptionBox>
      <ContentBox>
        <CardWrapper className="card">
          <div className="card-header text-center">SEND US A MESSAGE</div>
          <div className="card-body">
            {message && <Message variant={messageVariant}>{message}</Message>}
            <form ref={form} onSubmit={submitHandler}>
              <InputField
                name="user_name"
                value={fullName}
                placeholder="Full Name"
                type="text"
                validators={[
                  {
                    check: validators.required,
                    message: 'This box cannot be empty',
                  },
                ]}
                onChange={handleFullName}
                required
                fontAwesomeIcon="fas fa-user"
              />
              <InputField
                name="user_email"
                value={emailAddress}
                placeholder="Email Address"
                type="email"
                validators={[
                  {
                    check: validators.required,
                    message: 'This box cannot be empty',
                  },
                ]}
                onChange={handleEmailAddress}
                required
                fontAwesomeIcon="fas fa-at"
              />
              <InputField
                name="subject"
                value={subject}
                placeholder="Subject"
                type="text"
                validators={[
                  {
                    check: validators.required,
                    message: 'This box cannot be empty',
                  },
                ]}
                onChange={handleSubject}
                required
                fontAwesomeIcon="fas fa-envelope"
              />
              <InputField
                name="message"
                value={emailMessage}
                placeholder="Message here..."
                type="textarea"
                validators={[
                  {
                    check: validators.required,
                    message: 'This box cannot be empty',
                  },
                ]}
                onChange={handleEmailMessage}
                required
                fontAwesomeIcon="fas fa-pencil-alt"
              />

              <div className="text-right">
                <button type="submit" className="btn btn-info my-3">
                  { messageLoading ? 'Sending...' : 'Send' }
                </button>
              </div>
            </form>
          </div>
        </CardWrapper>
        <NewsLetterSignUp id='newsLetter' />
      </ContentBox>
    </MainWrapper>
  );
};

export default ContactUs;
