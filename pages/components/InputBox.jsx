import React from 'react'

const InputBox = (props) => {
    const {placeholder} = props
    const {errors} = props
  return (
    <div className='flex mt-4 items-center justify-center'>
        <label className=' w-1/4' htmlFor={props.htmlFor}>{props.title}</label>
        <input className=' w-full border-2 p-2 rounded-xl border-black' {...props.register(props.htmlFor ,{pattern:props.pattern} )}   type={props.type} placeholder={placeholder}

         />
         {/* {errors && <p>{errors} is required</p>} */}
    </div>
  )
}

export default InputBox