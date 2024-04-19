import React from 'react';

function Message({ message = ''}) {
  
  const isMessageValid = typeof message === "string";
  
  return isMessageValid ? (
    <h1>{message}</h1>
  ): ("Loading....")
}

export default Message;
