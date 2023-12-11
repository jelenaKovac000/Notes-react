import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

const CreateNote = ({ modal, toggle, save, noteToEdit }) => {
    const [noteName, setNoteName] = useState('');
    const [descNote, setDescNote] = useState('');

    useEffect(() => {
        if (noteToEdit) {
            setNoteName(noteToEdit.Name || '');
            setDescNote(noteToEdit.Desc || '');
        } else {
            setNoteName('');
            setDescNote('');
        }
    }, [noteToEdit, modal]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'noteName') {
            setNoteName(value);
        } else {
            setDescNote(value);
        }
    };

    const handleSave = () => {
        const noteObj = {
            Name: noteName,
            Desc: descNote,
        };

        save(noteObj);
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} onOpened={() => !noteToEdit && setNoteName('') && setDescNote('')}>
                <ModalHeader toggle={toggle}>
                    {noteToEdit ? `Edit Note - ${noteToEdit.Name}` : 'Add Note'}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                placeholder="Title of Note"
                                className="form-control"
                                value={noteName}
                                onChange={handleChange}
                                name="noteName"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                rows="5"
                                className="form-control mt-2"
                                placeholder="Write text of the note"
                                value={descNote}
                                onChange={handleChange}
                                name="descNote"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        {noteToEdit ? 'Update' : 'Create'}
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateNote;
