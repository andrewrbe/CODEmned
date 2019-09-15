import React from 'react';
import { auth } from '../../constants';
import success from '../../assets/success.jpg';

const Success = () => (
  <section className="success" style={{ backgroundImage: `url(${success})`}}>
    <div className="container text-center">
      <h1>You've earned 10 buttpoints for answering the quiz!</h1>
      <p className="lead mb-5">Get your <b className="text-success">Collector ID</b></p>
      <a href={auth.trigger} className="btn btn-success btn-lg">Start the change!</a>
    </div>
  </section>
);

export {
  Success,
};