import ChatArea from "../../components/ChatArea";
import ConvoList from "../../components/ConvoList";


export default function Dashboard() {

    return (
        <div className="container-fluid bg-dark h-88 p-0 overflow-hidden">
            <div className="d-flex h-100 justify-content-between">
                <ConvoList />
                <ChatArea />
            </div>
        </div>
    );
}