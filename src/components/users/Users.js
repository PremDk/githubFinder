import React, { useContext } from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <div key={user.id}>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
