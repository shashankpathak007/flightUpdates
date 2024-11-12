import React from 'react';

const LinkedInLogin = () => {
  const handleLogin = () => {
    const clientId = '86b4nsnbi0oetm';
    const redirectUri = 'https://flight-updates.vercel.app/linkedin';
    const state = Math.random(); // Use a unique string to prevent CSRF
    const scope = 'profile'; // Permissions you need

    // Redirect to LinkedIn OAuth endpoint
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=${scope}`;
  };

  return <button onClick={handleLogin}>Login with LinkedIn</button>;
};

export default LinkedInLogin;
