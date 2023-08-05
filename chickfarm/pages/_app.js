import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { wrapper} from './../store'

function App({ Component, pageProps }) {
  return (
    <div >
        <NavBar/>
        <div className=''> 
        <Component {...pageProps} />

        </div>
        <Footer/>
    
    </div>)
  
}


export default App
//export default wrapper.withRedux( App)

