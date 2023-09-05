import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"
import Home from "./Home/Home"
import Weather from "./Weather/Weather"
import PageNotFound from "./ui/PageNotFound"

const router = createBrowserRouter([
  {
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Home /> 
      },
      {
        path : "/weather/:city",
        element : <Weather />,
        errorElement : <PageNotFound />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
