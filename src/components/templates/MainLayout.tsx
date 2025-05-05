import { Header, Body, Footer } from "../organisms"
const MainLayout = ({ }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default MainLayout