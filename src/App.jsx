import './Styles/App.css'
import './Styles/variable.css'
import React from 'react'
import LandingPage from './Components/LandingPage'
import FotoMedia from './Components/FotoMedia'
import TemplateGrid from './Base/GridLayout'
import Carousel from './Components/Carousel'
import Countdown from 'react-countdown'
import TimeCout, { timeEvents } from './Base/TimeCout'
import logo from './logo.svg'
import { listOfData } from './Base/Data'
import banner from './assets/banner-demo.png'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="banner-demo" style={{
            width: '100%',
          }}>
          <img style={{ width: '100%' }} src={banner} alt="" />
        </div>
        <LandingPage />
        <TemplateGrid
          title={'Kenapa mengikuti acara ini ?'}
          subtitle={'Program ini 100% gratis serta didampingi oleh mentor yang berpengalaman dibidangnya.'}
          backgroundColor={'#c7dad9'}
        >
          <div className='keuntungan coda'>
            <ul>
              <li>Buat Bisnismu Go-Digital</li>
              <li>Ilmu Copywriting</li>
              <li>Google My Bisnis</li>
              <li>Optimasi Google My Bisnis</li>
              <li>Build Website</li>
              <li>Memanfaatkan tools dari Google</li>
              <li>Optimasi Website</li>
              <li>Branding</li>
              <li>Social Media Marketing</li>
              <li>Buat Konten Marketing Tanpa Harus Jago Desain</li>
              <li>Pemasaran di Instagram</li>
              <li>Cara Buat Konten Video Hanya Dengan Handphone</li>
              <li>Tiktok Marketing</li>
              <li>Mencari ide konten beserta penerapan konten kalender</li>
            </ul>
            <ul>
              <li>Buka-bukaan strategi endorse di sosmed</li>
              <li>Jenis Media Marketplace Beserta Targetnya</li>
              <li>Cara Pemasaran di Tokopedia</li>
              <li>Cara Pemasaran di Shopee</li>
              <li>Cara Pemasaran di Lazada</li>
              <li>Marketplace Ads</li>
              <li>Scale Up Bisnismu</li>
              <li>Strategi ATM yang bisa kalian ikuti</li>
              <li>Google Ads</li>
              <li>facebook Ads</li>
              <li>List Building</li>
              <li>KPI Sosial media</li>
              <li>Funnelling Bisnis</li>
              <li>Dan masih banyak lagi</li>
            </ul>
          </div>
        </TemplateGrid>
        <TemplateGrid
          title={'Di bawakan langsung oleh:'}
          subtitle={'narasumber yang berpengalaman'}
        />
        <Carousel />
        <FotoMedia title={'Didukung oleh'}>
          <div className="gallery">
            {[1, 2, 3].map(e => {
              return (
                <div className='img' key={e}>
                  <img src={logo} alt="" />
                </div>
              )
            })}
          </div>
        </FotoMedia>
        <TemplateGrid
          title={'Fasilitas Yang Anda Dapatkan ?'}
          subtitle={'Meskipun program ini gratis, namun banyak bonus yang bisa teman-teman dapatkan juga.'}
          backgroundColor={'#c7dad9'}
        >
          <div className='fasilitas coda'>
            {listOfData.map((e) => {
              return (
                <div key={e.img} style={{background: 'grey'}}>
                  <img src={e.img} alt='s' style={{ width: '100px', display : 'block', margin: '0 auto'}}/>
                  <p className='text-center'>{e.text}</p>
                </div>
              )
            })}
          </div>
          <div className="fasilitas-text contrail-one" style={{overflow: 'hidden'}}>
            <p className="center">Sangat terbuka untuk semua pihak, yang ingin berkolaborasi membantu UMKM dengan memberikan berbagai hal untuk UMKM.</p>
            <p className="center">Baik berupa free endorse untuk UMKM, tools digital marketing, pendampingan berkelanjutan, exclusive mentoring, Dana untuk praktek iklan para UMKM, dll.</p>
            <p className="center">Silakan hubungi kami di <a href="mailto: halo@agungprasetyo.id">halo@agungprasetyo.id</a></p>
          </div>
        </TemplateGrid>
        {/* <TemplateGrid title={'Bonus untuk yang mengikuti hingga Akhir Acara'}>
            <div className='bonus'>
              {listOfData.map((e, index) => {
                return (
                  <div key={index}>
                    <img src={e.img} alt='s' />
                    <p className='text-center subjudul'>{e.text}</p>
                  </div>
                )
              })}
            </div>
          </TemplateGrid> */}
        <FotoMedia title={'Media Partner'}>
          <div className="support">
            {[1].map(e => {
              return (
                <div className='img' key={e}>
                  <img src={logo} alt="" />
                </div>
              )
            })}
          </div>
        </FotoMedia>
        <TemplateGrid title={'Daftar Sekarang Juga!'} backgroundColor={'#c7dad9'}>
          <div className='register coda'>
            <p className='text-center'>
              Ayo daftar segera mumpung gratis gan jangan sampe ketinggalan, rugi loo
            </p>
            <div>
              <Countdown date={timeEvents} renderer={TimeCout} />
            </div>
            <div className="register-button">
              <a href="/" className="button" >Amankan Kursi Sekarang</a>
            </div>
            <div className="last-text">
              <p>
                Sebelumnya saya ucapkan terima kasih banyak untuk semua mentor, volunter, media partner, sponsor, serta para peserta yang telah bergabung pada program <b>“30 Day Challenge Digital Marketing”</b> Bersama UMKM Menuju Go-Digital.
              </p>
              <p className="text-center">
                <b>Semoga kerjasama ini dapat terjalin dengan baik, sehingga ribuan UMKM akan Go-Digital dengan baik.</b>
              </p>
            </div>
          </div>
        </TemplateGrid>
      </div>
    )
  }
}

export default App
