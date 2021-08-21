import logo from '../assets/LOGO.png';
import { Component } from 'react'
import Countdown from 'react-countdown'
import TimeCout, { timeEvents } from '../Base/TimeCout'
import banner from '../assets/banner-demo.png'

export default class LandingPage extends Component {

    render() {
        return (
            
            <div className="landing-container text-white">
                <h1 className="text-center judul">30 Day Challange Digital Marketing</h1>
                <h1 className="text-center judul-ke2">Bersama UMKM  Menuju Go Digital</h1>
                <div className="banner-demo" style={{
                    width: '100%',
                }}>
                    <img style={{width: '100%'}} src={banner} alt="" />
                </div>
                <div className="landing">
                    <div>
                        <p className="subjudul">
                        Bukan hanya membuat UMKM beralih ke pemasaran online. Kami juga akan memberikan pelatihan selama 30 hari full dengan total 25 lebih materi serta diisi oleh 20 mentor yang berpengalaman dibidangnya.
                        </p>
                        <p className="subjudul">
                        Sehingga UMKM bukan hanya beralih ke pemasaran online, namun juga dapat membuat strategi pemasaran online yang sesuai dengan marketnya. Mulai dari konsep bisnis, build digital aset, branding, digital marketing, hingga scale up bisnis. 
                        </p>
                        <p className="subjudul">
                        Dengan begitu harapannya UMKM bukan hanya beralih ke pemasaran online, namun juga dapat bersaing dalam pemasaran di era digital.
                        </p>
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
