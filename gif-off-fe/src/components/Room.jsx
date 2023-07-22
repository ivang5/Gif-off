import { useEffect, useState } from "react";

const Room = () => {
  const [roomName, setRoomName] = useState("one");
  let url = `ws://127.0.0.1:8000/ws/socket-server/${roomName}/`;
  let chatSocket = new WebSocket(url);

  useEffect(() => {
    chatSocket = new WebSocket(url);

    chatSocket.onmessage = function (e) {
      let data = JSON.parse(e.data);

      if (data.type === "chat") {
        let messages = document.getElementById("messages");

        messages.insertAdjacentHTML(
          "beforeend",
          `<div><p>${data.message}</p></div>`
        );
      }
    };
  }, [roomName]);

  const sendMessage = (e) => {
    e.preventDefault();
    let message = e.target.message.value;
    chatSocket.send(
      JSON.stringify({
        message: message,
      })
    );
  };

  return (
    <div>
      <select
        name="room"
        id="room-select"
        onChange={(e) => {
          chatSocket.close();
          setRoomName(e.target.value);
        }}
      >
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
        <option value="four">Four</option>
      </select>
      <form id="form" onSubmit={sendMessage}>
        <input type="text" name="message" />
      </form>

      <div id="messages"></div>
    </div>
  );
};

export default Room;
