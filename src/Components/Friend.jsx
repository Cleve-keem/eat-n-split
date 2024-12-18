import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
    
  return (
    <li
      className={`friend ${isSelected ? "selected" : ""}`}
      style={{
        width: 330,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        lineHeight: 1.2
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <img src={friend.imageUrl} alt="avatar" />
        <div className="userInfo" style={{ textAlign: "left" }}>
          <div className="friendName">{friend.name}</div>
          {friend.balance < 0 && (
            <span className="red status">
              You owe {friend.name} {Math.abs(friend.balance)}&euro;
            </span>
          )}
          {friend.balance > 0 && (
            <span className="green status">
              {friend.name} owes you {friend.balance}&euro;
            </span>
          )}
          {friend.balance === 0 && (
            <span className="status">You and {friend.name} are even</span>
          )}
        </div>
      </div>
      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}
