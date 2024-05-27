import React from 'react'

const InputBox = (props) => {
    const {placeholder,style} = props
    const {errors} = props
  return (
    <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  mt-4 sm:items-center sm:justify-center'>
        <label className=' w-1/4' htmlFor={props.htmlFor}>{props.title}</label>
        <input className=' w-full border-2 p-2 bg-black rounded-xl border-gray-600' {...props.register(props.htmlFor ,{pattern:props.pattern} )}   type={props.type} placeholder={placeholder}

         />
         {/* {errors && <p>{errors} is required</p>} */}
    </div>
  )
}

export default InputBox