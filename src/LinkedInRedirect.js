import React, { useEffect } from 'react';
import axios from 'axios';

const LinkedInRedirect = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
console.log(code,"code")
    if (code) {
    //   getAccessToken(code);
    }
  }, []);

  const getAccessToken = async (code) => {
    try {
      const clientId = '86b4nsnbi0oetm';
      const clientSecret = 'WPL_AP1.p3NYkVGMUXq8L2La.KKXFGQ==';
      const redirectUri = 'http://localhost:3000/linkedin';

      const response = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        null,
        {
          params: {
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            client_id: clientId,
            client_secret: clientSecret,
          },
        }
      );

      const accessToken = response.data.access_token;
      getLinkedInProfile(accessToken);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const getLinkedInProfile = async (accessToken) => {
    try {
      const response = await axios.get(
        'https://api.linkedin.com/v2/me',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('LinkedIn profile data:', response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  return <div>Loading...</div>;
};

export default LinkedInRedirect;
