import React from 'react'
import Motive from './motive'
import Avatar from '@mui/material/Avatar';
import '../css-compo/feed.css'
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';


const faker = require('@faker-js/faker');
function Profilepost() {
  return (
    <div className="second-profile">
        <div className="icon-Profile">
        <Avatar className="Avatar" src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-1-2--v1.png"  sx={{width:45,height:45,align:"left"}}/></div>
        <div className="pname">Kumaresh M</div>
        <div className="institute">Jeppiaar institute of technology</div>
        <div className="public">{<PublicIcon/>}</div>
        <div className="description">Message goes here </div> 
       
        </div>
     
  )
}

export default Profilepost;
