import React from 'react';

type Props = {
  error: boolean;
};
const Loading = ({ error = false }: Props) => {
  if (error) {
    console.error(error);
    // When the loader has errored
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

export default Loading;