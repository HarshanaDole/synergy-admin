import "../css/main.css";
import "../css/table.css";
import Header from "../components/Header";
import SearchBar from "../components/SearcbBlog";
import SmallButton from "../components/SmallButton";
import { ChangeEvent, useState } from "react";

function Blogs() {
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
                    <SmallButton to="/admin/blogs/add" />
                </div>
                
                <table className="tbl">
                    <thead>
                        <tr>
                            <th>Titla</th>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Summary</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                </table>
            </section>
        </div>
    );
}

export default Blogs;