
import ImgLogo from '../public/img/Logo.svg'
import DropdownUser from './DropdownUser';
import Notifications from './Notifications'
import Image from 'next/image';
const NavBar = () => {
    return (
        <>
            <header className='bg-white z-10 shadow-sm fixed top-0 left-0 right-0 h-20 flex space-x-4 justify-end items-center'>     
                <div className='flex items-center space-x-4 px-4'>
                    <span className='font-play font-medium text-base hidden md:block'>Price</span>
                 
                    <Notifications color="white" />
                    <DropdownUser /> 
                    
                    
                </div>
            </header>
        </>
    )
}
export default NavBar