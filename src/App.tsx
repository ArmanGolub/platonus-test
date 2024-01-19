import { Provider } from "react-redux"
import Layout from "./layouts/Layout"
import { store } from "./store"

function App() {

  return (
    <div>
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    </div>
  )
}

export default App


