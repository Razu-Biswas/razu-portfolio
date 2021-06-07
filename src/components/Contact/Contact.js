import React from 'react';
import style from './Contact.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_7lu8heh', 'template_ewtnajb', e.target, 'user_k4VrG4YWTBi0LACHHbA6P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
           <span><h2 className='mb-4 text-white heading'>Contact Me</h2></span> 
            <p className="text-white">Email: <span className={style.brandColor}> razubiswas114@gmail.com</span></p>
            <p className="text-white">Phone: <span className={style.brandColor}> +88013-03184861</span></p>
            <div className={style.socialMedia}>
              <ul className="list-inline">
                {/* <li className={`list-inline-item ${style.iconItem}`}><a href="/https://www.facebook.com/imamhasan0007"><FontAwesomeIcon className={style.socialIcon} icon={faFacebookF} /></a></li> */}

                <li className={`list-inline-item ${style.iconItem}`}><a href="https://github.com/Razu-Biswas"><FontAwesomeIcon className={style.socialIcon} icon={faGithub} /></a></li>

                <li className={`list-inline-item ${style.iconItem}`}><a href="https://www.linkedin.com/in/razu-biswas-5907a8183/"><FontAwesomeIcon className={style.socialIcon} icon={faLinkedin} /></a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className='mb-4 text-white'>Your Message</h2>
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <input type="text" class="form-control" name='name' required placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" class="form-control" name='email' required placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea class="form-control" name='message' required rows="3" placeholder='Your Message'></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button value='send' type='submit' className="btn btn-warning me-1">Send Message</button>
                <FontAwesomeIcon className={style.socialIcon} icon={faPaperPlane} /> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;