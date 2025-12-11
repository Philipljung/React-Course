import { Header } from '../components/Header';
import "./NotFound.css";

export function NotFound () {
    return (
        <>
            <Header />
            <div className="ErrorMsgDiv">
                <p
                className="ErrorMsg"
                >404 Not Found</p>
            </div>
        </>
    );
}