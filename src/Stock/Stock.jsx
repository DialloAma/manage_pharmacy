import { styled } from '@mui/material'
import React from 'react'

const Container = styled('div')(({ theme }) => ({
    padding: '20px',
  
    [theme.breakpoints.up('md')]: {
      marginLeft: '250px',
    },
  }))
const Stock = () => {
  return (
    <Container>
      
    </Container>
  )
}

export default Stock
