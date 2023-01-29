import React,{ useState } from 'react'
import { Box } from '@mui/material'
import './NavbarStyle.css'
import logo from '../../assets/brand.svg'
import { Link } from 'react-router-dom'
import resume from '../../assets/resume.pdf'

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const btnHover = (theme)=>({ 
       [theme.breakpoints.up('lg')]: {
        fontSize: '22px',
        margin: '1rem 1rem', 
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
        margin: '1rem 1rem', 
      }, 
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
        margin: '1rem 1rem', 
      },
      
      '&:hover': {
          paddingX: '1rem',
          backgroundColor: 'white',
          transition: '1s', 
       },
      })
      
    const st = { borderRadius: 35, backgroundColor: "white", padding: "18px 36px", fontSize: "18px", color: 'black', margin: '0.5rem', width: '50%', variant:'contained' }
  return (
    <>
        <Box maxWidth={'xl'} component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
             <div> 
              <Link to={'/'} className='navLink' onClick={()=> setOpenNav(false)} >
                <Box component="img" sx={{ height: 100, width: 200, maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, }} alt="Logo" src={logo} />
              </Link>
             </div>
             <Box component={'div'} sx={(theme)=>({
              [theme.breakpoints.up(600)]: {
                display: 'none',
              }
             })} width={'40px'} id='navbarBtn' onClick={()=> setOpenNav((prev)=> !prev)}>
                <Box component={'div'} id={openNav ? 'row1': 'a'} className='lines' ></Box>
                <Box component={'div'} id={openNav ? 'row2': 'b'} className='lines' ></Box>
                <Box component={'div'} id={openNav ? 'row3': 'c'} className='lines' ></Box> 
             </Box>
        </Box>

        <Box maxWidth={750} width={750}  className={openNav ? 'navBoxOpen navBox': 'navBox'} sx={(theme)=>({
            justifyContent: 'flex-start',
            top: '6rem',
            overflow: 'hidden',
            [theme.breakpoints.up('sm')]: { 
              position: 'absolute',
              flexDirection: 'row',
              zIndex: 100,
              backgroundColor: 'transparent', 
              height: '1rem',
              top: '1rem',
              width: '750px',
              left: '40%'
            },
          [theme.breakpoints.up('md')]: { 
            position: 'absolute',
            flexDirection: 'row',
            zIndex: 100,
            backgroundColor: 'transparent', 
            height: '1rem',
            top: '1rem',
            width: '750px',
          },
          [theme.breakpoints.up('lg')]: { 
            position: 'absolute',
            flexDirection: 'row',
            zIndex: 100,
            backgroundColor: 'transparent', 
            height: '1rem',
          },
          root:{
            left: '20%',
            width: '750px', 
          }
           
        })} component={'div'} >
 
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <Link to={'/'} className='navLink' onClick={()=> setOpenNav(false)} >HOME</Link>
          </Box>
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <Link to={'/project'} className='navLink' onClick={()=> setOpenNav(false)} >PROJECTS</Link>
          </Box>
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <a className='navLink'  href="mailto:harshsaini8285@gmail.com">CONTACT </a>
          </Box>
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <a className='navLink' target={'_blank'} onClick={()=> setOpenNav(false)} href={resume}>Get Resume</a>
          </Box> 
        </Box>
    </>
  )
}
