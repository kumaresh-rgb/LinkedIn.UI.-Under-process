import React from 'react'
import '../css-compo/sidebar.css'
import Avatar from '@mui/material/Avatar';
import Secondsidebar from '../heading/second-sidebar'
import AddIcon from '@mui/icons-material/Add';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
function Sidebar() {
  return (
  <div className="sidebar">
     <div className="sidebar__top">
         <img className="image" src="" alt="" />
         <Avatar className="Avatar"src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-1-2--v1.png" sx={{width:70,height:56,}}/>
         <div className="name">kumaresh m
         <div className="now">Student at Jeppiaar institute of technology
         <div className="line"><hr></hr></div>
         <div className="connection">
           <div className="v">Connection</div>
           <div className="grow">Grow your network</div>
           </div>
           <div className="line"><hr></hr>
           </div>
           <div className="connection-2">
           <div className="v-2">
             Acess Exculsive tools & insight </div>
           <div className="grow">
             <WorkspacePremiumIcon sx={{width:15,height:15,"&:hover":{color:"blue"}}}/>Try premium for free
             </div>
           <div className="line"><hr></hr></div>
           </div>
           <div className="mywhishlist">
              {<TurnedInIcon sx={{width:15,height:15,"&:hover":{color:"blue"}}}/>}My items
           </div>
          </div>
         </div>
         </div>
         <div className="second">
           <div className="groups">
          <a href="#Groups">  { <Secondsidebar  title="Groups"/>}</a>
          <a href="#Events">  {<Secondsidebar  title="Events"/>}</a>
          <a href="#Hashtags">{<Secondsidebar  title="Followed Hastags"/>}</a>
          <div className="line"><hr></hr></div>
          <div className="discover"><p>Discover More</p></div>
          </div>
          
    
      </div>
  </div>
  )
}

export default Sidebar