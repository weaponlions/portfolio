import React,{useLayoutEffect} from 'react'
import { Box, Button } from '@mui/material'
import { Footer } from '../Footer/Footer'
import { ProjectCard } from './ProjectCard' 
import project1 from '../../assets/project1.png'
import project3 from '../../assets/project3.png'

export const Projects = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const st = (theme)=>({
        marginY: '1rem', 
        width: '350px',
        [theme.breakpoints.up(400)]: {
            marginX: '1rem',
            width: '450px',
            overflow: 'hidden', 
        },
    })
  return (
    <>
        <Box component={'div'} maxWidth={'xl'}>
            
        <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
          marginBottom: '10rem'
        })}>
                <Box component={'div'} sx={(theme) => ({
                    fontSize: '3rem', 
                    lineHeight: 'normal', 
                    fontWeight: 900, 
                    letterSpacing: '-0.83px', 
                    margin: '3rem 1rem 3rem 1rem', 
                    [theme.breakpoints.up(400)]: { 
                        textAlign: 'center', 
                    } 
                })} > 
                    <u> PROJECTS </u>
                </Box>
                    <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                        display: 'flex',
                        flexDirection: 'column',
                        [theme.breakpoints.up(400)]: { 
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap'
                        }
                    })}>
                    <Box component={'div'} maxWidth={'xl'} sx={st}>
                        <ProjectCard img={""} link={"https://github.com/weaponlions/social-memories.git"} title={"Social Memories"} category={"Frontend"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={st}>
                        <ProjectCard img={project3} link={"https://github.com/weaponlions/social-memories-backend.git"} title={"Social Memories"} category={"Backend"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={st}>
                        <ProjectCard img={""} link={"https://github.com/weaponlions/React-Todo-App.git"} title={"React Todo App"} category={"Frontend"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={st}>
                        <ProjectCard img={""} link={"https://github.com/weaponlions/Django-Todo-Backend.git"} title={"React Todo App"} category={"Backend"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={st}>
                        <ProjectCard img={project3} link={"https://github.com/weaponlions/newsfetch.git"} title={"News Fetcher"} category={"News Api"} /> 
                    </Box>  
                </Box> 
            </Box>

          <Footer />
        </Box>
    </>
  )
}
