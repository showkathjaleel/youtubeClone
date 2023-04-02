import React from 'react'
import Comment from './Comment'

export default function CommentList({ comments }) {
    return  comments.map((cmt,index)=>(
        <div>
        <Comment key={index} data={cmt} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList comments={cmt.replies}/>
        </div>
        </div>
        ))
}
