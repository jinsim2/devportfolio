import { AppFooter, AppHeader } from "@/components/common"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div className="page">
            <AppHeader />
            <div className="container px-10">
                <Outlet />
            </div>
            <AppFooter />
        </div>
    )
}

export { MainLayout }