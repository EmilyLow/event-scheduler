
import './App.css';
import styled from "styled-components";

import Schedule from "./Schedule";

function App() {
  return (
    <Layout>
      <Schedule/>
    </Layout>
  );
}

const Layout = styled.div`
  margin-left: 50px;


`

export default App;
