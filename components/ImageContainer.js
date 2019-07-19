import React from 'react';

export const ImageContainer = ({ src, height, width, link, linkTitle, isInline, creditLink, creditText}) => {
    const linkStyle = {
        fontSize: '40px',
        textDecoration: 'none',
        color: '#000',
        padding: '20px 0 0 50px'
    };

    const creditLinkStyle= {
      fontSize: '12px',
      textDecoration: 'none',
      color: 'grey',
      padding: '20px 0 0 50px',
      position: 'absolute',
      bottom: '5%',
      right: '0',
      fontFamily: 'inherit'
    }
    return (<div style={isInline ? {display: 'flex', alignItems: 'center'} : {position: 'relative'}}>
        <img src={`${src}`}
            style = {{'height': `${height}`, 'width': `${width}`}}
        />
      {creditLink ? <a href={`${creditLink}`} target="_blank" style={creditLinkStyle}>{creditText}</a> : null}
        {link ? <a href={`${link}`} target="_blank" style={linkStyle}>{linkTitle}</a> : null}
    </div>)
}