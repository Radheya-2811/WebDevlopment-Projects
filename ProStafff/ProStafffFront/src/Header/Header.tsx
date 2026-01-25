import { IconProgress } from '@tabler/icons-react';
import { IconMessage2Share } from '@tabler/icons-react';
import NavLinks from './NavLinks';

const Header=()=>{
    return(
        <div className="w-full bg-mine-shaft-950 text-white h-20  flex justify-between px-6 items-center">
            <div className='flex gap-1 items-center text-bright-sun-400'>
                <IconProgress className='h-8 w-8' stroke={3} />
                <div className='text-2xl font-semibold'>
                    ProStafff
                </div>
            </div>
            {NavLinks()}
            
            <div className='flex gap-2 items-center bg-mine-shaft-900 rounded-full  border-white px-4 py-1 hover:shadow-[0_0_12px_black] my-15 transition duration-600 ease-in-out !shadow-bright-sun-300 cursor-pointer'>
                <IconMessage2Share stroke={2} />
                <a href="#">Contact Us</a>   
            </div>
        </div>
    )
}

export default Header;