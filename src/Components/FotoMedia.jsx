import React from 'react'
import logo from '../logo.svg'

export default class PhotoMedia extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center judul">{this.props.title}</h1>
                <div className="gallery">
                    {this.props.cout.map(e => {
                        return (
                            <div className='img' key={e}>
                                <img src={logo} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}