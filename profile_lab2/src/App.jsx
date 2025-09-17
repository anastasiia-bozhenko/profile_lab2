import React from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const users = [
    {
      name: "Leanne Graham",
      role: "Frontend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Ervin Howell",
      role: "Backend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Clementine Bauch",
      role: "UI/UX Designer",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Patricia Lebsack",
      role: "Project Manager",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Chelsey Dietrich",
      role: "QA Engineer",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Mrs. Dennis Schulist",
      role: "DevOps Engineer",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Kurtis Weissnat",
      role: "Fullstack Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
    },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;