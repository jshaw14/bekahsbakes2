import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import { Title } from '../../theme/types';

export default class Contact extends Component {
  static propTypes = {};

  render() {
    return (
        <Container>
   <Title>Contact</Title>
   <p>Please feel free to contact me.</p>
   <p><a href="https://www.instagram.com/bekahsbakes/?hl=en/"><img src={require('../../assets/insta.png')} height="64" width="auto" alt=""/></a></p>     
   <p><a href="https://www.facebook.com/bekahsbakes/"><img src={require('../../assets/facebook.svg')} height="64" width="auto" alt=""/></a></p>
   <p><b>Email: </b><a href="mailto:bekahsbakes@outlook.com">bekahsbakes@outlook.com</a></p>
        </Container>
    );
  }
}