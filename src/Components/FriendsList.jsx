import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
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
        {friends.map((friend, index) => (
          <Friend
            num={index}
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </div>
    </div>
  );
}
