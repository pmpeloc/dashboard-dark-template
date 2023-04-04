import React from 'react';
import { RiArrowDownSFill, RiNotification3Fill } from 'react-icons/ri';

export const Header = () => {
  return (
    <header className=' h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-4'>
        <button className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
          <RiNotification3Fill />
          <span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>
            2
          </span>
        </button>
        <button className='flex items-center gap-x-2'>
          <img
            src='https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-66609.jpg'
            alt='User'
            className='w-7 h-7 object-cover rounded-full'
          />
          <span>Pablo Misael Peloc</span>
          <RiArrowDownSFill />
        </button>
      </nav>
    </header>
  );
};
