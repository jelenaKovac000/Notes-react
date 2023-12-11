import CreateNote from '../modals/CreateNote';
import { useEffect, useState } from 'react';
import Card from './NoteCard';

const ToDo = () => {
    const [modal, setModal] = useState(false);
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('noteList');

        if (arr) {
            let obj = JSON.parse(arr);
            setNoteList(obj);
        }
    }, []);

    const toggle = () => setModal(!modal);

    const saveNote = (object) => {
        let tempList = [...noteList, object];
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(tempList);
        setModal(false);
    };

    const updateNote = (index, updatedNote) => {
        let tempList = [...noteList];
        tempList[index] = updatedNote;
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(tempList);
    };

    const deleteNote = (index) => {
        let tempList = [...noteList];
        tempList.splice(index, 1);
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(tempList);
    };

    return (
        <>
            <div className="header text-center">
                <h3>Note List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
                    Add Note
                </button>
            </div>
            <div className="noteContainer">
                {noteList.map((obj, index) => (
                    <Card
                        key={index}
                        taskObj={obj}
                        index={index}
                        deleteNote={deleteNote}
                        updateNote={updateNote}
                    />
                ))}
            </div>
            <CreateNote toggle={toggle} modal={modal} save={saveNote} />
        </>
    );
};

export default ToDo;
