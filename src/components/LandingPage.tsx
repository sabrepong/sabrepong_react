import * as React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Image from "react-bootstrap/Image";

export default class LandingPage extends React.PureComponent {
    render() {
        return (
            <>
                <Banner text={'Welcome to the SabrePong official website!'}/>
                <LandingPageRoot>
                    <div className='box'>
                        <div>
                            <h4>
                                SabrePong is a internal table tennis tournament.
                            </h4>
                            <p>
                                This website was created to support tournament newcomers,
                            </p>
                            <p>
                                and to have an easy way to access the ladder as well as the table tennis rules.
                            </p>
                            <div className='dates mb-0 mt-5'>
                                <h4>
                                    Registration: August 23rd – September 9th 2019
                                </h4>
                                <h4>
                                    Tournament start: September 10th 2019
                                </h4>
                            </div>
                        </div>
                        <Image
                            className='mt-5'
                            src='https://cdn.ebaumsworld.com/mediaFiles/picture/180230/81509718.jpeg'/>
                    </div>
                </LandingPageRoot>
            </>
        );
    }
}

const LandingPageRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Roboto,sans-serif;
  
  .box {
    width: 50%;
    height: 100%;
  }
  
  h3 {
    font-weight: bold;
  }
  
  p {
    margin-bottom: 0;
  }
`;
