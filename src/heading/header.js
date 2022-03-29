import React from 'react'
import '../css-compo/index.css'
import '../css-compo/header-option.css'
import HeaderOption from '../heading/header-left.js'
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';



function App() {

  return (
  <div className="Main__header"> 
    <div className="header__left">
      <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/>
      <div className="SearchIcon-Input">
        <SearchIcon style={{position:"absolute",margin:'23'}}/>
        <div className="Place-Holder">
        <input type="text" placeholder='&emsp;&emsp;search...' />
         <HeaderOption Icon={<HomeRoundedIcon/>} title="HOME"/>
         <HeaderOption Icon={<GroupRoundedIcon/>} title="MYaccount"/>
         <HeaderOption Icon={<WorkRoundedIcon/>} title="jobs"/>
         <HeaderOption Icon={<MessageRoundedIcon/>}title='Message'/>
         <HeaderOption Icon={<NotificationsIcon/>} title='Notification'/>
         <HeaderOption Icon={<WorkRoundedIcon/>} title="jobs"/>
         <HeaderOption className="avatar" Icon={<Avatar src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-1-2--v1.png" sx={{width:30,height:26,display:'flex'}}/>} title='ME'/>
        </div>
      </div>
    </div>
  </div>
  )
}
export default App