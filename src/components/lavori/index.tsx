import * as React from 'react'

export const WorkLinkItem = ({ image, title, link }) => {
    return (
        <div className="grid-item">
            <a href={link}>
                <div className="image-wrapper">{image}</div>
                <div className="caption">{title}</div>
            </a>
        </div>
    )
}
