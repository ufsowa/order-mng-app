import { useSelector } from 'react-redux';
//import { getAllPosts } from '../../../Redux/postsReducer.js';
import { Container } from 'react-bootstrap';

//import Post from '../../features/Post/Post.js';

const Home = () => {
    //const posts = useSelector(getAllPosts)

    return (
        <>
            <h1>All tables</h1>
            <Container className="d-flex justify-content-center row">

            </Container>
        </>
        //                {posts.map(post => <Post key={post.id} {...post} />)}
    );
}

export default Home;