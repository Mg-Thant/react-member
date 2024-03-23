import React from 'react';
import { useState } from 'react';

const CustomForm = (props) => {
    const [name, setName] = useState("");
    const [live, setLive] = useState("");

    const trackName = (event) => {
        setName(event.target.value);
    }

    const trackLive = (event) => {
        setLive(event.target.value);
    }
    const showData = (event) => {
        event.preventDefault();

        props.addNewMember({name, live});
        setName("");
        setLive("");
    }
  return (
    <div className='middle flex'>
      <form onSubmit={showData}>
        <input type="text" placeholder="name" onChange={trackName} value={name}/>
        <input type="text" placeholder="address" onChange={trackLive} value={live}/>
        <button type="submit">Add new member</button>
      </form>
    </div>
  )
}

export default CustomForm;
