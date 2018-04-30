import React from 'react';
import Layout from '../Layout';
import '.../../css/PageNotFound.css';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="page-not-found">
        <h3>The page you are looking for can't be found.</h3>
        <h1
          style={{
            fontSize: '10em',
            margin: '3px 0'
          }}
        >
          404
        </h1>
        <h6>sorry about that</h6>
      </div>
    </Layout>
  );
};

export default PageNotFound;
