import React from 'react';

const Thing = ({ children, big }) => (
  <div className={`thing ${big ? 'thing--big' : ''}`}>
    <div className="thing__hover" />
    <div className="thing__inner">
      {children}
    </div>
  </div>
);

export default Thing;