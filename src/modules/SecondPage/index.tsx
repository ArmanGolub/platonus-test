import React from 'react'

type Props = {}

const SecondPage = (props: Props) => {
  return (
    <div className='w-full flex justify-center mt-4'>
      <div className='lg:w-[50%] relative bg-white rounded-md py-4 mt-6 shadow-md px-4 text-xl font-semibold leading-9'>
        About
        <p className='text-gray-600 font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores eum unde enim earum sapiente quis mollitia dicta itaque, eius omnis, libero tempore et optio nemo eligendi quidem sint at.
        </p>
      </div>
    </div>
  )
}

export default SecondPage