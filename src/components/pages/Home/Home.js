import { useSelector } from 'react-redux';
import { getAllItems } from '../../../redux/tablesReducer.js';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TableItem from '../../features/TableItem/TableItem.js';

const Home = () => {
    const items = useSelector(getAllItems)

    return (
        <>
            <h1>All tables</h1>
            <Container className="d-flex flex-column gap-1">
                {items.map(item => <TableItem key={item.id} {...item} />)}
                <Link to={"/table/add"} className="text-center mt-3" ><Button className="col-5" variant="btn btn-primary">Add Table</Button></Link>
            </Container>
        </>
    );
}

export default Home;