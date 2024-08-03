import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./header_app";
import ColorInversionFooter from "./footer_app";
import { todoContext } from "./contexts/todo_context";
import { useState } from "react";

function UserLayout() {
    let [todos, setTodos] = useState(["Hoc AB", "Hoc CD"]);
    // function updateTodos() {
    //     setTodos([]);
    // }
    return (
        <>
            <todoContext.Provider
                value={{
                    datas: todos,
                    setTodos
                }}
            >
                <ResponsiveAppBar />
                <main>
                    <Outlet />
                </main>
                <ColorInversionFooter />
            </todoContext.Provider>
        </>
    );
}
export default UserLayout;