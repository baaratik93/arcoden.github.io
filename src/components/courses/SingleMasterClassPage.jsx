import React from 'react'
import { useParams } from 'react-router-dom'
const SingleMasterClassPage = () => {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default SingleMasterClassPage

