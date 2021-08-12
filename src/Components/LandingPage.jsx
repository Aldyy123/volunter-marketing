import logo from '../assets/LOGO.png';
import { Component } from 'react'
import Countdown from 'react-countdown'
import TimeCout, { timeEvents } from '../Base/TimeCout'

export default class LandingPage extends Component {

    render() {
        return (
            <div className="landing-container text-white">
                <h1 className="text-center judul">30 Day Challange Digital Marketing</h1>
                <div className="landing">
                    <div>
                        <p className="subjudul">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum eaque tempora impedit minima? Quaerat, possimus distinctio ex sunt alias ipsam rerum magnam commodi aliquid quam amet asperiores consequuntur hic!</p>
                        <div className="text-center">
                            <hr />
                            {<Countdown date={timeEvents} renderer={TimeCout} />}
                            <hr />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <div>
                            <a href="/" className="button rounded">Amankan Kursi Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
