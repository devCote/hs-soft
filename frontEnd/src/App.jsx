import Continents from './components/Continents'
import {
  useQuery,
  gql
} from "@apollo/client";

const DATA = gql`
query {
  continents {
    name,
    countries {
      name,
      languages {
        name
      }
    }
  }
}
`;

const App = () => {
  const { loading, error, data } = useQuery(DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Continents data={data.continents} />
  )
}

export default App
