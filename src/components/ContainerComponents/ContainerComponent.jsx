import React from 'react'
import CurrentUserLoader from './CurrentUserLoader';
import User from './User';

function ContainerComponent() {
  return (
    <CurrentUserLoader>
        <User />
    </CurrentUserLoader>
  )
}

export default ContainerComponent