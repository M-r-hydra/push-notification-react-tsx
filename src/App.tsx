// React
import React from "react";
// React
// Notif
import addNotification, { Notifications } from "react-push-notification";
// Notif

const App = () => {
  return (
    <div>
      <Notifications />
      <button
        onClick={() => {
          addNotification({
            title: "Warning",
            subtitle: "This is a subtitle",
            message: "This is a very long message",
            theme: "darkblue",
            native: true, // when using native, your OS will handle theming.
          });
        }}
      >
        Clik Me {":)"}
      </button>
    </div>
  );
};

export default App;
