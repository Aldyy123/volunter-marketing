import './Styles/App.css'
import './Styles/variable.css'
import React from 'react'
import LandingPage from './Components/LandingPage'
import FotoMedia from './Components/FotoMedia'
import TemplateGrid from './Base/GridLayout'
import Carousel from './Components/Carousel'
import Countdown from 'react-countdown'
import TimeCout, { timeEvents } from './Base/TimeCout'
import certificate from './assets/icon/certificate.svg'
import money from './assets/icon/money.svg'
import servers from './assets/icon/servers.svg'

const listOfData = [certificate, money, servers]
class App extends React.Component {
 render() {
  return (
   <div className='App'>
    <LandingPage />

    <TemplateGrid
     title={'Kenapa mengikuti acara ini ?'}
     subtitle={'Saat anda join challnge ini, anda bisa mendapatkan :'}
     backgroundColor={'#c7dad9'}
    >
     <div className='keuntungan'>
      <ul>
       <li>Ilmu copywriting</li>
       <li>Bisa membuat planning fb ads</li>
       <li>caranya recearch target market</li>
       <li>marketplace adsense</li>
       <li>membuat website</li>
       <li>Instagram Marketing</li>
      </ul>
      <ul>
       <li>Cara scale up bisnis mu</li>
       <li>Pentingnya branding</li>
       <li>Bisnis model canvas</li>
       <li>Memanfaatkan tools dari Google</li>
       <li>Mencari ide konten beserta penerapan konten kalender</li>
      </ul>
     </div>
    </TemplateGrid>
    <TemplateGrid
     title={'Di bawakan langsung oleh:'}
     subtitle={'narasumber yang berpengalaman'}
    />
    <Carousel />
    <FotoMedia title={'Didukung oleh'} cout={[1, 2, 3, 4]} />
    <TemplateGrid
     title={'Fasilitas Yang Anda Dapatkan ?'}
     subtitle={'There are many variations of passages of Lorem Ipsum available'}
     backgroundColor={'#c7dad9'}
    >
     <div className='fasilitas'>
      {listOfData.map((e) => {
       return (
        <div key={e}>
         <img src={e} alt='s' />
         <p className='text-center'>APapap</p>
        </div>
       )
      })}
     </div>
    </TemplateGrid>
    <FotoMedia title={'Didukung oleh'} cout={[1, 2, 3, 4]} />
    <TemplateGrid title={'Bonus untuk yang mengikuti hingga Akhir Acara'}>
     <div className='bonus'>
      {listOfData.map((e) => {
       return (
        <div key={e}>
         <img src={e} alt='s' />
         <p className='text-center subjudul'>APapap</p>
        </div>
       )
      })}
     </div>
    </TemplateGrid>
    <FotoMedia title={'Media Partner'} cout={[1, 2, 3, 4]} />
    <TemplateGrid title={'Daftar Sekarang Juga!'} backgroundColor={'#c7dad9'}>
     <div className='register'>
      <p className='text-center'>
       Ayo daftar segera mumpung gratis gan jangan sampe ketinggalan, rugi loo
      </p>
      <div>
        <Countdown date={timeEvents} renderer={TimeCout} />
      </div>
      <div className="register-button">
        <a href="/" className="button" >Amankan Kursi Sekarang</a>
      </div>
     </div>
    </TemplateGrid>
   </div>
  )
 }
}

export default App
