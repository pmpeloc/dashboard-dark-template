import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import {
  RiArrowRightSLine,
  RiBarChart2Fill,
  RiCalendarTodoFill,
  RiCloseFill,
  RiCustomerService2Line,
  RiEarthFill,
  RiLogoutCircleLine,
  RiMenuFill,
} from 'react-icons/ri';

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scrol fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}>
        <div>
          <h1 className='text-center text-2xl font-bold text-white mb-10'>
            Admin<span className='text-primary text-4xl'>.</span>
          </h1>
          <ul>
            <li>
              <Link
                to='/'
                className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiBarChart2Fill className='text-primary' /> Analytic
              </Link>
            </li>
            <li>
              <button
                className='w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
                onClick={() => setShowSubMenu(!showSubMenu)}>
                <span className='flex items-center gap-4'>
                  <RiEarthFill className='text-primary' /> Social Media
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubMenu && 'rotate-90'
                  } transition-all`}
                />
              </button>
              <ul
                className={`${
                  showSubMenu ? 'h-fit' : 'h-0'
                } overflow-y-hidden transition-all`}>
                <li>
                  <Link
                    to='/'
                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
                    Social Media Post
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
                    Social Media Statistic
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
                    Social Media Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
                    Social Media Followers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to='/'
                className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiCustomerService2Line className='text-primary' /> Support
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiCalendarTodoFill className='text-primary' /> Calendar
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to='/'
            className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
            <RiLogoutCircleLine className='text-primary' /> Logout
          </Link>
        </nav>
      </div>
      <button
        className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'
        onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <RiCloseFill /> : <RiMenuFill />}
      </button>
    </>
  );
};
