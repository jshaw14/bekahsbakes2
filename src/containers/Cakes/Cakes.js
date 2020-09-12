import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, ImageContainer } from './Cakes.style';
import { Container, Relative, Flex } from '../../theme/grid';
import ParallaxImage from 'react-image-parallax2';
import { Title } from '../../theme/types';
import EDFApdf from "../../assets/EDFAFinalReport.pdf";
import BVCenReport from "../../assets/BVCenReport.pdf";
import Dissertation from "../../assets/Dissertation.pdf"

class Cakes extends Component {

    render(){
        return (
        <Container>
            <Title>Cakes</Title>
            <p>A little taste of my work
            </p>
            <Relative marginTop='100px' marginBottom='50px'>
                <Index>
                    <h1>01</h1>
                </Index>
                <h1>Wedding Cake</h1>
            </Relative>
            <p>Bottom layer was raspberry and vanilla, middle layer was lemon and top layer was chocolate fudge.</p>
            <Flex justify={'center'} marginBottom="4em">
            <Zoomy
              imageUrl={require('../../assets/weddingcake.jpg')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/weddingcake.jpg')}
                        alt="weddingcake"/> 
                    </ImageButton>
                            }
              scale={[1,1]}
              imageProps={{
                style: {
                  width: '80vw',
                  height: 'auto'
                }
              }}
            />
        </Flex>
        <Relative marginTop='100px' marginBottom='50px'>
                <Index>
                    <h1>02</h1>
                </Index>
                <h1>Leaving Party Cake</h1>
            </Relative>
            <p>Gin themed cake for leaving party</p>
            <Flex justify={'center'} marginBottom="4em">
            <Zoomy
              imageUrl={require('../../assets/gintheme.jpg')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/gintheme.jpg')}
                        alt="gintheme"/> 
                    </ImageButton>
                            }
              scale={[1,1]}
              imageProps={{
                style: {
                  width: '80vw',
                  height: 'auto'
                }
              }}
            />
        </Flex>
        <Relative marginTop='100px' marginBottom='50px'>
                <Index>
                    <h1>03</h1>
                </Index>
                <h1>Chocolate Cake</h1>
            </Relative>
            <Flex justify={'center'} marginBottom="4em">
            <Zoomy
              imageUrl={require('../../assets/chocolatecake.jpg')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/chocolatecake.jpg')}
                        alt="titanic"/> 
                    </ImageButton>
                            }
              scale={[1,1]}
              imageProps={{
                style: {
                  width: '80vw',
                  height: 'auto'
                }
              }}
            />
        </Flex>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>04</h1></Index>
            <h1>?</h1>
            </Relative>
            <p>More is in the works.</p>
        </Container>  
        
        
        );
    }
}

export default Cakes;
