import * as React from 'react';
import Banner from './Banner';
import styled from 'styled-components';

export default class Rules extends React.PureComponent {
    render() {
        return (
            <>
                <Banner text={'Tournament rules'}/>
                <RulesRoot className='ml-4'>
                    <ol>
                        <li>
                            One must be at least 18 to participate in the tournament.
                        </li>
                        <li>
                            Tournament is organized for employees as well as for contractors.
                        </li>
                        <li>
                            Each and every participant is obliged to get familiar with table tennis basic rules. (
                            <a
                                href='http://www.pingpong.pl/przepisy_ittf.htm'
                                target='_blank'
                                rel='noopener noreferrer' >rules</a>
                            )
                        </li>
                        <li>
                            Each participant is obliged to follow the table tennis rules while participating in the tournament.
                        </li>
                        <li>
                            Each participant is responsible for updating his ladder score.
                        </li>
                        <li>
                            Inconsistencies in the ladder score will be resolved by the tournament board.
                        </li>
                        <li>
                            Each participant is willingly accepting to follow all of the tournament rules.
                        </li>
                        <li>
                            Participant's not following the rules will be expelled from the tournament.
                        </li>
                    </ol>
                </RulesRoot>
            </>
        );
    }
}

const RulesRoot = styled.div`
  font-family: Roboto,sans-serif;
`;