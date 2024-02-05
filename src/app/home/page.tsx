import * as React from "react";

const Home = (): React.JSX.Element => {
  return (
    <div className="min-h-[calc(100vh-110px)] w-full flex justify-center items-center bg-gray-200 py-6">
      <div className="bg-white w-3/4 h-screen  border-0 rounded-lg">
        <div id="author">
          <div id="profile-icon"></div>
          <div id="profile-details">
            <h6 id="author_name"></h6>
            <h6 id="created_on"></h6>
          </div>
        </div>

        <div id="heading"></div>

        <div id="chips"></div>
        <div id="content">
          <div id="subHeading"></div>
          <p>paragraph</p>
          <img src="." alt="f" />
          <div>code block</div>
        </div>
        <h1>Home Page </h1>
      </div>
    </div>
  );
};

export default Home;
