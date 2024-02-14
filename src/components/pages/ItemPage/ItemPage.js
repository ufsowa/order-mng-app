import { useParams } from 'react-router';
import Table from '../../features/Table/Table.js';

const ItemPage = () => {
    const { id } = useParams();
  
    return (
        <Table id={id} />
    );
}

export default ItemPage;