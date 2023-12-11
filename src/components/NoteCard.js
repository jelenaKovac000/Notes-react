import { useState } from "react";
import CreateNote from "../modals/CreateNote";
import DeleteConfirmation from '../modals/DeleteConformation';


const NoteCard = ({ taskObj, index, deleteNote, updateNote, saveNote }) => {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleDelete = () => {
        setDeleteModal(true);
    }

    const confirmDelete = () => {
        deleteNote(index);
        setDeleteModal(false);
    };

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (updatedNote) => {
        updateNote(index, updatedNote);
        toggle(); // Close the modal after updating the task
    };

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ "backgroundColor": "rgb(158, 247, 158)" }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ "backgroundColor": "rgb(158, 247, 158)", "borderRadius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Desc}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit mr-5" style={{ "color": "#7bb074", "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style={{ "color": "#7bb074", "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>

            <CreateNote modal={modal} toggle={toggle} save={updateTask} noteToEdit={taskObj} />


            <DeleteConfirmation
                isOpen={deleteModal}
                toggle={() => setDeleteModal(!deleteModal)}
                onDelete={confirmDelete}
                noteTitle={taskObj.Name}
            />
        </div>
    );
};

export default NoteCard;