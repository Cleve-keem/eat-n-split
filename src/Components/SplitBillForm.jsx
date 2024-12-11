import Button from "./Button";

export default function SplitBillForm({ name }) {
  return (
    <form className="form-split-bill">
      <h3 className="header">slip a bill with name</h3>
      <div className="input-wrapper">
        <div className="input-section">
          <label>💰 Bill value</label>
          <input type="text" />
        </div>
        <div className="input-section">
          <label>🧑 Your expense</label>
          <input type="text" />
        </div>
        <div className="input-section">
          <label>🤼 {name}'s expense</label>
          <input type="text" />
        </div>
        <div className="input-section">
          <label>🤮 Who is paying the bill?</label>
          <select name="bill">
            <option value="me">You</option>
            <option value={name}>{name}</option>
          </select>
        </div>
      </div>
      <div className="split-btn">
        <Button className="btn">Split Bill</Button>
      </div>
    </form>
  );
}
