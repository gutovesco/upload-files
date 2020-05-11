import React from 'react';
import GlobalStyle from './global';
import {Container, Content} from './styles'
import Upload from './components/upload/index'

function App() {
  return (
    <Container>
      <Content> 
        <Upload/>
      </Content>
      <GlobalStyle/>
    </Container>
  );
}

export default App;
