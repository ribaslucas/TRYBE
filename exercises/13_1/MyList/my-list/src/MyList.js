import React from 'react';

const MyList = (props) => {
  console.log(props.children)
  return (
    <div className='list'>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}
export default MyList;
