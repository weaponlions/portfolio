import React from 'react'
import { Box, Button } from '@mui/material' 
import { Skillcard } from './Skillcard'
import { Footer } from '../Footer/Footer'
import { ProjectCard } from '../Projects/ProjectCard'
import { Link } from 'react-router-dom'
import OBJECTS from '../../assets/OBJECTS.svg'
import mern from '../../assets/mern.png'
import project1 from '../../assets/project1.png'
import project3 from '../../assets/project3.png'

export const Home = () => { 
  return (
    <>
        <Box maxWidth={'xl'} component={'div'} sx={{marginTop: '5rem'}}>
            <Box component={'div'} sx={(theme)=>({
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column-reverse',
                [theme.breakpoints.up(400)] : {
                    flexDirection: 'row'
                }
            })} >
                <Box component={'div'} sx={(theme) => ({
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    margin: '1rem', 
                    lineHeight: '1.9rem', 
                    letterSpacing: '1px', 
                    [theme.breakpoints.up(400)]: {
                            fontSize: '2rem',
                            lineHeight: '3rem',
                        }
                    })}>
                    <Box component={'div'} sx={(theme)=>({
                        marginBottom: '1rem',
                        color: '#6a6a6a', 
                    })}>
                        I am__
                    </Box>
                    Developer - One Name. One Legend.
                    <br />
                    I Feel Like Developer Tonight.
                    <br />
                    Stop! This Developer Is Not Ready Yet!
                    <br />
                    Software Works Like Magic.
                    <br />
                    <Button variant='contained' style={{ borderRadius: 35, backgroundColor: "white", padding: "18px 46px", color: 'black', margin: '1rem', marginTop: '1.4rem' }} sx={(theme)=> ({
                        fontSize: "1rem", 
                        [theme.breakpoints.up(400)]: {
                            fontSize: '1.5rem', 
                        }
                    })}>
                        <a style={{textDecoration: 'none', color: 'black', marginLeft: '0.5rem'}} href="mailto:harshsaini8285@gmail.com">Contact Me</a> 
                    </Button>
                </Box>
                <Box component="img" alt="Logo" src={OBJECTS} sx={(theme)=>({
                    width: '100%', 
                    margin: 0,
                    padding: 0, 
                })} /> 
            </Box>

            <Box component={'div'} maxWidth={'xl'} sx={(theme) => ({
                textAlign: 'left',
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginTop: '10rem',
                [theme.breakpoints.up(400)]: {
                    fontSize: '2.5rem', 
                    textAlign: 'center'
                }
                })}>
                <Box component={'p'} >
                    I worked with some cool Technologies...
                </Box>
                <Box component={'p'} sx={(theme) => ({
                    textAlign: 'left', 
                    fontSize: '1.2rem', 
                    fontWeight: '500',
                    [theme.breakpoints.up(400)]: {
                        fontSize: '1.7rem', 
                        textAlign: 'center'
                    }
                    })} > 
                        It keeps going… and going… and going 
                </Box>
            </Box>

            <Box component={'div'} sx={(theme)=> ({
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                position: 'relative',
                [theme.breakpoints.up(400)] : {
                    flexDirection: 'row',
                    alignItems: 'center'
                }
            })}>

                <Skillcard />
                
                <Box component="img" alt="Logo" src={mern} sx={(theme)=>({
                    [theme.breakpoints.up(400)] : {
                        width: '50%',
                        height: '50%',
                    }
                })} /> 
            </Box>

            <Box component={'div'} maxWidth={'xl'}>
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
                        }
                    })}>
                        <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                            width: '350px',
                            marginY: '1rem',
                            [theme.breakpoints.up(400)]: {
                                marginX: '1rem',
                                width: '450px',
                                overflow: 'hidden',
                                marginTop: '10rem', 
                                marginBottom: '10rem'
                            },
                        })} >
                        <ProjectCard img={""} link={"https://github.com/weaponlions/social-memories.git"} title={"Social Memories"} category={"Social Media"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                            width: '350px',
                            marginY: '1rem',
                            [theme.breakpoints.up(400)]: {
                                marginX: '1rem',
                                width: '450px',
                                overflow: 'hidden', 
                                marginBottom: '10rem'
                            },
                        })} >
                        <ProjectCard img={""} link={"https://github.com/weaponlions/React-Todo-App.git"} title={"React Todo App"} category={"Notes"} /> 
                    </Box> 
                    <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
                            width: '350px',
                            marginY: '1rem',
                            [theme.breakpoints.up(400)]: {
                                marginX: '1rem',
                                width: '450px',
                                overflow: 'hidden',
                                marginTop: '15rem', 
                                marginBottom: '10rem'
                            },
                        })} >
                        <ProjectCard img={project3} link={"https://github.com/weaponlions/newsfetch.git"} title={"News Fetcher"} category={"News Api"} /> 
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
                        marginTop: '-15rem'
                    }
                    })}>
                    <Link to={'/project'} style={{textDecoration: 'none', color: 'black', marginLeft: '0.5rem', borderBottom: '2px solid black', lineHeight: 1}} >View More</Link>
                </Button>
            </Box>

            <Footer />
        </Box>
    </>
  )
}
