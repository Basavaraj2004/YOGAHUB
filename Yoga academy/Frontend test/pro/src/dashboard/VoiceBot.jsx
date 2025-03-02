// import React, { useState, useEffect } from 'react';
// import './VoiceBot.css';
// import voice from './assets/images/voice.png';
// import helpIcon from './assets/images/info.png'; // Import a new help icon

// const VoiceBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const [response, setResponse] = useState('');
//   const [showHelp, setShowHelp] = useState(false); // State to control the help modal
//   const [lastResponse, setLastResponse] = useState(''); // Track last response to prevent repetition

//   const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const synth = window.speechSynthesis;
//   const recognitionInstance = recognition ? new recognition() : null;

//   useEffect(() => {
//     if (recognitionInstance) {
//       recognitionInstance.continuous = true;
//       recognitionInstance.interimResults = true;
//       recognitionInstance.lang = 'en-US';

//       recognitionInstance.onresult = (event) => {
//         const last = event.results.length - 1;
//         const result = event.results[last][0].transcript;
//         setTranscript(result);
//         handleResponse(result);
//       };

//       recognitionInstance.onend = () => {
//         if (isListening) {
//           recognitionInstance.start();
//         }
//       };
//     }
//   }, [isListening, recognitionInstance]);

//   const startListening = () => {
//     if (recognitionInstance) {
//       setTranscript('');
//       setResponse('');
//       setLastResponse(''); // Reset last response when starting new session
//       setIsListening(true);
//       recognitionInstance.start();
//     }
//   };

//   const stopListening = () => {
//     if (recognitionInstance) {
//       setIsListening(false);
//       recognitionInstance.stop();
//     }
//   };

//   const handleResponse = (userInput) => {
//     const responses = {
//       'hi': 'Hello! How can I assist you today?',
//       'yoga classes': 'We offer various yoga classes such as Hatha, Vinyasa, and Ashtanga. Check our classes section for more details.',
//       'book session': 'You can book a session by visiting the "Courses page" section on our website and enroll it.',
//       'yoga benefits': 'Yoga improves flexibility, strength, and mental well-being. It can also help with stress relief and relaxation.',
//       'contact support': 'You can contact support via email at support@yogaacademy.com or call us at 123-456-7890.',
//       'class schedule': 'Visit our "Class Schedule" page to see the upcoming classes and timings.',
//       'membership plans': 'We offer various membership plans, including monthly and yearly options. Check the "Membership" section for details.',
//       'trainer': 'Our trainers are highly experienced and certified. You can view their profiles and book personal sessions through our website.',
//       'opening hours': 'Our studio is open from 6 AM to 9 PM on weekdays and 8 AM to 6 PM on weekends.',
//       'special events': 'We occasionally host workshops and special events. Check our "Events" page for the latest updates.',
//       'feedback': 'We value your feedback! Please let us know how we can improve our services.',
//       'default': 'Sorry, I did not understand that. Please try asking something else.'
//     };

//     const userInputLower = userInput.toLowerCase();
//     const botResponse = responses[userInputLower] || responses['default'];

//     if (botResponse !== lastResponse) { // Check to prevent repeating the same response
//       setResponse(botResponse);
//       speak(botResponse);
//       setLastResponse(botResponse); // Update last response
//     }
//   };

//   const speak = (text) => {
//     if (synth) {
//       synth.cancel();
//       const utterance = new SpeechSynthesisUtterance(text);
//       synth.speak(utterance);
//     }
//   };

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleHelp = () => {
//     setShowHelp(!showHelp);
//   };

//   return (
//     <div className="voicebot-wrapper">
//       <div className={`voicebot ${isOpen ? 'open' : ''}`}>
//         {isOpen ? (
//           <div className="voicebot-content">
//             <div className="voicebot-header">
//               <h2>Assistant</h2>
//               <div className="voicebot-icons">
//                 <button className="help-btn" onClick={toggleHelp}>
//                   <img src={helpIcon} alt="Help" />
//                 </button>
//                 <button className="close-btn" onClick={toggleChatbot}>X</button>
//               </div>
//             </div>
//             <div className="voicebot-body">
//               <p><strong>Transcript:</strong> {transcript}</p>
//               <p><strong>Response:</strong> {response}</p>
//               <div className="voicebot-controls">
//                 <button onClick={startListening} disabled={isListening}>
//                   Start Listening
//                 </button>
//                 <button onClick={stopListening} disabled={!isListening}>
//                   Stop Listening
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button className="voicebot-toggle" onClick={toggleChatbot}>
//             <img src={voice} alt="Open Voice Bot" />
//           </button>
//         )}
//       </div>

//       {showHelp && (
//         <div className="help-modal">
//           <div className="help-content">
//             <h3>How to Use the VoiceBot</h3>
//             <p>Here are some tips on how to interact with the VoiceBot:</p>
//             <ul>
//               <li><strong>Start Listening:</strong> Click the "Start Listening" button to begin speaking to the VoiceBot.</li>
//               <li><strong>Stop Listening:</strong> Click the "Stop Listening" button to stop voice recognition.</li>
//               <li><strong>Examples of Prompts:</strong></li>
//               <ul>
//                 <li>“What classes are available?”</li>
//                 <li>“How can I book a session?”</li>
//                 <li>“Tell me about yoga benefits.”</li>
//               </ul>
//               <li><strong>Close the Guide:</strong> Click the "X" button or outside the modal to close this guide.</li>
//             </ul>
//             <button className="close-help-btn" onClick={toggleHelp}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VoiceBot;
