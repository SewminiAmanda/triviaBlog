import React from 'react'
import  './styles.css';
import { Box, Typography } from '@mui/material';



export const QuestionCard = () => {
  return (
    <Box className='cardBox'>
    <Box sx={{  display: 'flex', flex: 1,marginBottom:'15px' }}>
        <Box className='proPicFrame'>
           <img src={require('../Forum/Assets/OIP.jpeg')} className='proImg'/>
        </Box>
        <Box >
            <Typography sx={{fontSize:20,fontWeight :'bold',color:' #101318'}}>
                    What is Auduino?</Typography>

            <Box sx={{  display: 'flex', flex: 1, }}>

                <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597' , marginRight:'15px'}}>Shaveen Amarasinghe</Typography>
                <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597'}}>23 Hours ago</Typography>

            </Box>
        </Box>
    </Box>

    <Box sx={{ marginBottom:'15px'}}>
       <Typography sx={{ fontSize:16,fontWeight:'400',color:'#5C677D'}}>So you might have heard about Arduino from your friends at school or on the internet, it seemed quite exciting, but you don’t know where to start, fret not as...</Typography>
    </Box>

    <Box sx={{display:'flex', flex:1,}}>
        <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597', marginRight:'15px'}}>
        45 Views
        </Typography>


        <Typography sx={{fontSize:14 , fontWeight:'400', color: '#7E8597'}}>
        5 Replies
        </Typography>
    </Box>
</Box>
  )
}

export default QuestionCard
