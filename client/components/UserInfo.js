import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="user-info">
      <img src={props.user.avatar_url} />
      <div className="user-names">
        <h2>{props.user.name}</h2>
        <h3>GitHub Username: {props.user.login}</h3>
      </div>
    </div>
  );
}
