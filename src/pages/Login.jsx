import { useState } from "react"
function Login() {
    const [formData, setFormData] = useState({})

    // const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    } 
    const handChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }  
  return (
    <div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-10 w-full max-w-sm mx-auto mt-10">
        <h1 className=" text-3xl  font-bold">Sign in to your account</h1>
        <input type="email" name="email" onChange={handChange} placeholder=" Email Address" 
        className=" h-10 border-amber-200 border-2 rounded-md"
        />
        <input type="password" name="password" onChange={handChange} placeholder=" Password" 
                className=" h-10 border-amber-200 border-2 rounded-md"

        />
        <button type="submit" className=" bg-[#FF8C38] rounded-md py-2">Login</button>
        <p>Don’t have an account? <span className=" text-[#FF8C38]">Create one now</span></p>
      </form>
    </div>
  )
}

export default Login
