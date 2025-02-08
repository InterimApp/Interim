import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";
import analysis from "../assets/analysis.jpeg";
import { Button } from "react-bootstrap";

const SignUp1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTravailleurClick = () => {
    navigate("/WorkerSignUp"); 
  };

  const handleCompanyClick = () => {
    navigate("/CompanySignUp"); 
  };

  const handleSignClick = () => {
    navigate("/Signin"); 
  };

  return (
    <div className="signup-page">
      <div id="signup1"  className="signup-container">
        <h2>S'enregistrer</h2>
        <Button className="travailleur-btn" onClick={handleTravailleurClick}>Travailleur</Button>
        <Button className="Company-btn" onClick={handleCompanyClick}>Companie</Button>
        <p>
          Vous avez déja un compte? <span className="signin-link" onClick={handleSignClick}>Se connecter</span>
        </p>
      </div>
      <div className="image-section">
        <img src={analysis} alt="Analysis" />
      </div>
    </div>
  );
};

export default SignUp1;
