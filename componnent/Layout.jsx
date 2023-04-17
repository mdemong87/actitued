import Footer from './Footer'
import Header from './Header'
import Subscrib from './Subscrib'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Subscrib />
      <Footer />
    </div>
  )
}
