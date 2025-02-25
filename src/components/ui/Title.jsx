import React from 'react'

const Title = ({title}) => {
  return (
    <h1 className=" font-poppins-semibold text-4xl lg:text-5xl text-center md:text-left leading-tight lg:leading-tight tracking-normal md:tracking-wide dark:text-gray-200">
    {title}
  </h1>
  )
}

export default Title
