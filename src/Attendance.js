import React from 'react';
import { Button, Modal, Form, Col} from 'react-bootstrap';

import Clock from "./components/Clock";
import Cards from "./components/Card";

export default class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            members: [
                { id: 0, name: "鈴木 一郎", isAttended: 0 },
                { id: 1, name: "佐藤 二郎", isAttended: 1 },
                { id: 2, name: "田中 三郎", isAttended: 1 }
            ],
            memberName: null,
            attended: 0,
            color: 'secondary'
        };
    }

    render() {
        return (
            <>
                <div>
                <Cards
                    members={this.state.members}
                    color={this.state.color}
                    memberName={this.state.memberName}
                    clickButton={(num, attend) => this.handleShow(num, attend)}
                />
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>出退勤管理/{this.state.memberName}</Modal.Title>
                        <Form.Row>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="愛媛"
                                    name="placeCheckbox"
                                    id="placeCheckbox1"
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="東京"
                                    name="placeCheckbox"
                                    id="placeCheckbox1"
                                />
                            </Col>
                        </Form.Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Clock />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            {this.state.attended > 0 ? '退勤' : '出勤'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    // モダールを開く
    handleShow = (name, attend) => {
        this.setState({
            show: true,
            memberName: name,
            attended: attend
        });
    };

    // モダールを閉じる
    handleClose = () => {
        console.log(this.state.memberName);
        const attendColor = this.state.attended > 0 ? 'secondary' : 'primary';
        this.setState({ show: false, color: attendColor });
    };
};