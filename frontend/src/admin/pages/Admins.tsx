
import { useState } from 'react';
import AdminCard from '../components/AdminCard';
import '../css/Admins.css';
import Header from '../components/Header';
import Picture from '../images/user.png';

const initialAdmins = [
  {
    id: 1,
    name: 'John Doe',
    profilePic: Picture,
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePic: Picture,
  },
  // Add more admin objects as needed
];

const loggedInAdminId = 1; // Replace this with the actual logged-in admin ID

const Admins = () => {
  const [admins, setAdmins] = useState(initialAdmins);

  const handleDelete = (id: number) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <>
    <Header />
    <div className="admins-container">
      <h1>Admins</h1>
      <div className="admin-cards">
        {admins.map((admin) => (
          <AdminCard 
            key={admin.id} 
            admin={admin} 
            onDelete={handleDelete} 
            loggedInAdminId={loggedInAdminId} 
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Admins;
