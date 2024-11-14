import React from 'react';
import LinkedInProfile from './LinkedInProfile';
import LinkedinSDK from 'react-linkedin-sdk'


const LinkedInLogin = () => {
  const handleLogin = () => {
    const clientId = '86b4nsnbi0oetm';
    const redirectUri = 'http://localhost:3000/linkedin';
    const state = Math.random(); // Use a unique string to prevent CSRF
    const scope = 'profile'; // Permissions you need
let a =`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=${scope}`;
    // Redirect to LinkedIn OAuth endpoint
    console.log(a)
    window.location.href = a;
  };

  const responseLinkedin = response => {
    console.log(response)
  }

  return <>
    <LinkedinSDK
    clientId="code"
    callBack={responseLinkedin}
    fields=":(id,num-connections,picture-url)"
    className={'className'}
    loginButtonText={'Login with Linkedin'}
    logoutButtonText={'Logout from Linkedin'}
    buttonType={'button'}
    icon={"S"}
    getOAuthToken
  />
  <LinkedInProfile accessToken={'code'}/>
  <button onClick={handleLogin}>Login with LinkedIn</button></>;
}


export default LinkedInLogin;
