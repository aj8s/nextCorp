import { db } from "@/db";
import paths from "@/paths";
import { Chip, divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap gap-2 mt-4">{renderedTopics}</div>
  );
};

export default TopicList;
