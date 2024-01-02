import React from 'react'

interface PhotoSingleProps {
    params: {
        id: number;
    }
}
const PhotoSingle = ({params: {id}}: PhotoSingleProps) => {
  return (
    <div>PhotoSingle {id}</div>
  )
}

export default PhotoSingle