import React from 'react'
import { Box, Button } from '@mui/material'
import { Footer } from '../Footer/Footer'
import { ProjectCard } from './ProjectCard'
import { Link } from 'react-router-dom'

export const Projects = () => {
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
                        justifyContent: 'space-between',
                        }
                    })}>
                        <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                        marginY: '1rem', 
                        width: '350px',
                        [theme.breakpoints.up(400)]: {
                            width: '480px',
                            overflow: 'hidden',
                        }
                    })}>
                        <ProjectCard /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                        marginY: '1rem', 
                        width: '350px',
                        [theme.breakpoints.up(400)]: {
                            width: '480px',
                            overflow: 'hidden'
                        }
                    })}>
                        <ProjectCard /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                        marginY: '1rem', 
                        width: '350px',
                        [theme.breakpoints.up(400)]: {
                            width: '480px',
                            overflow: 'hidden',
                        }
                    })}>
                        <ProjectCard /> 
                    </Box> 
                </Box>
                <Button variant='contained' sx={(theme)=>({ 
                    borderRadius: 35, 
                    backgroundColor: "white", 
                    fontSize: "18px", 
                    color: 'black', 
                    margin: '0.5rem', 
                    padding: '1rem',
                    [theme.breakpoints.up(400)]: {
                        display: 'flex',
                        justifyContent: 'center',
                        marginX: 'auto', 
                    }
                    })}>
                    <Link to={'/projects'} style={{textDecoration: 'none', color: 'black', marginLeft: '0.5rem', borderBottom: '2px solid black', lineHeight: 1}} >View More</Link>
                </Button>
            </Box>

          <Footer />
        </Box>
    </>
  )
}
