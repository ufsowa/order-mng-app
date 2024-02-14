import { useSelector } from 'react-redux';
import { getAllItems } from '../../../redux/tablesReducer.js';
import { Container } from 'react-bootstrap';

import Table from '../../features/Table/Table.js';

const Home = () => {
    const items = useSelector(getAllItems)

    return (
        <>
            <h1>All tables</h1>
            <Container className="d-flex flex-column gap-1">
                {items.map(item => <Table key={item.id} {...item} />)}
            </Container>
        </>
    );
}

export default Home;