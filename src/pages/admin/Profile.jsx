import React from 'react';
import { RiEdit2Line, RiShieldCheckLine } from 'react-icons/ri';

export const Profile = () => {
  return (
    <>
      {/* User profile info */}
      <div className='bg-secondary-100 p-8 rounded-xl mb-10'>
        <h1 className='text-xl text-gray-100'>User profile info</h1>
        <hr className='my-8 border-gray-500/30' />
        <form>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Avatar</p>
            </div>
            <div className='flex-1'>
              <div className='relative w-auto inline-block mb-2'>
                <img
                  src='https://img.freepik.com/foto-gratis/retrato-joven-satisfecho-celebrando-exito_171337-10186.jpg'
                  className='w-28 h-28 object-cover rounded-lg'
                />
                <label
                  htmlFor='avatar'
                  className='absolute bg-secondary-900 p-2 rounded-full hover:cursor-pointer -top-4 -right-4 hover:border hover:border-primary hover:p-[7px] transition-colors'>
                  <RiEdit2Line />
                </label>
                <input type='file' id='avatar' className='hidden' />
              </div>
              <p className='text-gray-500 text-sm'>
                Allowed file types: png, jpg, jpeg
              </p>
            </div>
          </div>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>
                Full name <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1 flex items-center gap-4'>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                  placeholder='Name'
                />
              </div>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                  placeholder='Lastname'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>
                Company <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1'>
              <input
                type='text'
                className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                placeholder='Company'
              />
            </div>
          </div>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>
                Email <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1'>
              <input
                type='text'
                className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>
                Telephone <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1'>
              <input
                type='text'
                className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
                placeholder='Telephone'
              />
            </div>
          </div>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>
                Country <span className='text-red-500'>*</span>
              </p>
            </div>
            <div className='flex-1'>
              <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'>
                <option value='AR' selected>
                  Argentina
                </option>
                <option value='MX'>México</option>
                <option value='BR'>Brasil</option>
                <option value='CO'>Colombia</option>
                <option value='ES'>España</option>
              </select>
            </div>
          </div>
        </form>
        <hr className='my-8 border-gray-500/30' />
        <div className='flex justify-end'>
          <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
            Save changes
          </button>
        </div>
      </div>
      {/* Change Password */}
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <h1 className='text-xl text-gray-100'>Auth Settings</h1>
        <hr className='my-8 border-gray-500/30' />
        <form>
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-gray-100 text-xl mb-1'>Email Adress</h5>
              <p className='text-gray-500 text-sm'>pmpeloc@gmail.com</p>
            </div>
            <div>
              <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors hover:border hover:border-primary hover:px-[15px] hover:py-[11px]'>
                Change email
              </button>
            </div>
          </div>
          <hr className='my-8 border-gray-500/30 border-dashed' />
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-gray-100 text-xl mb-1'>Password</h5>
              <p className='text-gray-500 text-sm'>****************</p>
            </div>
            <div>
              <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors hover:border hover:border-primary hover:px-[15px] hover:py-[11px]'>
                Change password
              </button>
            </div>
          </div>
        </form>
        <div>
          <div>
            <RiShieldCheckLine />
          </div>
        </div>
      </div>
    </>
  );
};
