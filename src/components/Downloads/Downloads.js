import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopBanner from 'components/TopBanner';
import Whitepappers from 'components/WhitepapersPage/components/Whitepapers';
import Assets from './components/Assets';
import Wallet from './components/Wallet';
import Skywire from './components/Skywire';

import bg from './bg.svg';

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
    </Helmet>
    <Header />
    <TopBanner src={bg} />
    <Wallet />
    <Whitepappers />
    <Assets />
    <Skywire />
    <GetStarted />
    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);
