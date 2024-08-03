// import axios from "axios";
// import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './lab5.css';
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";

function Lab5() {
    // const [columns, setColumns] = useState([]);
    // const [records, setRecords] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             let res = await axios.get('https://669b0836276e45187d347ac2.mockapi.io/todos', {
    //                 param: {
    //                     page: 3,
    //                     limit: 5,
    //                 }
    //             });
    //             setColumns(Object.keys(res.data[0]));
    //             setRecords(res.data);
    //             console.log(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, []);

    return (
        // <div className="container">
        //     <Link to={`create`}> <Button variant="outlined">Add</Button></Link>
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 {columns.map((c, i) => (
        //                     <th key={i}>{c}</th>
        //                 ))}
        //                 <th>Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {records.map((d, i) => (
        //                 <tr key={i}>
        //                     <td>{d.Id}</td>
        //                     <td>{d.Title}</td>
        //                     <td className="btn-action">
        //                         <Button variant="contained" color="success">
        //                             <EditIcon />
        //                         </Button>
        //                         <Button variant="outlined" color="error">
        //                             <DeleteOutlineIcon />
        //                         </Button>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
        <div className='btn-add'>
            <Link to={`create`}> <Button variant="outlined">Add</Button></Link>
            <Outlet />
        </div>
    );
}

export default Lab5;
