import React, { useState } from "react";

const ItinerarySection = ({ section, onUpdate, onDelete }) => {
  const [updatedContent, setUpdatedContent] = useState(section.content);
  const [selectedDate, setSelectedDate] = useState(section.date);

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSave = () => {
    onUpdate(section.id, { content: updatedContent, date: selectedDate });
  };

  return (
    <div className="itinerary-section">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Custom date format here"
      />
      <textarea
        value={updatedContent}
        onChange={handleContentChange}
        placeholder="Enter your text here"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => onDelete(section.id)}>Delete</button>
    </div>
  );
};

export default ItinerarySection;
