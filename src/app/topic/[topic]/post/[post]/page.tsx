import Chip from "@/components/chips/chip";
import * as React from "react";

const Post = (): React.JSX.Element => {
  console.log("homepage");
  return (
    <div className="min-h-[calc(100vh-110px)] flex justify-center items-center bg-gray-200 py-6">
      <div className="bg-white w-3/4 h-screen border-0 rounded-lg p-6">
        <div id="author" className="flex justify-start items-center">
          <div
            id="profile-icon"
            className="w-10 h-10 border-2 rounded-full mx-2 flex justify-center items-center"
          >
            <h6>BJ</h6>
          </div>
          <div id="profile-details">
            <h6 id="author_name">Bhavya jain</h6>
            <h6 id="created_on">Posted On 24/2/2024 </h6>
          </div>
        </div>
        <div id="heading" className="w-full py-6">
          <h1 className="text-5xl font-bold">
            How to use Husky to create pre-commit and pre-push hooks
          </h1>
        </div>
        <div id="chips" className="flex justify-start items-center py-2">
          <Chip label={"react"} color={"blue"} />
          <Chip label={"typescript"} color={"red"} />
          <Chip label={"hooks"} color={"green"} />
        </div>
        <div id="content py-2">
          {/* TODO - work on creating block coponents - heading and paragraph will be a block , image will be  block code box will be a block */}
          <p>
            Automation is always good, but its awesome when it reduces cognitive
            load and optimize processes.
          </p>

          <div id="subHeading">How to use git hooks?</div>

          <img src="" alt="" />
          <div>code block</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
