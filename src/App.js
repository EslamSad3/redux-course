import Counter from "./features/counter/Counter";
import AddPostForm from "./features/post/AddPostForm";
import PostsList from "./features/post/PostsList";

function App() {
  console.log('app')
  return (
    <>
      {/* <Counter/> */}
      <PostsList/>
      <AddPostForm/>
    </>
  );
}

export default App;
