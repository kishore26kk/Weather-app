import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const [searchedContent, setSearchedContent] = useState("");
  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    if(!searchedContent) return;
    navigate(`/weather/${searchedContent}`)
    setSearchedContent("")
  } 

  useEffect(()=>{
    const keyListener = (e) => {
      if(e.code === "Enter"){
        if(!searchedContent) return;
        navigate(`/weather/${searchedContent}`)
        setSearchedContent("")
      }
    } 
    document.addEventListener('keydown',keyListener)
    return ()=>{
      document.removeEventListener('keydown',keyListener)
    }
  },[searchedContent, navigate])

  return (
    <div className="flex justify-center items-center pt-8 pb-8 space-x-4 bg-slate-200">
      <div className="flex">
        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      placeholder='Enter a City' 
      onChange={(e)=>setSearchedContent(e.target.value)}
      value={searchedContent} 
      ref={ref}
      />
      <button onClick={searchSubmitHandler} className="rounded-full w-24 bg-violet-600 text-white ml-5 hover:bg-violet-500">Search</button>
      </div>
    </div>
  )
}

export default Navbar
