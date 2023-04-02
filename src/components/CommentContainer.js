import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'

const commentData=[{
    name:'showkath',
    text:'lorem ipsum not found oole varj',
    replies:[{
        name:'showkath',
        text:'lorem ipsum not found oole varj',
        replies:[
    
        ]
}]
},{

    name:'showkath',
    text:'lorem ipsum not found oole varj',
    replies:[{
        name:'showkath',
        text:'lorem ipsum not found oole varj',
        replies:[{
            name:'showkath',
            text:'lorem ipsum not found oole varj',
            replies:[{
                name:'showkath',
                text:'lorem ipsum not found oole varj',
                replies:[
            
                ],
            }
        
            ],
        }]
        
    }

    ]
},{

    name:'showkath',
    text:'lorem ipsum not found oole varj',
    replies:[{
        name:'showkath',
        text:'lorem ipsum not found oole varj',
        replies:[{
            name:'showkath',
            text:'lorem ipsum not found oole varj',
            replies:[{
                name:'showkath',
                text:'lorem ipsum not found oole varj',
                replies:[
            
                ]},
            {
                 name:'showkath',
                text:'lorem ipsum not found oole varj',
                replies:[
            
                ],
            }
        
            ],
        }
    
        ],
    }

    ]}
]


export default function CommentContainer() {
  return (
    <div className='m-5 p-2' >
        <h1 className='font-bold text-2xl'>Comments</h1>
        <CommentList comments={commentData} />
        </div>
  )
}
