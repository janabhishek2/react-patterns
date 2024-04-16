import React from 'react';
import User from './User';
import UserLoader from './UserLoader';

function ContainerComponent() {
  return (
    <>
      <UserLoader userId='1'>
        <User />
      </UserLoader>

      <UserLoader userId='2'>
        <User />
      </UserLoader>
    </>
  )
}

export default ContainerComponent;
