

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import "./Newsletter.scss";

// const Newsletter = () => {
//   const [email, setEmail] = useState("");
//   const [subscriptionStatus, setSubscriptionStatus] = useState(null);

//   const handleSubscribe = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/newsletter', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setSubscriptionStatus('success');
//         setEmail(''); // Clear the input field
//       } else {
//         setSubscriptionStatus('error');
//       }
//     } catch (error) {
//       console.error(error);
//       setSubscriptionStatus('error');
//     }
//   };

//   return (
//     <div className="newsletter-section">
//       <div className="newsletter-content">
//         <span className="small-text">Newsletter</span>
//         <span className="big-text">
//           Sign up for the latest updates and offers
//         </span>
//         <div className="form">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button onClick={handleSubscribe}>Subscribe</button>
//         </div>
//         {subscriptionStatus === 'success' && (
//           <p className="success-message">Subscription successful!</p>
//         )}
//         {subscriptionStatus === 'error' && (
//           <p className="error-message">Subscription failed. Please try again.</p>
//         )}
//         <span className="text">
//           Will be used in accordance with our Privacy Policy
//         </span>
//         <span className="social-icons">
//           <div className="icon">
//             <FaLinkedinIn size={14} />
//           </div>
//           <div className="icon">
//             <FaFacebookF size={14} />
//           </div>
//           <div className="icon">
//             <FaTwitter size={14} />
//           </div>
//           <div className="icon">
//             <FaInstagram size={14} />
//           </div>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;


import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const isEmailValid = (email) => {
    // Regular expression for a simple email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleSubscribe = async () => {
    if (!isEmailValid(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscriptionStatus('success');
        setEmail(''); // Clear the input field
      } else {
        setSubscriptionStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubscriptionStatus('error');
    }
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Sign up for the latest updates and offers
        </span>
        <div className="form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(null); // Clear email validation error
            }}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        {emailError && <p className="error-message">{emailError}</p>}
        {subscriptionStatus === 'success' && (
          <p className="success-message">Subscription successful!</p>
        )}
        {subscriptionStatus === 'error' && (
          <p className="error-message">Subscription failed. Please try again.</p>
        )}
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
