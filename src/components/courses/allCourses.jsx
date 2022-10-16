import {Stack,Image, Text, SimpleGrid } from '@chakra-ui/react'
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
    <Stack>
    <Image src="vue.gif" p={100}/>
    <SimpleGrid columns={['1','1','2','3']} p={20} mx='100px' gap={10}>{
        cours.map((c,k) => {
            return <SingleMasterClass
                key={k}
                body={c.description}
                videos={c.videos} 
                level={c.niveau} 
                author={c.author}
                title={c.title}
                status={c.status}
                language={c.language}
                id={c.id}/>
        })
    }</SimpleGrid>
 </Stack>
  )
}

export default allCourses
