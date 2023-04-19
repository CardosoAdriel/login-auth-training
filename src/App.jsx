import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import Layout from "./components/Layout/Layout";
import RoutesApp from "./routes";
import AuthProvider from "./context/auth";

function App() {

  const teste = (event) => {
    event.preventDefault()
    console.log('TESTADO !!!')
  }

  return (
    <AuthProvider>
      <Layout>
        <RoutesApp />
      </Layout>
    </AuthProvider>
  )
}

export default App
