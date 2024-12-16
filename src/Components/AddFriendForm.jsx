import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !imageUrl) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      imageUrl: `${imageUrl}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImageUrl("https://i.pravatar.cc/48");

  }

  return (
    <form
      style={{
        backgroundColor: "rgba(255, 213, 128, 0.3)",
        padding: 10,
        borderRadius: 5,
      }}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <div className="label">
          <label htmlFor="name">👨 Friend name</label>
        </div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <div className="label">
          <label htmlFor="url">🌆 Image URL</label>
        </div>
        <input
          type="text"
          id="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="add-btn">
        <Button style={{ width: 164 }}>Add</Button>
      </div>
    </form>
  );
}
