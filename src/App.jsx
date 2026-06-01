import { books } from "./constants/mockData";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <h1>Book App Starting files</h1>
      <p>{books.map((book) => book.title)}</p>
    </Layout>
  );
}

export default App;
