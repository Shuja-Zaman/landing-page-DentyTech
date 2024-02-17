import { AlignRight, Cross } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-transparent items-center justify-between px-4 py-3'>
        <div className='nav-1 flex'>
            <h3 className='rounded-full border-2 border-black px-4 py-1'>Menu</h3>
            <div className='px-1 py-1 border-2 border-black rounded-full'>
              <AlignRight className='' />
            </div>
        </div>
        <div className='nav-2 flex gap-3 items-center'>
            <div className='bg-orange-400 rounded-full p-2'><Cross className='text-white' /></div>
            <h1 className='uppercase text-xl'>DentyTech</h1>
        </div>
        <div className='nav-3 flex'>
            <h2 className='rounded-full border-2 border-black px-4 py-1'>Login</h2>
            <h2 className='rounded-full text-white px-3 bg-orange-400 py-1'>Sign Up</h2>
        </div>
    </nav>
  )
}

export default Navbar