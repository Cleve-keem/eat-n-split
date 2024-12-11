import Button from "./Button";

export default function AddFriendForm() {
  return (
    <form
      style={{
        backgroundColor: "rgba(255, 213, 128, 0.3)",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <div className="field">
        <div className="label">
          <label htmlFor="name">👨 Friend name</label>
        </div>
        <input type="text" id="name" />
      </div>

      <div className="field">
        <div className="label">
          <label htmlFor="url">🌆 Image URL</label>
        </div>
        <input type="text" id="url" />
      </div>
      <div className="btn">
        <Button style={{ width: 164 }}>Add</Button>
      </div>
    </form>
  );
}
