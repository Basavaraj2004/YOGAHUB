import React, { useState } from 'react';
import "./Contact.css";
import images from '../../constants/images';
import Info from './Info';
import Map from './Map';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]*$/.test(formData.name)) {
      newErrors.name = "Invalid name format";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_7jl907d';
    const templateId = 'template_xasc746';
    const publicKey = 'Y4km-uulTeQZqwviI';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Yoga Academy',
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        toast.success('Email sent successfully!');
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Error sending email, please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className='contact section-p-top bg-dark' id="contact">
      <ToastContainer />
      <div className='container'>
        <div className='contact-content grid text-center'>
          <div className='contact-left'>
            <div className='section-t'>
              <h3>Let's Talk?</h3>
              <p className='text'>Feel Free to reach out to us for any inquiries and suggestions for the application</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='form-elem'>
                <input 
                  type="text" 
                  name="name" 
                  onChange={handleChange} 
                  value={formData.name} 
                  className="form-control" 
                  placeholder="Your name" 
                />
                <span className='form-control-text'>{errors.name}</span>
              </div>

              <div className='form-elem'>
                <input 
                  type="email" 
                  name="email" 
                  onChange={handleChange} 
                  value={formData.email} 
                  className="form-control" 
                  placeholder="Your Email ID" 
                />
                <span className='form-control-text'>{errors.email}</span>
              </div>

              <div className='form-elem'>
                <input 
                  type="text" 
                  name="message" 
                  onChange={handleChange} 
                  value={formData.message} 
                  className="form-control" 
                  placeholder="Your Message" 
                />
                <span className='form-control-text'>{errors.message}</span>
              </div>

              <div className='flex flex-start'>
                <button type="submit" disabled={isSubmitting} className="submit-btn">Contact Us</button>
              </div>
            </form>
          </div>

          <div className='contact-right'>
            <img src={images.form_main_img} alt="" />
          </div>
        </div>
      </div>

      <Map />
      <Info />
    </section>
  );
}

export default Contact;
