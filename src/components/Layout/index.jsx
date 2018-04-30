import React from 'react';
import Navigation from 'components/Navigation';
import '../../css/Layout.css';

const Layout = props => {
  return (
    <div>
      <Navigation title={props.appName} />
      <div className="app-content">{props.children}</div>
    </div>
  );
};

export default Layout;
