import Login from "./components/login"
import { ModeToggle } from "./components/shared/DarkMode"
import { ThemeProvider } from "./context/Darktheme"
export default function App() {
  return (
    // <div className="w-full h-full flex flex-1  custom-class ">
    <ThemeProvider>
    <div className="outer w-full flex flex-col">
    <ModeToggle/>
      <Login/>
      {/* </div> */}

    </div>
    </ThemeProvider>
  )
}