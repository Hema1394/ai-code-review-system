import React from 'react';

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to the AI Code Review System</h1>
      <p className="lead">Developed by Hemagiri with ❤ of Department of Aids. Full copyright © 2024 reserved.</p>
      <hr className="my-4" />
      <p>This system helps you analyze and modify your code using AI-powered algorithms.</p>
      <a className="btn btn-primary btn-lg" href="/register" role="button">Get Started</a>
    </div>
  );
}

export default Home;
