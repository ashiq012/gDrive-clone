import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function SideNav() {
    const value = 60;
  return (
    <div className='bg-[#F8FAFD] h-full w-60 position-relative p-10'>
        <div className='shadow-xl border-b h-full w-30 rounded-xl py-2 px-3 flex items-center justify-content-center'>
            <AddIcon style={{fontSize:"25px"}}/>
            <button className='font-semibold text-lg pl-2'>New</button>
        </div>
        <div className='mt-4 space-y-1.5'>
            <div>
                <HomeIcon/>
                <span>Home</span>
            </div>
            <div>
                <AddToDriveIcon/>
                <span>My Drive</span>
            </div>
            <div>
                <DevicesIcon/>
                <span>Computers</span>
            </div>
            <div>
                <PeopleAltIcon/>
                <span>Shared with me</span>
            </div>
            <div>
                <AccessTimeIcon/>
                <span>Recent</span>
            </div>
            <div>
                <StarBorderIcon/>
                <span>Starred</span>
            </div>
            <div>
                <ErrorIcon/>
                <span>Spam</span>
            </div>
            <div>
                <DeleteOutlineIcon/>
                <span>Trash</span>
            </div>
            <div >
                <CloudQueueIcon/>
                <p> Storage (60% full)</p>
                <div className="w-35 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-orange-500"
                        style={{ width: `${value}%` }}
                    >
                    </div>
                </div>
                <span className='text-gray-800'>9 GB of 15 GB used</span>
            </div>
        </div>
    </div>
  )
}

export default SideNav