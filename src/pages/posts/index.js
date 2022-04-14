import { Button } from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import Navbar from "../../components/navbar/Navbar";
import { fetchPosts } from "../../redux/slices/postsSlice";
import Swal from "sweetalert2";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const loadPosts = async () => {
    try {
      const response = await dispatch(fetchPosts()).unwrap();
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onRefetchDataClick = () => {
    loadPosts();
  };

  return (
    <>
      <Navbar />
      <Container>
        <Button onClick={onRefetchDataClick} color="primary">
          Refetch Data
        </Button>
        {posts.isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {posts.data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}

export default Posts;
