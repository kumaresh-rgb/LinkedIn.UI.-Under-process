import React from 'react'
import '../css-compo/header-option.css'



function HeaderOption({IconAvatar,title,Icon}){
  return (
      <div className="All-Icon">{Icon}
      <div className="All-title">{title} </div>
     <avatar className="avatar">{IconAvatar} </avatar>

     </div>
     
      
    
  )
}

export default HeaderOption