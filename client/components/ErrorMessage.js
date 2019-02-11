import React from 'react';

export default function ErroMessage(props) {
  return (
    <div>
      <h2>Oh no, we've encountered an error!</h2>
      <h3>
        It looks like "{props.userName}" is not an exisiting GitHub username. We
        suggest that you check for spelling errors and try again.
      </h3>
    </div>
  );
}
