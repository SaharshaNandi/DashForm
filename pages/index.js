import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Header from "../components/Header"
import Container from '../components/Container'
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full bg-my_bg_img" >
        <Sidebar />
        <div className="w-full h-full bg-gradient-to-tr from-black/50 to-gray-900/0  ">
          <Header />
          <Container />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
