import React from 'react';

export const ImageContainer = ({ src, height, width, link, linkTitle, isInline}) => {
    const linkStyle = {
        fontSize: '40px',
        textDecoration: 'none',
        color: '#000',
        padding: '20px 0 0 50px'
    };
    return (<div style={isInline ? {display: 'flex', alignItems: 'center'} : {}}>
        <img src={`${src}`}
            style = {{'height': `${height}`, 'width': `${width}`}}
        />
        {link ? <a href={`${link}`} target="_blank" style={linkStyle}>{linkTitle}</a> : null}
    </div>)
}