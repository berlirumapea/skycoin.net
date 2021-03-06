import React from 'react';
import Link from 'components/Link';

const PageLinks = () => (
  <div style={{ opacity: 0, position: 'absolute' }}>
    <Link to="/orderskyminer" />
    <Link to="/buy" />
    <Link to="/gallery" />
    <Link to="/buy-fiat" />
    <Link to="/thankyou" />
    <Link to="/exchanges" />
    <Link to="/landing/skywire" />
    <Link to="/landing/skywallet" />
    <Link to="/landing/skyminer" />
  </div>
);

export default PageLinks;
