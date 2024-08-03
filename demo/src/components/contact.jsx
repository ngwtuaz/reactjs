import { Provider } from "react-redux";
import { store } from "../redux/store";

function Contact() {
    return (
        <>
            <Provider store={store}>
            </Provider>
        </>
    );
}

export default Contact;