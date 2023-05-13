import React, { useState } from "react";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>React Calendar</h1>
      <Calendar
        value={date}
        onChange={(d) => setDate(d)}
      />
    </div>
  );
};

export default App;
