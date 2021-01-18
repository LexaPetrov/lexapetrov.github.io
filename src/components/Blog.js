import React from 'react'

import {data} from '../utils/yt'
import BlogItem from './BlogItem'

export default props => {
    let items = data.items

    return (
        <div className='blog__wrapper'>
            {
                items.map((v,k) => {

                    return (
                        <div key={k}>
                            <BlogItem 
                                videoId={v.id.videoId}
                                publishTime={v.snippet.publishTime}
                                title={v.snippet.title}
                                img={v.snippet.thumbnails.high.url}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}