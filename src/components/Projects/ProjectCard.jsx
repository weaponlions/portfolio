import React from 'react'
import { Box, Button } from '@mui/material'
import code from '../../assets/codeImg.jpg'

export const ProjectCard = ({img, title, category, link}) => {
  return (
    <>
        
            <Box component={'a'} >
                <Box component={'div'} sx={{
                  position: 'relative', 
                  backgroundImage: `url(${img || code})`, 
                  height: 350, 
                  backgroundSize: 'cover', 
                  borderRadius: 5, 
                  cursor: 'pointer',
                  border: '1px solid white',
               }}>
                    <Box component={'div'} sx={{position: 'absolute', left: '10%', bottom: 38}} >
                        <Box component={'p'} style={{fontSize: '2rem', lineHeight: 'normal', fontWeight: 900, letterSpacing: '-0.83px', marginTop: '30px'}}>{title}</Box>
                        <Box component={'p'} style={{fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.83px', marginTop: '-15px'}}>{category}</Box>
                        <Box component={'p'} sx={{':hover': {opacity: '0.7'}}} style={{fontSize: '14px', marginTop: '20px', borderBottom: '1px solid #ffffff', color: '#ffffff', letterSpacing: 0,textAlign: 'center', fontWeight: 300, display: 'inline-block',}}>
                          <a  style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} target={'_blank'}  href={link}>View Code</a>
                        </Box>
                    </Box>
                </Box>
            </Box>
            
    </>
  )
}
