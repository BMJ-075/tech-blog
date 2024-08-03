import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next/types";
import * as React from "react";
import { ArrowRight, CodeXml, FileText, Mic } from "lucide-react";
import { Heading } from "@/components/ui/custom/headings";
import { Text } from "@/components/ui/custom/text";
import { Badge, BadgeProps } from "@/components/ui/badge";
import RelatedArticles from "@/components/relatedArticles/relatedArticles";

interface TopicpageParams {
  params: { topic: string };
}

export const metadata: Metadata = {
  title: "Topic",
  description: "This is list of posts related to react topic",
};

const MarketingSvg = () => (
  <svg
    aria-hidden="true"
    className="mr-1 size-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
      clipRule="evenodd"
    />
  </svg>
);

const Topic = ({ params }: TopicpageParams): React.JSX.Element => {
  console.log("Topicpage", params.topic);

  interface BlogArticle {
    badgeIcon: JSX.Element;
    badgeTitle: string;
    blogTitle: string;
    blogDescription: string;
    badgeType: BadgeProps["variant"];
  }

  const blogArticles: BlogArticle[] = [
    {
      badgeIcon: <FileText className="mr-1 size-3 text-background" />,
      badgeType: "default",
      badgeTitle: "Tutorial",
      blogTitle: "How to rank higher on Google (6 easy steps)",
      blogDescription:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    },
    {
      badgeIcon: <Mic className="mr-1 size-3 text-background" />,
      badgeType: "default",
      badgeTitle: "Interview",
      blogTitle: "How to schedule your tweets to send later",
      blogDescription:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.",
    },
    {
      badgeIcon: <MarketingSvg />,
      badgeType: "default",
      badgeTitle: "Marketing",
      blogTitle: "12 SEO best practices that everyone should follow",
      blogDescription:
        " Static websites are now used to bootstrap lots of websites and are becoming the basis.",
    },
  ];

  return (
    <>
      <div className="bg-background py-8 antialiased lg:py-24 px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <article>
            <Link href="#" title="">
              <Image
                className="h-64 w-full rounded-lg object-cover"
                src={""}
                alt=""
              />
            </Link>
            <div className="mt-5 space-y-3">
              <Badge className="w-fit px-3">
                <CodeXml className="mr-1 size-3 text-background" />
                Programming
              </Badge>
              <Heading
                level={3}
                className="font-bold leading-tight tracking-tight"
              >
                <Link href="#" className="hover:underline" title="">
                  Releasing code in large corporations is slow - and there is a
                  good reason for it
                </Link>
              </Heading>
              <div className="flex items-center gap-3">
                <Image className="size-8 rounded-full" src={""} alt="" />
                <div className="font-medium leading-tight text-secondary-foreground">
                  <div>Michael Gough</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    Posted on Jan 31
                  </div>
                </div>
              </div>
              <Text className="text-sm font-normal text-muted-foreground">
                One of the things I always loved about the web is its immediacy.
                You write a piece of code, publish it somewhere and people can
                access it.
              </Text>
              <Link
                href="#"
                title=""
                className="inline-flex items-center text-sm font-semibold leading-tight text-primary-600 hover:underline"
              >
                Read more
                <ArrowRight className="ml-2 size-4 text-foreground" />
              </Link>
            </div>
          </article>
          <div className="space-y-8">
            {blogArticles.map((article) => (
              <article key={article.blogDescription}>
                <div className="space-y-3">
                  <Badge variant={article.badgeType} className="w-fit px-3">
                    {article.badgeIcon} {article.badgeTitle}
                  </Badge>
                  <Heading
                    level={3}
                    className="font-bold leading-tight tracking-tight"
                  >
                    <Link href="#" className="hover:underline" title="">
                      {article.blogTitle}
                    </Link>
                  </Heading>
                  <Text className="text-sm font-normal text-secondary-foreground">
                    {article.blogDescription}
                  </Text>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex items-center text-sm font-semibold leading-tight text-primary-600 hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4 text-foreground" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <RelatedArticles />
    </>
  );
};

export default Topic;
