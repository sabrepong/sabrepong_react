import * as React from 'react';
import {Card} from 'react-bootstrap';

export default class PersonCard extends React.PureComponent<PersonCardProps> {
    render() {
        const {
            fullName, email, description
        } = this.props;
        return (
            <Card style={{width: '20rem'}} className={'shadow p-3 mb-5 bg-white rounded mb-1 mr-1'}>
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

interface PersonCardProps {
    fullName: string;
    email: string;
    description: string;
}

