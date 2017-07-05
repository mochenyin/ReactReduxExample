import path from 'path';
import React, { Component, PropTypes } from 'react';
import Top from '../assets/src/js/home/components/Top.js';
import Header from '../assets/src/js/home/components/Header.js';
import Category from '../assets/src/js/home/components/Category.js';
import GameData from '../assets/src/js/home/components/GameData.js';
import Default from './layout/Default';

import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
const store=configureStore();

class Home extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };
  render() {
    const { microdata, mydata } = this.props;
    let homeJs = `${microdata.styleDomain}build/${microdata.styleVersion}/home.js`;
    let scriptUrls = [homeJs];

    return (
      <Default  microdata={microdata}  scriptUrls={scriptUrls}  title={"I Have A Dream"}>
        <Provider store={store}>
        <div id="homePage">
          <Top style="nav-top" style2="fl_right" />
          <Header style="c" />
          <Category />
          <GameData />
        </div>
        </Provider>
      </Default >
    );
  }
};

module.exports = Home;
