import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LinkedInProfile = ({ accessToken }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://api.linkedin.com/v2/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching LinkedIn profile:', error);
      }
    };

    if (accessToken) {
      fetchProfile();
    }
  }, [accessToken]);

  return (
    <div>
      {profile ? (
        <div>
          <h1>{profile.localizedFirstName} {profile.localizedLastName}</h1>
          <p>ID: {profile.id}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default LinkedInProfile;
