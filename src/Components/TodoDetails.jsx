import { useParams,Link } from "react-router-dom"

function TodoDetails({list}) {
  const {id}= useParams();
  const item= list[id];
  return (
   <>
   <div className="flex  flex-col justify-center  items-center h-screen bg-white">
   <div className="box w-70 flex flex-col gap-4 rounded-2xl bg-blue-300 border-2 border-blue-900 ">
    <h1 className="text-blue-900 font-bold text-3xl text-center">Todo Details</h1>
    <p className="text-blue-700" ><strong className="text-blue-900 ">Item: </strong> {item}</p>
    <Link to="/" className="text-white font-bold  bg-blue-800 back"> Back</Link>
    </div>
  </div>
   </>
  )
}

export default TodoDetails