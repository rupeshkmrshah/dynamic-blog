import React from 'react'
import { Circles } from 'react-loader-spinner'

function LoadingBlogPosts() {
  return (
        <Circles 
        height="100" 
        width="100" 
        color="#4fa94d" 
        ariaLabel="circles-loading" 
        wrapperStyle={{dislay: 'flex', justifyContent: 'center', alignItems: 'center'}} 
        wrapperClass="" 
        visible={true}
        />
  )
}

export default LoadingBlogPosts;