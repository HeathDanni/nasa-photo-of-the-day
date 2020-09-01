import React from 'react';

const AppBody = (props) => {
return <div>
    <img src = {props.url}>
        </img><p>{props.explanation}</p>
        </div>;
}
  
export default AppBody