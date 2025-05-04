import { Header, Body, Footer } from "../organisms"
const MainLayout = ({ }) => {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default MainLayout