function App() {
  return (
    <>
      <div className="relative place-content-center justify-items-center h-dvh w-dvw bg-gray-900">
        <div className='relative rounded-3xl overflow-hidden h-96 w-custom-width bg-gradient-to-r from-red-600 to-yellow-500 text-center shadow-shcustom'>
          <form className='flex hidden gap-2 flex-col h-64 py-4 justify-between'>

            <h1 className="py-2 text-3xl font-bold underline text-blue-700">
              Login
            </h1>
            
            <label className='text-white px-3'>
              Email :
            </label>
            <input className='w-7/12 self-center' type="email" id="email" required>
            </input>
            <label className='text-white px-3'>
              Password :
            </label>
            <input className='w-7/12 self-center' type="password" id="password" required>
            </input>
            <button className='w-14 self-center border-transparent border-white rounded-md bg-white hover:bg-green-500'>
              LogIn
            </button>
            
              <p>
                Don't have an account ?
                <a href="#" className="hover:underline hover:text-purple-900">
                  Sign up
                </a>
              </p>
            
          </form>
          <form className='relative flex gap-2 flex-col h-64 py-4 justify-between top-4'>

            <h1 className="h-12 w-full text-3xl font-bold underline text-blue-700">
              SignUp
            </h1>
            <label className='text-white px-3'>
              Username :
            </label>
            <input className='w-7/12 self-center' required>
            </input>
            <label className='text-white px-3'>
              Email :
            </label>
            <input className='w-7/12 self-center' type="email" id="email" required>
            </input>
            <label className='text-white px-3'>
              Password :
            </label>
            <input className='w-7/12 self-center' type="password" id="password" required>
            </input>
            <button className='my-2 w-24 self-center border-transparent border-white rounded-md bg-white hover:bg-green-500'>
              Register
            </button>
            
              <p>
                Aready have an account ?
                <a href="#" className="hover:underline hover:text-purple-900">
                  LogIn
                </a>
              </p>
            
          </form>
        </div>
      </div>

    </>

  )
}

export default App
