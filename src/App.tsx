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
    icon: "",
  });
  const [icon, setIcon] = useState<any>(" ");
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
      <input
        type="file"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setIcon(!e.currentTarget.files ? " " : e.currentTarget.files[0]);
        }}
      />
      <br />
      <br />
      {icon !== " " && (
        <img
          src={URL.createObjectURL(icon)}
          alt=""
          style={{ width: "20rem" }}
        />
      )}
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
            icon: icon !== " " ? URL.createObjectURL(icon) : "",
          });
        }}
      >
        warning notif = darkblue
      </button>
    </div>
  );
};

export default App;
