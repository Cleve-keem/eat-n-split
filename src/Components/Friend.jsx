import Button from "./Button";

export default function Friend({ name, image, balance }) {
  // const bal = Math.abs(balance)
  // console.log(name)
  return (
    <div
      className="wrapper"
      style={{
        width: 300,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <img src={image} alt="avatar" />
        <div className="userInfo" style={{ textAlign: "left" }}>
          <div className="friendName">{name}</div>
          {balance < 0 && (
            <span className="red status">
              You owe {name} {Math.abs(balance)}&euro;
            </span>
          )}
          {balance > 0 && (
            <span className="green status">
              {name} owes you {balance}&euro;
            </span>
          )}
          {balance === 0 && (
            <span className="status">
              You and {name} are even
            </span>
          )}
        </div>
      </div>
      <Button>Select</Button>
    </div>
  );
}
