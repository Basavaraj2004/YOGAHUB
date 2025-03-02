// import React, { useState } from 'react';
// import styles from './TherapyBooking.module.css';

// const TherapyBooking = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     try {
//       const response = await fetch('https://hook.eu2.make.com/uuafvs3u63kxpt4djqsyaza3klqdr0fg', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//       } else {
//         alert('There was an error submitting the form. Please try again.');
//       }
//     } catch (error) {
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.parentContainer}>
//     <div className={styles.full}
//       style={{
//         maxWidth: '700px',
//         margin: '0 auto',
//         marginTop: '10px',
//         fontFamily: "'Montserrat', sans-serif",
//         fontSize: '16px',
//         backgroundColor: 'white',
//         padding: '30px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
//         color: '#333',
//       }}
//     >
//       {!isSubmitted ? (
//         <form id="lead-form" onSubmit={handleSubmit} style={{ width: '100%', boxSizing: 'border-box' }}>
//           <input type="hidden" name="form-type" value="lead-form" />

//             {/* Heading */}
//         <h2 className="form-heading" style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '20px',
//               backgroundColor: '#001F3F',
//               background: 'linear-gradient(45deg, rgba(87, 100, 222, 1) 0%, rgba(85, 179, 213, 1) 100%)',
//               color: 'white',
//               border: '1px solid #ccc',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               transition: 'background-color 0.3s',
//               boxSizing: 'border-box',
//               textAlign: 'center',
//             }}>THERAPY BOOKING</h2>
        
//           <label
//             htmlFor="phone"
//             style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
//           >
//             Phone Number (include country code):
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             pattern="^\+[1-9]\d{1,14}$"
//             placeholder="+1234567890"
//             required
//             style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               backgroundColor: '#f9f9f9',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.3s',
//             }}
//           />
//           <small style={{ display: 'block', marginBottom: '20px', color: '#001F3F', fontStyle: 'italic' }}>
//             Tip: Use a phone number with WhatsApp for full feature experience.
//           </small>

//           <label
//             htmlFor="name"
//             style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
//           >
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="full-name"
//             required
//             style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               backgroundColor: '#f9f9f9',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.3s',
//             }}
//           />

//           <label
//             htmlFor="email"
//             style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
//           >
//             Email Address:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               backgroundColor: '#f9f9f9',
//               boxSizing: 'border-box',
//               transition: 'border-color 0.3s',
//             }}
//           />

//           <label
//             htmlFor="therapy"
//             style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
//           >
//             Available Therapy:
//           </label>
//           <select
//             id="therapy"
//             name="company-name"
//             required
//             style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               backgroundColor: '#f9f9f9',
//               boxSizing: 'border-box',
//             }}
//           >
//             <option value="Stress Management Therapy">Stress Management Therapy</option>
//             <option value="Depression Counselling">Depression Counselling</option>
//             <option value="Trauma Therapy">Trauma Therapy</option>
//             <option value="Mindfulness and Meditation-Based Therapy">Mindfulness and Meditation-Based Therapy</option>
//             <option value="Relationship Counselling">Relationship Counselling</option>
//             <option value="Cognitive Behavioral Therapy (CBT)">Cognitive Behavioral Therapy (CBT)</option>
//             <option value="Acceptance and Commitment Therapy (ACT)">Acceptance and Commitment Therapy (ACT)</option>
//             <option value="Failure and Motivation Therapy">Failure and Motivation Therapy</option>
//             <option value="Addiction Counselling">Addiction Counselling</option>
//             <option value="Self-Esteem and Confidence Building">Self-Esteem and Confidence Building</option>
//             <option value="Anger Management Therapy">Anger Management Therapy</option>
//             <option value="Crisis Intervention Therapy">Crisis Intervention Therapy</option>
//           </select>

//           <label
//             htmlFor="website"
//             style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
//           >
//             Additional specific requirement (optional):
//           </label>
//           <textarea
//             id="website"
//             name="website"
//             placeholder="Let us know if you have any specific requirements..."
//             style={{
//               width: '100%',
//               padding: '12px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               backgroundColor: '#f9f9f9',
//               boxSizing: 'border-box',
//             }}
//           />

//           <label style={{ fontSize: '14px', color: '#001F3F', display: 'block', marginBottom: '15px' }}>
//             <input type="checkbox" name="permission" required style={{ marginRight: '10px' }} />
//             I agree to be contacted by phone, email, or WhatsApp as necessary to provide the demo.
//           </label>

//           <label style={{ fontSize: '14px', color: '#001F3F', display: 'block', marginBottom: '15px' }}>
//             <input type="checkbox" name="consent_ai" style={{ marginRight: '10px' }} />
//             I consent to my data and the call transcript being stored for AI training purposes.
//           </label>

//           <small style={{ display: 'block', marginBottom: '20px', color: '#001F3F' }}>
//             By submitting, you agree to our{' '}
//             <a href="https://www.flireo.com/privacy-policy" target="_blank" style={{ color: '#001F3F', textDecoration: 'underline' }}>
//               Privacy Policy
//             </a>{' '}
//             and{' '}
//             <a href="https://www.flireo.com/terms-and-conditions" target="_blank" style={{ color: '#001F3F', textDecoration: 'underline' }}>
//               Terms and Conditions
//             </a>.
//           </small>

