import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/dashboard.css";
import Header from "../components/Header";
import { Client } from "../models/project";

function Dashboard() {
  const [projects, setProjects] = useState<Client[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("http://localhost:5000/api/projects", {
          method: "GET",
        });
        const projects = await response.json();
        setProjects(projects);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadProjects();
  }, []);

  return (
    <>
      <Header />
      <section className="dashboard">
        <div className="top-center">
          <div className="welcome">Welcome, Katudampe</div>
          <div className="notification">You have received 5 messages.</div>
          <div className="link">
            <Link to="/admin/messages"><i className="ri-arrow-right-double-line"></i> See messages</Link>
          </div>
        </div>
        <div className="box-container">
          <Link to="/admin/projects/add" className="box">
            <div className="icon">
              <i className="ri-add-box-fill"></i>
            </div>
<<<<<<< HEAD
            <div className="text">New Project</div>
          </Link>
          <Link to="/admin/manage-blogs" className="box">
            <div className="icon">
              <i className="ri-news-fill"></i>
=======
            <Link to="/admin/clients">
              <div className="box">
                <div className="icon">
                  <i className="ri-shake-hands-fill"></i>
                </div>
                <div className="text">Manage Clients</div>
              </div>
            </Link>
            <Link to="/admin/projects">
              <div className="box">
                <div className="icon">
                  <i className="ri-bar-chart-box-fill"></i>
                </div>
                <div className="text">All Projects ({projects.length})</div>
              </div>
            </Link>
            <div className="box">
              <div className="icon">
                <i className="ri-mail-fill"></i>
              </div>
              <div className="text">Messages</div>
>>>>>>> eec34074fcb6ca06be8d30e0d831bd70166212a6
            </div>
            <div className="text">Manage Blogs</div>
          </Link>
          <Link to="/admin/add-client" className="box">
            <div className="icon">
              <i className="ri-shake-hands-fill"></i>
            </div>
            <div className="text">Manage Clients</div>
          </Link>
          <Link to="/admin/projects" className="box">
            <div className="icon">
              <i className="ri-bar-chart-box-fill"></i>
            </div>
            <div className="text">All Projects ({projects.length})</div>
          </Link>
          <Link to="/admin/messages" className="box">
            <div className="icon">
              <i className="ri-mail-fill"></i>
            </div>
            <div className="text">Messages</div>
          </Link>
          <Link to="/admin/admins" className="box">
            <div className="icon">
              <i className="ri-shield-user-fill"></i>
            </div>
            <div className="text">Admins</div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
