
import {Form,redirect ,useLoaderData,useActionData,useNavigation} from "react-router-dom"
import {loginUser} from '../../utils/loginAuth'
 export async function action ({request}) {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
    try {
         const data = await loginUser({email,password})
        localStorage.setItem('isAuthenticated', true)
    } catch (error) {
      return error.message
    }
       
      //  console.log(data)
redirect('/host')       
return null

    }
    export const loader = ({request}) => {
        const url = new URL(request.url)
        const message = url.searchParams.get('message')
        console.log(message)
        return message
    } 
function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
  return (
    <div>

      <Form  method="post"
      className=" flex flex-col gap-10 w-full max-w-sm mx-auto mt-10"
      >
        <h1 className=" text-3xl  font-bold">Sign in to your account</h1>
        {message && <p className=" text-red-500">{message}</p>}
        {errorMessage && <p className=" text-red-500">{errorMessage}</p>}
   
        <input type="email" name="email" placeholder=" Email Address" 
        className=" h-10 border-amber-200 border-2 rounded-md"
        />
        <input type="password" name="password"  placeholder=" Password" 
                className=" h-10 border-amber-200 border-2 rounded-md"

        />
        <button type="submit" className=" bg-[#FF8C38] rounded-md py-2 " disabled={navigation.state === 'submitting'} >
          {navigation.state === 'submitting' ? 'Logging in...' : 'Login'}
        </button>
        <p>Don’t have an account? <span className=" text-[#FF8C38]">Create one now</span></p>
      </Form>
    </div>
  )
}

export default Login