//           <input
//             type="submit"
//             value="Submit"
//             style={{
//               width: '100%',
//               padding: '12px',
//               backgroundColor: '#001F3F',
//               background: 'linear-gradient(45deg, rgba(87, 100, 222, 1) 0%, rgba(85, 179, 213, 1) 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               transition: 'background-color 0.3s',
//               boxSizing: 'border-box',
//             }}
//           />
//         </form>
//       ) : (
//         <div
//           id="success-message"
//           style={{
//             padding: '20px',
//             backgroundColor: '#e0f7e7',
//             color: '#007f3f',
//             borderRadius: '8px',
//             marginTop: '20px',
//             textAlign: 'center',
//           }}
//         >
//           Your form has been successfully submitted!
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default TherapyBooking;








import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './TherapyBooking.module.css';
import AiAssistant from '../../../AI/AiAssistant';

const TherapyBooking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://hook.eu2.make.com/uuafvs3u63kxpt4djqsyaza3klqdr0fg', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Your form has been successfully submitted!');
      } else {
        toast.error('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
        toast.error('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className={styles.parentContainer}>
        <ToastContainer />
    <div className={styles.full}
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        marginTop: '10px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '16px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        color: '#333',
      }}
    >
        <form id="lead-form" onSubmit={handleSubmit} style={{ width: '100%', boxSizing: 'border-box' }}>
          <input type="hidden" name="form-type" value="lead-form" />

        <h2 className="form-heading" style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              backgroundColor: '#001F3F',
              background: 'linear-gradient(45deg, rgba(87, 100, 222, 1) 0%, rgba(85, 179, 213, 1) 100%)',
              color: 'white',
              border: '1px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}>THERAPY BOOKING</h2>
        
          <label
            htmlFor="phone"
            style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
          >
            Phone Number (include country code):
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\+[1-9]\d{1,14}$"
            placeholder="+1234567890"
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s',
            }}
          />
          <small style={{ display: 'block', marginBottom: '20px', color: '#001F3F', fontStyle: 'italic' }}>
            Tip: Use a phone number with WhatsApp for full feature experience.
          </small>

          <label
            htmlFor="name"
            style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="full-name"
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s',
            }}
          />

          <label
            htmlFor="email"
            style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s',
            }}
          />

          <label
            htmlFor="therapy"
            style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
          >
            Available Therapy:
          </label>
          <select
            id="therapy"
            name="company-name"
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box',
            }}
          >
            <option value="Stress Management Therapy">Stress Management Therapy</option>
            <option value="Depression Counselling">Depression Counselling</option>
            <option value="Trauma Therapy">Trauma Therapy</option>
            <option value="Mindfulness and Meditation-Based Therapy">Mindfulness and Meditation-Based Therapy</option>
            <option value="Relationship Counselling">Relationship Counselling</option>
            <option value="Cognitive Behavioral Therapy (CBT)">Cognitive Behavioral Therapy (CBT)</option>
            <option value="Acceptance and Commitment Therapy (ACT)">Acceptance and Commitment Therapy (ACT)</option>
            <option value="Failure and Motivation Therapy">Failure and Motivation Therapy</option>
            <option value="Addiction Counselling">Addiction Counselling</option>
            <option value="Self-Esteem and Confidence Building">Self-Esteem and Confidence Building</option>
            <option value="Anger Management Therapy">Anger Management Therapy</option>
            <option value="Crisis Intervention Therapy">Crisis Intervention Therapy</option>
          </select>

          <label
            htmlFor="website"
            style={{ fontSize: '15px', fontWeight: 'bold', color: '#001F3F', marginBottom: '10px', display: 'block' }}
          >
            Additional specific requirement (optional):
          </label>
          <textarea
            id="website"
            name="website"
            placeholder="Let us know if you have any specific requirements..."
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box',
            }}
          />

          <label style={{ fontSize: '14px', color: '#001F3F', display: 'block', marginBottom: '15px' }}>
            <input type="checkbox" name="permission" required style={{ marginRight: '10px' }} />
            I agree to be contacted by phone, email, or WhatsApp as necessary to provide the demo.
          </label>

          <label style={{ fontSize: '14px', color: '#001F3F', display: 'block', marginBottom: '15px' }}>
            <input type="checkbox" name="consent_ai" style={{ marginRight: '10px' }} />
            I consent to my data and the call transcript being stored for AI training purposes.
          </label>

          <small style={{ display: 'block', marginBottom: '20px', color: '#001F3F' }}>
            By submitting, you agree to our{' '}
            <a href="https://www.flireo.com/privacy-policy" target="_blank" style={{ color: '#001F3F', textDecoration: 'underline' }}>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://www.flireo.com/terms-and-conditions" target="_blank" style={{ color: '#001F3F', textDecoration: 'underline' }}>
              Terms and Conditions
            </a>.
          </small>

          <input
            type="submit"
            value="Submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#001F3F',
              background: 'linear-gradient(45deg, rgba(87, 100, 222, 1) 0%, rgba(85, 179, 213, 1) 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              boxSizing: 'border-box',
            }}
          />
        </form>
      
    </div>
    <AiAssistant/>
    </div>
  );
};

export default TherapyBooking;