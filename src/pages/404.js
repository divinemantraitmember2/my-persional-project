import * as React from 'react'
import Image from 'next/image'
 
const NotFound = () => {
  return (
     <div className="flex items-center">
      <Image
      src="/images/404.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
     </div>
  )
}

export default NotFound;