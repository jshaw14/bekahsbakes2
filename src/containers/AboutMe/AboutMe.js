import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { VideoContainer } from './AboutMe.style';
import { H2, P, Title } from '../../theme/types';

class AboutMe extends Component {
  render() {
    return (
      <Container>
          <Title>Bio</Title>
          <H2 align="left">Rebekah Taylor</H2>
            <P>So...about me.  I am American restaurateur, author, and an Emmy Award winning television presenter. I co-own three restaurants in California, licenses his name to restaurants in New York City and Las Vegas, Nevada, and am known for hosting various television series on the Food Network. By mid-2010, the Food Network had made me the "face of the network". In 2010, The New York Times reported that I brought an "element of rowdy, mass-market culture to American food television".
            </P>
            <H2>Training</H2>
            <ul>
            <li>Flavortown College</li>
            <p>Dessert studies</p>
            <p>Achieved a pass</p>
            </ul>
            <H2>Work Experience</H2>
            <ul>
            <li>The Made Up Baking Company</li>
            <p>That cafe in that street</p>
            <p>While there I did stuff</p>
            <li>Flame Belfast</li>
            <p>Dessert Chef</p>
            <li>Caffe Nero Belfast </li>
            <p>Barista</p>
            </ul>
            <H2>Skills</H2>
            <p>Weddings, Engagements, Other Occasions</p>

            <H2>Other Interests</H2>
            <ul>
              <li>Guy Fieri</li>
              <li>Puns</li>
              <li>Music</li>
            </ul>
      </Container>
    );
  }
}

export default AboutMe;
