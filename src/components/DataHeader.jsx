import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
function DataHeader() {
  return (
    <div className='h-5 w-full flex justify-between px-5 py-10 border-gray-500 border-b'>
        <div className='text-2xl'>      
                My Drive
            <ArrowDropDownIcon/>
        </div>
        <div className=''>
            <FormatListBulletedIcon style={{fontSize:"30px"}}/>
            <InfoOutlineIcon style={{padding:"3px",fontSize:"35px"}}/>
        </div>
    </div>
  )
}

export default DataHeader