import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import Homepage from '@/components/Homepage'
import Navbar from '@/layout/Navbar'
import HashoutLayout from '@/layout/HashoutLayout'

const inter = Inter({ subsets: ['latin'] })
export const poppins = Poppins({weight:["100","200","300","400","500","600","700","800","900"],subsets:["latin"]})

export default function Home() {
  return (
    <main
      className={`${poppins.className}`}
    >
      <HashoutLayout poppins={poppins.className} >
        <Homepage />
      </HashoutLayout>
    </main>
  )
}
