import React from 'react'

const Student1 = (props) => {
  let name = props.name;
  let live = props.live;

  return (
    <section>
      <ul>
        <li>
          <div className="box">
            <p>Name: {name}</p>
            <p>Live: {live}</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Student1;
