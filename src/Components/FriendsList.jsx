import { useState } from "react";
import Button from "./Button";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

export default function FriendsList({ friends }) {
  const [onAdd, setOnAdd] = useState(false);

  function handleAdd() {
    setOnAdd((prev) => !prev);
  }

  return (
    <div>
      <div
        className="friends"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          marginBottom: 20,
        }}
      >
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
          />
        ))}
      </div>
      {onAdd && (
        <AddFriendForm />
      )}
      <div className="btn add">
        <Button onClick={handleAdd}>
            {onAdd ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}
