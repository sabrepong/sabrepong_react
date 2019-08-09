import * as React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

export default class LandingPage extends React.PureComponent {
    render() {
        return (
            <>
            <Banner/>
            <LandingPageRoot >
                <div className='box'>
                    <div>
                        <h3 className='mt-5 mb-5'>

                        </h3>
                    </div>
                    <div>
                        <h4>
                            SabrePong is a internal table tennis tournament.
                        </h4>
                        <p>
                            This website was created to support tournament newcomers,
                        </p>
                        <p>
                            and to have and easy way to access the ladder as well as the table tennis rules.
                        </p>
                    </div>
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
