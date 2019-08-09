import * as React from 'react';
import styled from 'styled-components';

export default class Banner extends React.PureComponent {
    render() {
        return (
            <BannerRoot className='mt-5'>
                <h2>
                    Welcome to the official SabrePong website!
                </h2>
            </BannerRoot>
        );
    }
}

const BannerRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  text-align: center;
  background-color: #a7182c;
  
  h2 {
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px black;
  }
`;