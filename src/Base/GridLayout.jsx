import React from 'react';

export default function TemplateGrid(props) {
    return(
        <div className='grid-layout' style={{backgroundColor: props.backgroundColor}}>
            <h1 className="text-center judul">{props.title}</h1>
            <p className="text-center subjudul">{props.subtitle}</p>
            {props.children}
        </div>
    )
}