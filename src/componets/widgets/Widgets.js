import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualrecordicon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article'>
            <div className="widgets-article-left">
                <FiberManualrecordicon />
            </div>
            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
           {newsArticle("React JS is back","Top news - 9.9k reads")}
           {newsArticle("Bengaluru not hiring","Sad news - 2k reads")}
           {newsArticle("MNC's paying the least","Bad news - 4.6k reads")}
           {newsArticle("Corona again on rise","Scary news -12.6k reads")}


        </div>
    )
}

export default Widgets