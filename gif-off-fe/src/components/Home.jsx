import React, { useState } from "react";

const Home = () => {
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  return (
    <>
      {!isCreatingRoom ? (
        <div className="header">
          <h1 className="header__title">GIF Off</h1>
          <p className="header__text">Play now!</p>
          <button className="btn" onClick={() => setIsCreatingRoom(true)}>
            CREATE ROOM
          </button>
        </div>
      ) : (
        <form className="home-form" action="">
          <h2 className="home-form__title">Welcome</h2>
          <div>
            <label className="home-form__text">
              To enter the room, choose a nickname.
            </label>
            <input
              className="home-form__input"
              type="text"
              placeholder="User123"
            />
          </div>
          <button className="btn" type="submit">
            Create Room
          </button>
        </form>
      )}
    </>
  );
};

export default Home;
