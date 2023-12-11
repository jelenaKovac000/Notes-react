import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteConfirmation = ({ isOpen, toggle, onDelete, noteTitle }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Delete Confirmation</ModalHeader>
            <ModalBody>
                {`Are you sure you want to delete "${noteTitle}"?`}
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => { onDelete(); toggle(); }}>
                    Yes
                </Button>
                <Button color="secondary" onClick={toggle}>
                    No
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteConfirmation;
