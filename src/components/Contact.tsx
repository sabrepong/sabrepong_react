import * as React from 'react';
import styled from "styled-components";
import PersonCard from "./PersonCard";
import Banner from "./Banner";

export default class Contact extends React.PureComponent {
    render() {
        return (
            <>
                <Banner text={'Management'}/>
                <ContactRoot>
                    <div className='management'>
                        <div className='d-flex management-row'>
                            <PersonCard fullName={'Wojciech Kumon'}
                                        email='wojciech.kumon@sabre.com'
                                        description={'CEO/Founder'}/>
                            <PersonCard fullName={'Lukasz Kostrzewa'}
                                        email='lukasz.kostrzewa@sabre.com'
                                        description={'Technical'}/>
                            <PersonCard fullName={'Rafal Migaj'}
                                        email='rafal.migaj@sabre.com'
                                        description={'Ladder'}/>
                            <PersonCard fullName={'Piotr Matusz'}
                                        email='piotr.matusz@sabre.com'
                                        description={'Fishie'}/>
                            <PersonCard fullName={'Mateusz Skowron'}
                                        email='mateusz.skowron@sabre.com'
                                        description={'Technical'}/>
                            <PersonCard fullName={'Marcin Slowiak'}
                                        email='marcin.slowiak@sabre.com'
                                        description={'Technical'}/>
                        </div>
                        <div className='d-flex management-row'>
                            <PersonCard fullName={'Tomasz Swietoniowski'}
                                        email='tomasz.swietoniowski.ctr@sabre.com'
                                        description={'Cool guy'}/>
                            <PersonCard fullName={'Kacper Zelichowski'}
                                        email='kacper.zelichowski.ctr@sabre.com'
                                        description={'Design / Main referee'}/>
                        </div>
                    </div>
                </ContactRoot>
            </>
        );
    }
}

const ContactRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .box {
    width: 50%;
    height: 100%;
  }
  
  .management {
    display: flex;
    flex-direction: column;
  }
`;