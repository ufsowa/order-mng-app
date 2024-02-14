import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById, updateItem } from '../../../redux/tablesReducer.js';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const ItemPage = ({id}) => {
    const itemData = useSelector((state) => getItemById(state, id));
    const [status, setStatus] = useState(itemData.status);
    const [peopleAmount, setPeopleAmount] = useState(itemData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(itemData.maxPeopleAmount);
    const [bill, setBill] = useState(itemData.bill);

    const statuses = ["Busy", "Free", "Cleaning", "Reserved"]; 
    const dispatch = useDispatch();

    useEffect(() => {
        if(["Cleaning", "Free"].includes(status)) {
            setPeopleAmount(0);
        }
    }, [status]);

    const handleUpdate = (e) => {
        dispatch(updateItem({id, status, peopleAmount, maxPeopleAmount, bill}));
    }

    if(!itemData) return <Navigate to="/" />
    else return (
        <div className="d-flex flex-column align-items-center align-items-sm-start col-sm-10 col-md-5 col-lg-3 ">
        <h1 className="mb-3">Table {itemData.id}</h1>
        <ul className="p-0">
            <li className="d-flex flex-column flex-sm-row gap-3 list-group-item my-4 align-items-center">
                <h6 className="m-0">Status:</h6>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                </Form.Select>
            </li>
            <li className="list-group-item d-flex flex-column flex-sm-row gap-3 list-group-item my-4 align-items-center">
                <h6 className="m-0">People:</h6>
                <div className="d-flex flex-row gap-3 align-items-center col-sm-7">
                    <Form.Control type="number" min="0" max={maxPeopleAmount}
                    value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.value)}/>
                    /
                    <Form.Control type="number" min="0" max="10"
                    value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(e.target.value)}/>
            </div>
            </li>
            { status === "Busy" ? <li className="list-group-item d-flex flex-column flex-sm-row list-group-item my-4 align-items-center">
                <h6 className="m-sm-0">Bill:</h6>
                <div className="ms-sm-5 d-flex flex-row gap-2 align-items-center col-sm-4">
                $    <Form.Control type="number" min="0" 
                    value={bill} onChange={(e)=>setBill(e.target.value)}/>
                </div>
            </li> : null}
        </ul>
        <Link to={"/"} >
            <Button onClick={handleUpdate} variant="btn btn-primary">Update</Button>
        </Link>
        </div>
    );
}

export default ItemPage;