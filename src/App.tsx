import React, { useState, useEffect } from 'react';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [selected, setSelected] = useState('about');

  const handleSelectedContentChange = (navItem: string) => {
    setSelected(navItem);
  };
  return (
    <div className="App">
      <div className="main">
        <div className="logo-wrapper">
          <img src="arcos_logo.png" alt="arcos-logo" />
        </div>
        <nav>
          <div
            style={selected == 'about' ? { backgroundColor: 'blue' } : {}}
            onClick={() => handleSelectedContentChange('about')}
          >
            About
          </div>
          <div
            style={selected == 'my-work' ? { backgroundColor: 'blue' } : {}}
            onClick={() => handleSelectedContentChange('my-work')}
          >
            My Work
          </div>
          <div
            style={selected == 'contact' ? { backgroundColor: 'blue' } : {}}
            onClick={() => handleSelectedContentChange('contact')}
          >
            Contact Me
          </div>
        </nav>

        <div className="content-wrapper">
          <div className="about" style={
              selected == 'about' ? { display: 'block' } : { display: 'none' }
            }>
            <div className="about-inner">
              <div>Home Number:</div>
              <div>{'(440) 661-9675'}</div>
            </div>
            <div className="about-inner">
              <div>Cell Number:</div>
              <div>{'(440) 361-1900'}</div>{' '}
            </div>
            <div className="about-inner">
              <div>Email:</div>
              <div>arcosmechanical@gmail.com</div>
            </div>

            <div className="about-inner">
              <div>Location:</div>
            </div>

            <div className="about-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380075.2563976866!2d-81.52944599656794!3d41.90709345290445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88319f037fb911f7%3A0x5042dd1b32524ce!2sLake%20County%2C%20OH!5e0!3m2!1sen!2sus!4v1675621074124!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="my-work" style={
              selected == 'my-work' ? { display: 'block' } : { display: 'none' }
            }>
            My Work
          </div>

          <div
          className='contact-wrapper'
            style={
              selected == 'contact' ? { display: 'block' } : { display: 'none' }
            }
          >
            <form className="contact-form">
              <input
                style={{
                  margin: '5px',
                  padding: '10px',
                  width: '500px',
                  marginTop: '20px',
                  borderRadius: '5px',
                  fontSize: '14pt',
                }}
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
              />

              <input
                style={{
                  margin: '5px',
                  padding: '10px',
                  borderRadius: '5px',
                  fontSize: '14pt',
                }}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />

              <textarea
                style={{
                  margin: '5px',
                  padding: '10px',
                  paddingBottom: '75px',
                  resize: 'none',
                  fontFamily: 'inherit',
                  borderRadius: '5px',
                  fontSize: '14pt',
                }}
                name="message"
                id="message"
                required
                placeholder="Message"
              ></textarea>

              <input
              className='submit-contact-input'
                style={{
                  margin: '5px',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '5px',
                  fontSize: '14pt',
                  border: '2px solid white'
                }}
                type="submit"
                value={'Send'}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
