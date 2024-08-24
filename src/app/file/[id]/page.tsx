import React from 'react'
export const runtime = 'edge';
const File = ({ params }: { params: { id: string } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default File