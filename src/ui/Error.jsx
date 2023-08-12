import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();
  return (
    <>
    <div>{error.data}</div>
    <Link to="/" className='text-blue-700 hover:underline'>&larr; Back to home</Link>
    </>
  )
}

export default Error