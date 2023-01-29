import React from 'react'
import { Box, Button } from '@mui/material'
import code from '../../assets/codeImg.jpg'

export const ProjectCard = () => {
  return (
    <>
        
            <Box component={'a'} >
                <Box component={'div'} sx={{position: 'relative', backgroundImage: `url(${code})`, height: 350, backgroundSize: 'cover', borderRadius: 5, cursor: 'pointer'}}>
                    <Box component={'div'} sx={{position: 'absolute', left: '10%', bottom: 38}} >
                        <p style={{fontSize: '2rem', lineHeight: 'normal', fontWeight: 900, letterSpacing: '-0.83px', marginTop: '30px'}}>Project Name</p>
                        <p style={{fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.83px', marginTop: '20px'}}>Project Category</p>
                        <p style={{fontSize: '14px', marginTop: '20px', borderBottom: '1px solid #ffffff', color: '#ffffff', letterSpacing: 0,textAlign: 'center', fontWeight: 300, display: 'inline-block',}}>View Project</p>
                    </Box>
                </Box>
            </Box>
            
    </>
  )
}
