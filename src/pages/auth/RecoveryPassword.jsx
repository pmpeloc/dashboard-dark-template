import React, { useState } from 'react';

// Icons
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockFill,
  RiMailFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const RecoveryPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[540px]'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
        Recuperar <span className='text-primary'>contraseña</span>
      </h1>
      <form className='mb-8'>
        <div className='relative mb-8'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input
            type='email'
            className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Email'
          />
        </div>
        <div>
          <button
            type='submit'
            className='bg-primary/80 text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-black transition-colors'>
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className='flex flex-col items-center gap-4'>
        <span className='flex items-center gap-2'>
          ¿Ya tienes cuenta?
          <Link
            to='/auth'
            className='text-primary/80 hover:text-gray-100 transition-colors'>
            Ingresa
          </Link>
        </span>
        <span className='flex items-center gap-2'>
          ¿No tienes cuenta?
          <Link
            to='/auth/register'
            className='text-primary/80 hover:text-gray-100 transition-colors'>
            Registrate
          </Link>
        </span>
      </div>
    </div>
  );
};
