import React from 'react'
import CurrentUser from './CurrentUser';
import User from './User';

function ContainerComponent() {
  return (
    <CurrentUser>
        <User />
    </CurrentUser>
  )
}

export default ContainerComponent