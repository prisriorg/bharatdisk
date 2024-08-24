import React from 'react'
const File = ({ params }: { params: { id: string } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default File