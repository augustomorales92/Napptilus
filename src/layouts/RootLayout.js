import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
