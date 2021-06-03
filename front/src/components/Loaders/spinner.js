import React from 'react';

import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={500}
    width={500}
    timeout={3000}
  />
);

export default Spinner;

