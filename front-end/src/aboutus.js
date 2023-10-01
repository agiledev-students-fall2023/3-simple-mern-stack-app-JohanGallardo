import { Link } from 'react-router-dom'
import './aboutus.css'
import React, { useEffect, useState } from 'react';

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

  const AboutUs = () => {
    const [myData, setMyData] = useState({});
  
    useEffect(() => {
      fetch('http://localhost:5002/about-us')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setMyData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h2>Hello, This Is Me</h2>
        <p>{myData.paragraph}</p>
        <h3>Here Is A Picture Of Me</h3>
        <img src={myData.image} alt="Picture of Me" width = "193" height= "258"/>
      </div>
    );
  }



  
  // make this component available to be imported into any other file
  export default AboutUs