import React from 'react'

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = () => {
  return (
    <>
      <Stack spacing={1}>
      
      <Skeleton variant="rectangular" animation='wave' width={'21rem'} height={'200'}  className='rounded'/>
      <div className='d flex justify-content-between'>
        <Skeleton variant='text' animation='wave'/>

      </div>
    </Stack>
    </>
  )
}

export default Set