import React from 'react'
import { Search } from '../../Component/Search/Search'

import QuestionCard from './QuestionCard'
import { Box } from '@mui/material'

export const Forum = () => {
  return (
    <div>
      <Search/>
      <Box sx={{padding:'50px'}}>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      </Box>
    
      
      
      
      
      
    </div>
  )
}
