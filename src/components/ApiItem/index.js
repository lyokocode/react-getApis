import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import "./api.scss"

const ApiItem = ({ api, toogleBookmark }) => {
    return (
        <aside className='apiItem'>
            <div className='itemIcon'>
                <img src={api.icon} alt={api.name} />
            </div>
            <div className='itemDetail'>
                <h4>{api.name}</h4>
                <div className='itemCategory'>{api.category}</div>
                <div className='itemDescription'>{api.description}</div>
            </div>
            <div className='itemHover'>
                <button onClick={() => toogleBookmark(api.id)}>
                    {
                        api.bookmark ? <BsBookmarkFill /> : <BsBookmark />
                    }
                    Bookmark
                </button>
                <a href={api.docs_url} target="blank">
                    API Docs
                    <RiArrowRightSLine />
                </a>
            </div>
        </aside>
    )
}

export default ApiItem