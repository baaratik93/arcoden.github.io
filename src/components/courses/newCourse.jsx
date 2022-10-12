import { Button } from '@chakra-ui/react'
import React from 'react'
import addNew from '../../api/courses/add'

const newCourse = () => {
    const handleSubmit = () => {
         addNew({
            title: "Javascript: les bases",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis libero fugiat fugit sunt deleniti quasi repellendus quaerat, labore soluta, necessitatibus quia praesentium, aspernatur sequi expedita inventore enim dolorem impedit repudiandae.",
            author: "Mamadou Thiam",
            duration:'2h46mn23s',
            videos: [{
                link:"#",
                title:"Introduction au JS",
            },
            {
                link:"#",
                title:"Les variables",
            },
            {
                link:"#",
                title:"Les types",
            },
            {
                link:"#",
                title:"Les entrés sorties",
            }],

            niveau: 1,
            status: 'en cours',
            language: 'Pulaar'
        })
    }
  return <Button onClick={handleSubmit}>Ajouter ce cours</Button>
}

export default newCourse