import Friend from "./Friend";

export default function FriendsList({ friends, onSelection }) {
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
            name={friend.name}
            imageUrl={friend.imageUrl}
            balance={friend.balance}
            onSelection={onSelection}
          />
        ))}
      </div>
    </div>
  );
}
