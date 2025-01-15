import { useQuery, gql } from '@apollo/client';

const LIST_BOOKS = gql`
  query ListBooks {
    books {
      id
      title
      author
      price
    }
  }
`


function App() {
  const { loading, error, data } = useQuery(LIST_BOOKS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>書籍名</th>
            <th>著者</th>
            <th>価格&nbsp;(円)</th>
          </tr>
        </thead>
        <tbody>
          {data.books.map((row) => (
            <tr key={row.id}>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td align="right">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
