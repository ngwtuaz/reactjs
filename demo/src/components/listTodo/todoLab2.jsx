import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../../index.css'

function TodoLab2() {
    const [valueInput, setValueInput] = useState({
        id: null,
        task: "",
    });
    const [listValue, setListValue] = useState([]);

    const handleSetValue = (e) => {
        let value = e.target.value;
        setValueInput({
            ...valueInput,
            task: value,
        });
    };

    const handleAdd = () => {
        const dataId = {
            ...valueInput,
            id: Date.now(),
        };
        if (valueInput.id) {
            const dataUp = listValue.map((item) => {
                if (item.id === valueInput.id) {
                    return {
                        ...dataId,
                        id: valueInput.id,
                    };
                }
                return item;
            });
            setListValue(dataUp);
            setValueInput({ id: null, task: "" });
        } else {
            setListValue([...listValue, dataId]);
            setValueInput({ id: null, task: "" });
        }
    };

    const handleDel = (id) => {
        const newDel = listValue.filter((item) => item.id !== id);
        setListValue(newDel);
    };

    const handleEdit = (item) => {
        setValueInput(item);
    };

    return (
        <div className='todo'>
            <h1>List TODO App</h1>
            <div className='form-add'>
                <TextField
                    fullWidth
                    label="Task Name"
                    size="small"
                    onChange={handleSetValue}
                    value={valueInput.task}
                />
                <Button variant="contained" onClick={handleAdd}>
                    {valueInput.id ? "Update" : "Add"}
                </Button>
            </div>

            {listValue.map((item, index) => (
                <ListItem disableGutters className='item' key={index}>
                    <ListItemText primary={item.task} />
                    <Button variant="outlined" color="success" onClick={() => handleEdit(item)}>
                        <EditNoteIcon />
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => handleDel(item.id)}>
                        <DeleteForeverIcon />
                    </Button>
                </ListItem>
            ))}
        </div>
    );
}

export default TodoLab2;