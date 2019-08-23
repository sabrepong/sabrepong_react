import * as React from 'react';
import styled from 'styled-components';

export default class Banner extends React.PureComponent<BannerProps> {
    render() {
        const {text} = this.props;
        return (
            <BannerRoot className='mt-5 mb-5'>
                <h2>
                    {text}
                </h2>
            </BannerRoot>
        );
    }
}

interface BannerProps {
    text: string;
}

const BannerRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  text-align: center;
  box-shadow: 5px 7px 7px #888888;
  
  background: -moz-radial-gradient(center, ellipse cover, #a7182c 1%, #aa0306 44%, #890002 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #a7182c 1%,#aa0306 44%,#890002 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #a7182c 1%,#aa0306 44%,#890002 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  
  h2 {
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px black;
  }
`;
