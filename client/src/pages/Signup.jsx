import { Link } from 'react-router-dom';
import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
      <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Team's .
            </span>
            Blog
          </Link>
<p className='text-sm mt-5'>
You can Sign up with your email and password or with Google.
</p>
        </div>
        {/*right*/}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className="">
            <Label value='Your Username' style={{ color: 'black' }} />
<TextInput type='text' placeholder='Username' id='username' className="border-0" style={{ color: 'white' }} />
          </div> 
          <div className="">
            <Label value='Your Email' style={{ color: 'black' }} />
<TextInput type='text' placeholder='Email' id='Email' className="border-0" style={{ color: 'white' }} />
          </div>  
          <div className="">
            <Label value='Your Password' style={{ color: 'black' }} />
<TextInput type='text' placeholder='Password' id='Password' className="border-0" style={{ color: 'white' }} />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' >
            Sign Up
            </Button>   
         </form>
         <div className="flex gap-2 text-sm mt-5">
          <span>
            Have an account?
          </span>
          <Link to='/signin' className='text-blue-500'>
            Sign In
          </Link>
         </div>
        </div>
      </div>
      </div> 
  );   
  
  }
  