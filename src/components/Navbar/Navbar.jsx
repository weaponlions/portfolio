import React,{ useState } from 'react'
import { Box } from '@mui/material'
import './NavbarStyle.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import resume from '../../assets/resume.pdf'

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const btnHover = (theme)=>({ 
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
              [theme.breakpoints.up(400)]: {
                display: 'none',
              }
             })} width={'40px'} id='navbarBtn' onClick={()=> setOpenNav((prev)=> !prev)}>
                <Box component={'div'} id={openNav ? 'row1': 'a'} className='lines' ></Box>
                <Box component={'div'} id={openNav ? 'row2': 'b'} className='lines' ></Box>
                <Box component={'div'} id={openNav ? 'row3': 'c'} className='lines' ></Box> 
             </Box>
        </Box>

        <Box maxWidth={'true'} sx={(theme)=>({
          [theme.breakpoints.up(400)]: {
            left: 0,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            top: 0,
            zIndex: 100,
            height: '2%',
            width: '80%',
            left: '40%', 
          }
        })} component={'div'} className={openNav ? 'navBoxOpen navBox': 'navBox'}>
 
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <Link to={'/'} className='navLink' onClick={()=> setOpenNav(false)} >HOME</Link>
          </Box>
          <Box variant='contained' sx={btnHover} className={'navFocus'} >
            <Link to={'/projects'} className='navLink' onClick={()=> setOpenNav(false)} >PROJECTS</Link>
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
