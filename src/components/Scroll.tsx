import * as React from 'react';

type props ={
  children? : JSX.Element
}

const Scroll = (props:props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;