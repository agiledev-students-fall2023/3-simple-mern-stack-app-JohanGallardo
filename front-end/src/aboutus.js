import { Link } from 'react-router-dom'
import './aboutus.css'
import johan from './johan.jpg'


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    return (
      <>
        <h1>Hello, This Is Me</h1>
        <p>Hi, my name is Johan Gallardo and I am New York. I was born in Queens Hospital and Queens is where I was raised and reside. I am the youngest of six siblings which was both amazing and terrible. The street I grew up one in Jamaica, Queens was never quiet and there was never a dull moment. Growing up I had many pets including two dogs, two cat, chicks, and a rabbit. Animals were my biggest interest as a child but I have not had a pet in a long time now. In middle school I was placed into a computer class where I learned the very basics of computers and the web. There I found out that I wanted my future career to surround computers and then web. Now, I am studying Computer Science but also have an interest in Psychology.  </p>
        <p>Here is a picture of me!!!</p>
        <img src = {johan} width = "193" height= "258"></img>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default AboutUs