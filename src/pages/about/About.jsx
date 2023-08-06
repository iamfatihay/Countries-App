import React from 'react';
import logo from "../../img/logo.gif";

const About = () => {
  return (
    <div className='container' style={{marginTop:"6rem"}}>
      <div className='text-center'>
        <h1>About Countries App</h1>
        <p>The Country App is a great resource for people who are interested in learning more about different cultures, histories, and geographies. With detailed information about 250 countries around the world, you'll be able to explore and discover new things about the world we live in.</p>
        <p>You can search for any country and get detailed information about its geography, culture, government, population, and more. The app also includes interactive map informations to help you better understand each country. Plus, you can save your favorite countries and share information with others through social media.</p>
        <p>Additionally, we have designed the app to be responsive and adaptable to different screen sizes to ensure a seamless experience for all users, whether they are using a phone, tablet, or desktop computer. We are committed to providing the best possible experience for our users, and we are always looking for ways to improve and enhance our app.</p>
        <img alt="logo" src={logo} width="400px" />      
      </div>
    </div>
  );
}

export default About