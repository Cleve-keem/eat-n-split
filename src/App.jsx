import { useState } from "react";
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";
import "./App.css";
import Button from "./Components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    imageUrl: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    imageUrl: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    imageUrl: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="left">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        <div className="btn add-">
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
