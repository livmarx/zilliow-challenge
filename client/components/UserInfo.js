import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="user-info">
      <img src={props.user.avatar_url} />
      <div className="user-names">
        <h2>{props.user.name}</h2>
        <h3>Username: {props.user.login}</h3>
        <p> Contact Info: {props.user.email}</p>
        <p>
          GitHub URL: <a href={props.user.html_url}> {props.user.html_url}</a>
        </p>
      </div>
    </div>
  );
}
