import React, { useState } from "react";
import "./Form.css";

interface FormState {
  tower: string;
  floor: number;
  room: number;
  date: string;
  time: string;
  comment: string;
}

export const Form = () => {
  const [formState, setFormState] = useState<FormState>({
    tower: "",
    floor: 3,
    room: 1,
    date: "",
    time: "",
    comment: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(formState, null, "\t"));
  };

  const handleFormReset = () => {
    setFormState({
      tower: "",
      floor: 3,
      room: 1,
      date: "",
      time: "",
      comment: "",
    });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <div className="form-group">
        <label className="select-category">Tower:</label>
        <select
          className="field"
          id="tower"
          name="tower"
          value={formState.tower}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Tower</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>

      <div className="form-group">
        <label className="select-category">Floor:</label>
        <select
          className="field"
          id="floor"
          name="floor"
          value={formState.floor}
          onChange={handleInputChange}
          required
        >
          {[...Array(25)].map((_, i) => (
            <option key={i} value={i + 3}>
              {i + 3}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="select-category">Room:</label>
        <select
          className="field"
          id="room"
          name="room"
          value={formState.room}
          onChange={handleInputChange}
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="select-category">Date:</label>
        <input
          className="field"
          type="date"
          id="date"
          name="date"
          value={formState.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="select-category">Time:</label>
        <input
          className="field"
          type="time"
          id="time"
          name="time"
          value={formState.time}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="select-category">Comment:</label>
        <textarea
          className="field"
          required
          id="comment"
          name="comment"
          value={formState.comment}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-buttons">
        <button className="btn-submit btn" type="submit">Submit</button>
        <button className="btn-reset btn" type="reset">Reset</button>
      </div>
    </form>
  );
};
