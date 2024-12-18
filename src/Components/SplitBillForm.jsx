import { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [WhoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : "";

  function handleSubmit(e){
    e.preventDefault();

    if(!bill || !setPaidByUser) return;

    onSplitBill(WhoIsPaying === "user" ? paidByFriend : -paidByUser)
  }

  // console.log(paidByFriend);

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h3 className="header">slip a bill with {selectedFriend.name}</h3>
      <div className="input-wrapper">
        <div className="input-section">
          <label>💰 Bill value</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => {
              const value = e.target.value;
              setBill(value == "" ? "" : Number(value));
            }}
          />
        </div>
        <div className="input-section">
          <label>🧑 Your expense</label>
          <input
            type="number"
            value={paidByUser}
            onChange={(e) => {
              const value = e.target.value;
              if(value === "" || Number(value) <= (bill)){
                setPaidByUser(value == "" ? "" :  Number(value))
              }
            }}
          />
        </div>
        <div className="input-section">
          <label>🤼 {selectedFriend.name}'s expense</label>
          <input className="review" type="text" disabled value={paidByFriend} />
        </div>
        <div className="input-section">
          <label>🤮 Who is paying the bill?</label>
          <select
            name="bill"
            value={WhoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
      </div>
      <div className="split-btn">
        <Button className="btn">Split Bill</Button>
      </div>
    </form>
  );
}
