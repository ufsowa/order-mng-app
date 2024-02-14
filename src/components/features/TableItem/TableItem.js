import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const TableItem = ({id, status }) => {
    return (
        <div className="m-2 border-bottom d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
            <div className="d-flex flex-row gap-5 align-items-center">
                <h3 className="mb-2">Table {id}</h3>
                <div className=""><b>Status:</b> {status}</div>
            </div>
            <div className="d-flex gap-3 mt-2 mt-sm-0">
                <Link to={"/table/" + id}><Button variant="primary" className="mb-3">Show more</Button></Link>
                <Link to={"/table/delete/" + id}><Button variant="danger" className="mb-3">Remove</Button></Link>
            </div>
        </div>
    );
}

export default TableItem;