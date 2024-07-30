import { type Metadata } from "next/types";
import * as React from "react";

interface TopicpageParams {
  params: { topic: string };
}

export const metadata: Metadata = {
  title: "Topic",
  description: "This is list of posts related to react topic",
};

const Topic = ({ params }: TopicpageParams): React.JSX.Element => {
  console.log("Topicpage", params.topic);
  return (
    <div>
      <h1>{`Topic Page ${params.topic}`} </h1>
    </div>
  );
};

export default Topic;
