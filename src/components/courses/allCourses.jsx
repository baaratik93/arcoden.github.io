import { Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import courses from '../../api/courses/all'
import SingleMasterClass from '../SingleMasterClass'


const allCourses = () => {
    const [cours, setCours]= useState([])
    async function loadCourses() {
        const data = await courses()
        setCours(data)
    }
    useEffect(()=>{
        loadCourses()
    },[])
  return (
    <SimpleGrid columns={['1','1','2','3']} mx='100px' gap={10}>{
        cours.map(c => {
            return <SingleMasterClass
                body={c.description}
                videos={c.videos} 
                level={c.niveau} 
                author={c.author}
                title={c.title}
                status={c.status}
                language={c.language}/>
        })
    }</SimpleGrid>
  )
}

export default allCourses