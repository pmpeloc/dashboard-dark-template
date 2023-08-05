import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import {
  RiArrowDownSFill,
  RiChat3Line,
  RiLogoutCircleRLine,
  RiNotification3Fill,
  RiSettings3Line,
  RiThumbUpLine,
} from 'react-icons/ri';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export const Header = () => {
  return (
    <header className=' h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-3'>
        <Menu
          menuButton={
            <MenuButton className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
              <RiNotification3Fill />
              <span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
                3
              </span>
            </MenuButton>
          }
          transition
          menuClassName='bg-secondary-100 p-4'
          arrow
          arrowProps={{ className: 'bg-secondary-100' }}
          align='center'>
          <h1 className='text-gray-300 text-center'>Notificaciones (3)</h1>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <img
                src='https://img.freepik.com/foto-gratis/bomba-puno-chica-morena-atractiva-alegre-sonriendo-regocijo-ganando_1258-19074.jpg'
                className='w-8 h-8 object-cover rounded-full'
              />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Lucrecia Rodriguez</span>{' '}
                  <span className='text-[8px]'>21/10/2022</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Lorem ipsum dolor, sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <RiThumbUpLine className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New like</span>{' '}
                  <span className='text-[8px]'>21/10/2022</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Jhon liked your post, 3 min ago...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/'
              className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <RiChat3Line className='p-2 bg-yellow-200 text-yellow-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New comment</span>{' '}
                  <span className='text-[8px]'>21/10/2022</span>
                </div>
                <p className='text-gray-500 text-xs'>
                  Samuel has comment your post...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent flex justify-center cursor-default'>
            <Link
              to='/'
              className='text-gray-400 text-sm hover:text-white transition-colors'>
              Leer todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
              <img
                src='https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-66609.jpg'
                alt='User'
                className='w-7 h-7 object-cover rounded-full'
              />
              <span>Hola, pmpeloc!</span>
              <RiArrowDownSFill />
            </MenuButton>
          }
          transition
          menuClassName='bg-secondary-100 p-4'
          arrow
          arrowProps={{ className: 'bg-secondary-100' }}
          align='end'>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/profile'
              className='rounded-lg transition-colors hover:bg-secondary-900 text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <img
                src='https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-66609.jpg'
                alt='User'
                className='w-7 h-7 object-cover rounded-full'
              />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Pablo Misael Peloc</span>
                <span className='text-xs text-gray-500'>pmpeloc@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/settings'
              className='rounded-lg transition-colors hover:bg-secondary-900 text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link
              to='/logout'
              className='rounded-lg transition-colors hover:bg-secondary-900 text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
