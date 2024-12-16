import Button from "./Button";

export default function SplitBillForm({ selectedFriend }) {
  console.log(selectedFriend)
  return (
    <form className="form-split-bill">
      <h3 className="header">slip a bill with {selectedFriend.name}</h3>
      <div className="input-wrapper">
        <div className="input-section">
          <label>💰 Bill value</label>
          <input type="number" />
        </div>
        <div className="input-section">
          <label>🧑 Your expense</label>
          <input type="number" />
        </div>
        <div className="input-section">
          <label>🤼 {selectedFriend.name}'s expense</label>
          <input className="review" type="text" disabled/>
        </div>
        <div className="input-section">
          <label>🤮 Who is paying the bill?</label>
          <select name="bill">
            <option value="user">You</option>
            <option value={selectedFriend.name}>{selectedFriend.name}</option>
          </select>
        </div>
      </div>
      <div className="split-btn">
        <Button className="btn">Split Bill</Button>
      </div>
    </form>
  );
}
