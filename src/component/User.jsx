import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditUserContact from './EditUserContact';

const User = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.DeleteUser(props.userInfo.id);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserContact userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
                </Modal.Body>
                
            </Modal>
                    
            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>

                        <Card.Subtitle className="mb-2 text-muted">
                            Codetrain User
                        </Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Gen: {props.userInfo.gen}</p>
                        </Card.Text>
                        <Card.Link href="#"><Button variant="primary" size="sm" onClick={handleShow}>Edit</Button></Card.Link>
                        <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default User;
