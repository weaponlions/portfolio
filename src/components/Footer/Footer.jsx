import React from 'react'
import { Box, Button } from '@mui/material'
import mail from '../../assets/mail.svg'
import logo from '../../assets/brand.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import linkedin from '../../assets/linkedin.svg'
import resume from '../../assets/resume.pdf'

export const Footer = () => {
    const st2 = {
        width: '240px',
        position: 'relative',
        marginTop: '-40px',
        marginBottom: '20px'
    }
    const st1 = (theme)=> ({
        backgroundColor: '#101010',
        borderRadius: '23.3px',
        padding: '1px 45px 46px 10px',
        position: 'relative',
        margin: '0 0 70px',
        marginTop: '8rem',
        [theme.breakpoints.up(400)]: {
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '8rem',
            marginBottom: '8rem',
        }
    })
    const st3={
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        fontSize: '17px',
        fontWeight: '400',
        lineHeight: '1.32',
        minHeight: '54px',
        letterSpacing: '-0.37px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '27px',
        width: '100%',
        padding: '15px 10px',
        marginBottom: '20px',
        resize: 'none',
        color: 'white'
    }
  return (
    <>
    <footer >
        <Box component={'div'} maxWidth={'xl'} sx={st1} >
            <Box component={'div'} sx={(theme)=>({
                 width: '100%'
            })}>
                <Box component={'div'} maxWidth={'xl'}>
                    <Box component={'img'} src={mail} alt='message' sx={st2} />
                    <p style={{lineHeight: '1.45', letterSpacing: '-0.84px', fontSize: '1rem', marginLeft: '1rem'}}>Looking for developer ?</p>
                    <p style={{lineHeight: '1.45', letterSpacing: '-0.84px', fontSize: '2rem', marginLeft: '0.8rem'}}>Contact Me</p>
                </Box>
                <Box component={'div'} > 
                    <form style={st3}>
                        <div className="form-item " style={{position: 'relative', width: '100%', marginRight: '20px'}}>  
                            <p style={{lineHeight: '1.45', letterSpacing: '-0.84px', fontSize: '1rem'}}>Name :- 
                                Harsh Saini
                            </p>
                        </div> 
                        <div className="form-item " style={{position: 'relative', width: '100%', marginRight: '20px'}}>  
                            <p style={{lineHeight: '1.45', letterSpacing: '-0.84px', fontSize: '1rem'}}>Email Me :- 
                                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="mailto:harshsaini8285@gmail.com">harshsaini8285@gmail.com</a> 
                            </p>
                        </div>
                    </form>
                <Button variant='contained' style={{ borderRadius: 35, backgroundColor: "white", padding: "18px 46px", fontSize: "18px", color: 'black', margin: '0.5rem' }}>
                    <a style={{textDecoration: 'none', color: 'black', marginLeft: '0.5rem'}} target={'_blank'} href={resume}>Get Resume</a>
                </Button>
                </Box>
            </Box>
        </Box>
        <Box component={'div'} maxWidth={'xl'} sx={(theme)=>({
            [theme.breakpoints.up(400)]: {
                width: '60%',
                margin: 'auto'
            }
        })} >
            <Box component={'img'} src={logo} alt='logo' width={200} />

            <Box component={'div'} sx={{display: 'flex', justifyContent: 'space-around', marginTop: '2rem', marginBottom: '1.2rem'}} > 

                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="https://github.com/weaponlions" target={'_blank'} >
                    <Box component={'img'} src={github} alt='logo' width={35} />
                </a> 

                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="https://www.linkedin.com/in/harsh-saini-b6168a208" target={'_blank'} >
                    <Box component={'img'} src={linkedin} alt='logo' width={35} />
                </a> 

                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="https://t.me/weaponlion" target={'_blank'} >
                    <Box component={'img'} src={telegram} alt='logo' width={35} />
                </a>  

                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="https://wa.me/918433480253" target={'_blank'} >
                    <Box component={'img'} src={whatsapp} alt='logo' width={35} />
                </a> 

                <a style={{textDecoration: 'none', color: 'white', marginLeft: '0.5rem'}} href="https://www.instagram.com/invites/contact/?i=fyac0ylxop3d&utm_content=3acqht9" target={'_blank'} >
                    <Box component={'img'} src={instagram} alt='logo' width={35} />
                </a> 
                 
            </Box>
        </Box>
    </footer>
    </>
  )
} 