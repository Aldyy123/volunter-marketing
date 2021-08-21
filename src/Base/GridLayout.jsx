import React from 'react';

export default function TemplateGrid(props) {
    return(
        <div className='grid-layout' style={{backgroundColor: props.backgroundColor}}>
            <h1 data-aos='fade-down' data-aos-duration='1500' className="text-center judul rampart-one">{props.title}</h1>
            <p data-aos='fade-down' data-aos-duration='1500' className="text-center subjudul coda">{props.subtitle}</p>
            {props.children}
        </div>
    )
}