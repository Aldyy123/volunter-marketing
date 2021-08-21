import logo from '../assets/LOGO.png';
import { Component } from 'react'
import Countdown from 'react-countdown'
import TimeCout, { timeEvents } from '../Base/TimeCout'

export default class LandingPage extends Component {

    render() {
        return (
            
            <div className="landing-container text-white">
                <h1 data-aos='fade-up' data-aos-duration='1500' className="text-center judul rampart-one">30 Day Challange Digital Marketing</h1>
                <h1 data-aos='fade-up' data-aos-duration='1500' className="text-center judul-ke2 rampart-one">Bersama UMKM  Menuju Go Digital</h1>

                <div className="landing coda">
                    <div>
                        <p className="subjudul"  data-aos='fade-right' data-aos-duration='1500'>
                        Bukan hanya membuat UMKM beralih ke pemasaran online. Kami juga akan memberikan pelatihan selama 30 hari full dengan total 25 lebih materi serta diisi oleh 20 mentor yang berpengalaman dibidangnya.
                        </p>
                        <p className="subjudul" data-aos='fade-right' data-aos-duration='1500'>
                        Sehingga UMKM bukan hanya beralih ke pemasaran online, namun juga dapat membuat strategi pemasaran online yang sesuai dengan marketnya. Mulai dari konsep bisnis, build digital aset, branding, digital marketing, hingga scale up bisnis. 
                        </p>
                        <p className="subjudul" data-aos='fade-right' data-aos-duration='1500'>
                        Dengan begitu harapannya UMKM bukan hanya beralih ke pemasaran online, namun juga dapat bersaing dalam pemasaran di era digital.
                        </p>
                        <div className="text-center"  data-aos='zoom-in-up' data-aos-duration='1500'>
                            <hr />
                            {<Countdown date={timeEvents} renderer={TimeCout} />}
                            <hr />
                        </div>
                    </div>
                    <div>
                        <div data-aos='zoom-in' data-aos-duration='1500' data-aos-easing='ease-out-cubic'>
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='1500' data-aos-easing='ease-out-cubic'>
                            <a href="/" className="button rounded">Amankan Kursi Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
