import SidebarNav from "@/components/SidebarNav"
import { Sidebar } from "lucide-react"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
        <>
        <SidebarNav/>
        <Outlet/>

        </>



  )
}

