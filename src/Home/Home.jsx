import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <>
    <div className="py-20 px-20">
      <h1 className="text-violet-700 text-5xl font-semibold">Gatsby</h1>
      <h1 className="text-5xl font-medium pt-3">Weather forecast</h1>
      <p className="pt-5 text-lg"><i>Gather latest <a href="https://www.google.com/search?client=firefox-b-d&q=weather" 
      className="text-violet-700 hover:underline">Weather</a> update of your City from where ever you want.</i></p>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Home