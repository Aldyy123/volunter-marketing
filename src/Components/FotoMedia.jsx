import React from 'react'

export default class PhotoMedia extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center judul rampart-one" data-aos='fade-down' data-aos-duration='1500'>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}