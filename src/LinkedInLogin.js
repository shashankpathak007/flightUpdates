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
    clientId="86b4nsnbi0oetm"
    callBack={responseLinkedin}
    fields=":(id,num-connections,picture-url)"
    className={'className'}
    loginButtonText={'Login with Linkedin'}
    logoutButtonText={'Logout from Linkedin'}
    buttonType={'button'}
    icon={"S"}
    getOAuthToken
  />
  <LinkedInProfile accessToken={'AQU4_nmozAn41yvLfcH6lgUAs0VaDBC9pzWLZtqb1HHMXQCBopCsQfQa582m4ioBAVQ5kbyHWiaVxBS2rcStO3D91xWmiEeTgcTYWs2b8xTO7QBFs9uxP5H6cWSuK-2bddGKKeYxoAntyMJlQP9cN3acYBKC5PdE-hTfdtfj-Xxd2kQsiEK5GG9RQ-E9OevJn6-6WiQ5CGQdl-ZfsvDE6JiNKwYyP0iJ3zts3T_XM_fR_Q1wjTA_L3ZO9B6LfDGkeKw8eh_VczMRVnewjpEtbDoRLGAS6rK51GhD4MmhovuI5RLZMs7-RVdET7Bkyd-rlx9TlkCDI_W-07OKhOnHLcI5Wc00GQ'}/>
  <button onClick={handleLogin}>Login with LinkedIn</button></>;
}


export default LinkedInLogin;
