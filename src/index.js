import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from "./CommentBox";
import Button from "./Button";
const App =()=> {

  return(
      <>
     
    <CommentBox name="Jenny Lawrence" abt="New User" des="Jenny requested  permission to view your contact details"/>
    <Button yes="YES" no="NO"/>
   
    </>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)