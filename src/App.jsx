import NavBar from "./Components/Nav/Navbar";
import Hero from "./Components/Hero/Hero"

export default function App() {
  return (
    <>
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-primaryDark">
    <NavBar/>
    <Hero/>
    </main>
    </>
  )
}