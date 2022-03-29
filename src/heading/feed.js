import React,{useState} from 'react'
import '../css-compo/feed.css'
import Avatar from '@mui/material/Avatar';
import FeedOption from '../heading/FeedOption'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Profilepost from '../heading/profilepost';
import Automateprofile from '../heading/automate-profile'



function Feed() {

  return (
    <div className="Type">
        <div className="face">
         <Avatar className="Avatar" src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-1-2--v1.png"  sx={{width:45,height:45,align:"left"}}/> 
         <div className="post">
             <input type="summit" placeholder='&nbsp;&nbsp;Start a Post' />
               <button  type="summit">send</button> </div>
               <div className="option">
               <FeedOption Icon={<PhotoSizeSelectActualIcon style={{color:"70b5f9"}}/>} title="Photo" />
               <FeedOption Icon={<VideoCameraBackIcon style={{color:'7fc15e'}}/>} title="Video"/>
               <FeedOption Icon={<EventIcon style={{color:'e7a33e'}}/>} title="Event"/>
               <FeedOption Icon={<NewspaperIcon style={{color:'fc9295'}}/>}title="Write article"/>
               </div>
               </div>
                <Profilepost />

               
               <Automateprofile />
        </div>
  )
}

export default Feed