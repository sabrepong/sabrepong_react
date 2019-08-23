import * as React from 'react';
import styled from 'styled-components';
import Banner from "./Banner";

export default class FAQ extends React.PureComponent {
    render() {
        return (
            <>
                <Banner text='Frequently asked questions'/>
                <FAQRoot className='ml-4'>
                    <Question>
                        How can I apply for the tournament?
                    </Question>
                    <Answer>
                        Im just a website, how can I know how internal corporation tournaments work...
                        Also, here's a link -->
                        <a
                            href='https://www.sabresurveys.com/jfe/form/SV_5unm09obkZjwGl7'
                            target='_blank'
                            rel='noopener noreferrer' > Registration</a>
                    </Answer>
                </FAQRoot>
            </>
        );
    }
}

const FAQRoot = styled.div`

`;

const Question = styled.h3`

`;

const Answer = styled.p`

`;
