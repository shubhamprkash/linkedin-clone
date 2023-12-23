import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from '../inputOption/InputOption.js'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import  ChatOutlinedIcon  from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import  SendOutlinedIcon from '@material-ui/icons/SendOutlined';


function Post({name, description, message, photoUrl}) {


  return (
    <div className='post'>
    
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_btns">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title={"Like"} color={"gray"}/>
            <InputOption Icon={ChatOutlinedIcon} title={"Comment"} color={"gray"}/>
            <InputOption Icon={ShareOutlinedIcon} title={"Share"} color={"gray"}/>
            <InputOption Icon={SendOutlinedIcon} title={"Send"} color={"gray"}/>
        
        </div>
    </div>
  )
}

export default Post