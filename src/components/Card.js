import React from "react";
import { Card } from 'react-bootstrap';

export default class Cards extends React.Component {
    render () {
        const memberCard = this.props.members.map(member => {
            return (
                <Card
                    bg={this.props.color}
                    text='white'
                    style={{ width: '18rem' }}
                    key={member.id}
                    onClick={() => this.props.clickButton(member.name, member.isAttended)}
                >
                    <Card.Img variant="top" src="images/sample.png" />
                    <Card.Body>
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        });

        return (
            <div>
                <ul>{memberCard}</ul>
            </div>
        )
    }
}
