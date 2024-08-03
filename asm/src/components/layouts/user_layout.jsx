import { Outlet } from "react-router-dom";
import HeaderPage from "./header";

function UserLayout() {
    return (
        <>
            <HeaderPage />
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default UserLayout;