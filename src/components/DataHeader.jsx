import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function DataHeader() {
  return (
    <div className='h-5 w-full'>
      <div className=' flex justify-between px-5 py-3'>
        <div className='text-2xl'>      
                My Drive
            <ArrowDropDownIcon/>
        </div>
        <div className=''>
            <FormatListBulletedIcon style={{fontSize:"30px"}}/>
            <InfoOutlineIcon style={{padding:"3px",fontSize:"35px"}}/>
        </div>
        
    </div>
    <div className='grid grid-cols-4 p-4 font-semibold pl-19'>
              <div className='flex flex-col items-center'>
                <InsertDriveFileIcon style={{fontSize:"70px",color:"gray"}}/>
                <p>My File</p>
              </div>
              <div className='flex flex-col items-center'>
                <InsertDriveFileIcon style={{fontSize:"70px",color:"gray"}}/>
                <p>My File</p>
              </div>
              <div className='flex flex-col items-center'>
                <InsertDriveFileIcon style={{fontSize:"70px",color:"gray"}}/>
                <p>My File</p>
              </div>
              <div className='flex flex-col items-center'>
                <InsertDriveFileIcon style={{fontSize:"70px",color:"gray"}}/>
                <p>My File</p>
              </div>
    </div>
    <div>
          <div className='grid grid-cols-4 p-2 font-semibold border-b border-gray-400'>
              <div className='flex flex-col items-center'>Name</div>
              <div className='flex flex-col items-center'>Owner</div>
              <div className='flex flex-col items-center'>Date</div>
              <div className='flex flex-col items-center'>File Size</div>
          </div>
    </div>
    </div>
  )
}

export default DataHeader