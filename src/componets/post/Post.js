import React , {forwardRef, useState} from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from '../inputOption/InputOption.js'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import  ChatOutlinedIcon  from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import  SendOutlinedIcon from '@material-ui/icons/SendOutlined';



const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

    const [btnColor, setbtnColor] = useState("gray");
    // function to change the icon color on click event
    const handleButtonClick = () => {
        setbtnColor("blue");
    };


  return (
    <div ref={ref} className='post'>
    
        <div className="post_header">
            <Avatar src={photoUrl} >{name[0]} </Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_btns">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title={"Like"} color={btnColor} onClick={handleButtonClick} />
            <InputOption Icon={ChatOutlinedIcon} title={"Comment"} color={btnColor}/>
            <InputOption Icon={ShareOutlinedIcon} title={"Share"} color={btnColor}/>
            <InputOption Icon={SendOutlinedIcon} title={"Send"} color={btnColor}/>
        
        </div>
    </div>
  )
})

export default Post