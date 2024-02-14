import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Table = ({id, status }) => {
    return (
        <div className="m-2 border-bottom">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-row gap-5 align-items-center">
                    <h3 className="mb-2">Table {id}</h3>
                    <div className=""><b>Status:</b> {status}</div>
                </div>
                <Link to={"/post/" + id}><Button variant="primary" className="mb-3">Show more</Button></Link>
            </div>
        </div>
    );
}

export default Table;