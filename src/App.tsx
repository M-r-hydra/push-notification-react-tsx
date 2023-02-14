// React
import React, { useState } from "react";
// React
// Notif
import addNotification, { Notifications } from "react-push-notification";
import { Options } from "react-push-notification/dist/notifications/Storage";

// Notif

const App = () => {
  const [pushData, setPushData] = useState<Options>({
    title: "",
    subtitle: "",
    message: "",
    theme: "darkblue",
    native: true,
  });
  const { title, subtitle, message } = pushData;
  return (
    <div>
      <Notifications />
      <input
        type="text"
        onChange={(e) =>
          setPushData((prevState) => ({ ...prevState, title: e.target.value }))
        }
        placeholder="Enter Title"
      />{" "}
      <input
        type="text"
        onChange={(e) =>
          setPushData((prevState) => ({
            ...prevState,
            subtitle: e.target.value,
          }))
        }
        placeholder="Enter subtitle"
      />{" "}
      <input
        type="text"
        onChange={(e) =>
          setPushData((prevState) => ({
            ...prevState,
            message: e.target.value,
          }))
        }
        placeholder="Enter message"
      />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          addNotification({
            title,
            subtitle,
            message,
            theme: "darkblue",
            native: true, // when using native, your OS will handle theming.
          });
        }}
      >
        warning notif = darkblue
      </button>
    </div>
  );
};

export default App;
