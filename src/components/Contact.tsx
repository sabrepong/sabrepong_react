import * as React from 'react';
import styled from "styled-components";
import PersonCard from "./PersonCard";

export default class Contact extends React.PureComponent {
    render() {
        return (
            <ContactRoot>
                <div className='box'>
                    <h3 className='mt-5 mb-5'>
                        SabrePong management
                    </h3>
                </div>
                <div className='management'>
                    <div className='d-flex management-row mb-2'>
                        <PersonCard fullName={'Wojciech Kumoń'}
                                    email='wojciech.kumon@sabre.com'
                                    description={'CEO/Founder'}/>
                        <PersonCard fullName={'Lukasz Kostrzewa'}
                                    email='lukasz.kostrzewa@sabre.com'
                                    description={'Technical'}/>
                        <PersonCard fullName={'Rafał Migaj'}
                                    email='rafal.migaj@sabre.com'
                                    description={'Ladder'}/>
                        <PersonCard fullName={'Piotr Matusz'}
                                    email='piotr.matusz@sabre.com'
                                    description={'Fishie'}/>
                        <PersonCard fullName={'Mateusz Skowron'}
                                    email='piotr.matusz@sabre.com'
                                    description={'Technical'}/>
                        <PersonCard fullName={'Marcin Słowiak'}
                                    email='marcin.slowiak.chyba.dst@sabre.com'
                                    description={'Technical'}/>
                    </div>
                    <div className='d-flex management-row'>
                        <PersonCard fullName={'Tomasz Świętoniowski'}
                                    email='tomasz.swietoniowski.ctr@sabre.com'
                                    description={'Cool guy'}/>
                        <PersonCard fullName={'Kacper Żelichowski'}
                                    email='kacper.zelichowski.ctr@sabre.com'
                                    description={'Design / Main referee'}/>
                    </div>
                </div>
            </ContactRoot>
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