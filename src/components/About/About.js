import React from 'react';
import profileimg from './Gen_Image.png';
import Image from '../image/image';

function About() {
  return (
    <div>
      About Me!
      <Image
        style={
            {
              width: '100%',
              display: 'block',
            }
        }
        source={profileimg}
      />
    </div>
  );
}

export default About;
