import React, {useState} from 'react'
import { Box } from '@mui/material'
import javascript from '../../assets/javascript.svg'
import cplus from '../../assets/cplus.svg'
import php from '../../assets/php.svg'
import html from '../../assets/html.png'
import css from '../../assets/css3.svg'
import express from '../../assets/expressjs.svg'
import github from '../../assets/github.svg'
import mysql from '../../assets/mysql.svg'
import node from '../../assets/nodejs.png'
import react from '../../assets/reactjs.svg'
import python from '../../assets/python.svg'
import django from '../../assets/django.svg'
import bootstrap from '../../assets/bootstrap.png'

export const Skillcard = () => {
    const even = {
        height: '127px',
        width: '127px',
        padding: '10px',
        background: 'rgb(13, 13, 13)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: '5px 2px'
    }
    const odd = {
        height: '127px',
        width: '127px',
        padding: '10px',
        background: 'rgb(13, 13, 13, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: '5px 2px'
    }

    const obj = {
        'javascript': javascript,
        'cplus': cplus,
        'bootstrap': bootstrap,
        'django': django,
        'python': python,
        'react': react,
        'node': node,
        'mysql': mysql,
        'express': express,
        'php': php,
        'css': css,
        'html': html,
        'github': github,
    }
 
    const Card = ({s, e}) => {
        const rows = [];
        let i = 1;
        for(let key in obj){
            if (i >= s && i < e) {
            rows.push(<Box component={'div'} style={i == 1 ? even: i == 10 ? even : i%2 == 0 ? odd : even} key={key} >
                        <Box component={'img'} src={obj[key]} alt={key} loading='lazy' sx={{transition: '2s', height: '100%'}} />
                    </Box> )
            }
            i++;
         }
        return rows;
    }

  return (
    <>
        
        <Box varient={'div'} sx={{display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '10px', transform: 'scale(0.9)'}}>
            <Box component={'div'} sx={{marginTop: '3rem'}}>
                <Card s={1} e={5} />
            </Box>
            <Box component={'div'}>
                <Card s={5} e={10}  />
            </Box>
            <Box component={'div'} sx={{marginTop: '4.5rem'}}>
                <Card s={10} e={14}  />
            </Box> 
        </Box>
    </>
  )
}
