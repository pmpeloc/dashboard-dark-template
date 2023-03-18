import React, { useState } from 'react';

// Icons
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockFill,
  RiMailFill,
  RiUserFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const renderShowHidePassword = () => {
    return isShowPassword ? (
      <RiEyeOffFill
        onClick={() => setIsShowPassword(!isShowPassword)}
        className='absolute top-1/2 -translate-y-1/2 right-2 text-primary'
      />
    ) : (
      <RiEyeFill
        onClick={() => setIsShowPassword(!isShowPassword)}
        className='absolute top-1/2 -translate-y-1/2 right-2 text-primary'
      />
    );
  };

  return (
    <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[540px]'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
        Crear <span className='text-primary'>Cuenta</span>
      </h1>
      <form className='mb-8'>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 text-gray-100 w-full rounded-full mb-8'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
            alt='Google Icon'
            className='w-4 h-4'
          />{' '}
          Ingresa con Google
        </button>
        <div className='relative mb-4'>
          <RiUserFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input
            type='text'
            className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Username'
          />
        </div>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input
            type='email'
            className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Email'
          />
        </div>
        <div className='relative mb-4'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input
            type={isShowPassword ? 'text' : 'password'}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Password'
          />
          {renderShowHidePassword()}
        </div>
        <div className='relative mb-8'>
          <RiLockFill className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
          <input
            type={isShowPassword ? 'text' : 'password'}
            className='py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary'
            placeholder='Confirm Password'
          />
          {renderShowHidePassword()}
        </div>
        <div>
          <button
            type='submit'
            className='bg-primary/80 text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-black transition-colors'>
            Registrarme
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
      </div>
    </div>
  );
};
