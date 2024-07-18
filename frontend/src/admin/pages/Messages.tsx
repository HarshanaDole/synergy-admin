import "../css/main.css";
import "../css/table.css";
import Header from "../components/Header";
//import { HiDotsVertical } from "react-icons/hi";
import SearchBar from "../components/SearchMessage";
//import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

function Messages() {
    const [query, setQuery] = useState("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
    };

    return (
        <div>
            <Header />
            <section>
                <div className="flex">
                    <SearchBar query={query} onSearchChange={handleSearchChange} />
                </div>

                <table className="tbl">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Messages;