import React, { Component } from 'react';

import {
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';
import {Container} from '../../theme/grid';


export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
        <Container>
        <HeroImage/>
        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          Hi, my name's Rebekah.  I'm a pastry chef based in Belfast.
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          Welcome to my site!
        </RevealP>
  }
          </WhenInView>
          
        </Container>
    );
  }
}
