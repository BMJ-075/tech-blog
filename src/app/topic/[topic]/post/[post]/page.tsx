("use-client");

import React, { type ReactElement } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Components Import
import { Avatar } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/custom/headings";
import { Text } from "@/components/ui/custom/text";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Image Imports
import Blog1 from "@/lib/assets/images/blog-1.png";
import Blog2 from "@/lib/assets/images/blog-2.png";
import Blog3 from "@/lib/assets/images/blog-3.png";
import Blog4 from "@/lib/assets/images/blog-4.png";
import ProfilePic from "@/lib/assets/images/profile-picture-2.jpg";
import Typography1 from "@/lib/assets/images/typography-image-1.png";
import Typography2 from "@/lib/assets/images/typography-image-2.png";

import { type Metadata } from "next/types";

interface PostPageParams {
  params: { post: string };
}

export const metadata: Metadata = {
  title: "Post",
  description: "this is post about the use effect hooks ",
};

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

interface ITableData {
  country: string;
  date: string;
  amount: string;
}

const TableData: ITableData[] = [
  {
    country: "United States",
    date: "April 21, 2021",
    amount: "$2,300",
  },
  {
    country: "Canada",
    date: "May 31, 202",
    amount: "$300",
  },
  {
    country: "United Kingdom",
    date: "June 3, 2021",
    amount: "$2,500",
  },
  {
    country: "Australia",
    date: "June 23, 2021",
    amount: "$3,543",
  },
  {
    country: "Germany",
    date: "July 6, 2021",
    amount: "$99",
  },
  {
    country: "France",
    date: "August 23, 2021",
    amount: "$2,540",
  },
];

const ExampleCode = `
<dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white">
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">developers</dd>
  </div>
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">contributors</dd>
  </div>
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">organizations</dd>
  </div>
</dl>
`;

const Articles: Article[] = [
  {
    imgSrc: Blog1,
    imgAlt: "Image 1",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 2 minutes",
    link: "/our-first-office",
  },
  {
    imgSrc: Blog2,
    imgAlt: "Image 2",
    title: "Enterprise design tips",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 12 minutes",
    link: "/enterprise-design-tips",
  },
  {
    imgSrc: Blog3,
    imgAlt: "Image 3",
    title: "We partnered with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 8 minutes",
    link: "/we-partnered-with-google",
  },
  {
    imgSrc: Blog4,
    imgAlt: "Image 4",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 4 minutes",
    link: "/our-first-project-with-react",
  },
];

const ArticleCard = (article: Article): ReactElement => {
  const { imgSrc, imgAlt, title, description, readTime, link } = article;
  return (
    <article className="max-w-xs">
      <Link href={link} passHref>
        <Image
          src={imgSrc}
          width={400}
          height={300}
          className="mb-5 rounded-lg"
          alt={imgAlt}
        />
      </Link>
      <Heading level={5} className="mb-2 font-bold leading-tight">
        <Link href={link} passHref>
          {title}
        </Link>
      </Heading>
      <Text className="mb-4 text-muted-foreground">{description}</Text>
      <Link
        href={link}
        passHref
        className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
      >
        {readTime}
      </Link>
    </article>
  );
};

const BlogBody = (): ReactElement => {
  return (
    <div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        Getting started with Flowbite
      </Heading>
      <Text className="mb-4 md:text-lg">
        First of all you need to understand how Flowbite works. This library is
        not another framework. Rather, it is a set of components based on
        Tailwind CSS that you can just copy-paste from the documentation.
      </Text>
      <Text className="mb-4 md:text-lg">
        It also includes a JavaScript file that enables interactive components,
        such as modals, dropdowns, and datepickers which you can optionally
        include into your project via CDN or NPM.
      </Text>
      <Text className="mb-4 md:text-lg">
        You can check out the quickstart guide to explore the elements by
        including the CDN files into your project. But if you want to build a
        project with Flowbite I recommend you to follow the build tools steps so
        that you can purge and minify the generated CSS.
      </Text>
      <Text className="mb-4 md:text-lg">
        You&#39;ll also receive a lot of useful application UI, marketing UI,
        and e-commerce pages that can help you get started with your projects
        even faster. You can check out this comparison table to better
        understand the differences between the open-source and pro version of
        Flowbite.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        When does design come in handy?
      </Heading>
      <Text className="mb-4 md:text-lg">
        While it might seem like extra work at a first glance, here are some key
        moments in which prototyping will come in handy:
      </Text>
      <ol>
        <li className="mb-4 md:text-lg">
          <strong>Usability testing</strong>. Does your user know how to exit
          out of screens? Can they follow your intended user journey and buy
          something from the site you&#39;ve designed? By running a usability
          test, you&#39;ll be able to see how users will interact with your
          design once it&#39;s live;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Involving stakeholders</strong>. Need to check if your GDPR
          consent boxes are displaying properly? Pass your prototype to your
          data protection team and they can test it for real;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Impressing a client</strong>. Prototypes can help explain or
          even sell your idea by providing your client with a hands-on
          experience;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Communicating your vision</strong>. By using an interactive
          medium to preview and test design elements, designers and developers
          can understand each other — and the project — better.
        </li>
      </ol>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Laying the groundwork for best design
      </Heading>
      <Text className="mb-4 md:text-lg">
        Before going digital, you might benefit from scribbling down some ideas
        in a sketchbook. This way, you can think things through before
        committing to an actual design project.
      </Text>
      <Text className="mb-4 md:text-lg">
        Let&#39;s start by including the CSS file inside the <code>head</code>{" "}
        tag of your HTML.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Understanding typography
      </Heading>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Type properties
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Baseline
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Measurement from the baseline
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Type classification
      </Heading>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Serif
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Old-Style serifs
      </Heading>
      <ul className="mb-4 list-disc md:text-lg">
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ul>
      <Image className="mb-4 w-full object-cover" src={Typography2} alt="" />
      <ol className="mb-4 list-decimal md:text-lg">
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ol>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Laying the best for successful prototyping
      </Heading>
      <Text level="baseTall" className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning:
      </Text>
      <blockquote>
        <Text className="mb-4 font-bold italic md:text-lg">
          &quot;Flowbite is just awesome. It contains tons of predesigned
          components and pages starting from login screen to complex dashboard.
          Perfect choice for your next SaaS application.&quot;
        </Text>
      </blockquote>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Code example
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <div className="overflow-x-auto rounded-lg bg-muted p-4">
        <pre className="whitespace-pre text-base text-muted-foreground">
          <code>{ExampleCode}</code>
        </pre>
      </div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Table example
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter.
      </Text>
      <div className="container mb-4 overflow-x-auto">
        <Table className="mx-auto w-full table-fixed">
          <TableHeader>
            <TableRow className="bg-muted font-bold">
              <TableHead className="min-w-40">Country</TableHead>
              <TableHead className="min-w-40">Date & Time</TableHead>
              <TableHead className="min-w-40">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableData.map(({ country, amount, date }) => (
              <TableRow key={country}>
                <TableCell className="font-medium">{country}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Best practices for setting up your prototype
      </Heading>
      <Text className="mb-4 md:text-lg">
        <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
        close a prototype will be to the real deal. If you&#39;re simply
        preparing a quick visual aid for a presentation, a low-fidelity
        prototype — like a wireframe with placeholder images and some basic text
        — would be more than enough. But if you&#39;re going for more intricate
        usability testing, hi-fi prototypes are the better choice.
      </Text>
      <Text className="mb-4 md:text-lg">
        <strong>Anticipate technical issues</strong>. Consider the technical
        limitations of your prototype early. If you&#39;re using the prototype
        to pitch a product that will require real-world hardware, ensure the
        prototype will be easy to port to said hardware.
      </Text>
      <Text className="mb-4 md:text-lg">
        <strong>Remember accessibility</strong>. It&#39;s crucial to take into
        account accessibility concerns when creating a prototype. If it&#39;s a
        feature that will make navigation easier for users with disabilities,
        build it into your prototype. If you&#39;re creating a website for
        general consumption, ensure anyone can use it.
      </Text>
    </div>
  );
};

const Post = ({ params }: PostPageParams): React.JSX.Element => {
  console.log("params: ", params);
  return (
    <div className="bg-background">
      <main className="bg-background pt-8 antialiased">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <article className="mx-auto w-full max-w-2xl py-8 lg:py-16">
            <header className="mb-4 lg:mb-6">
              <address className="mb-6 flex items-center not-italic">
                <div className="mr-3 inline-flex items-center text-sm text-secondary-foreground">
                  <Avatar className="mr-4 size-16">
                    <Image
                      className="w-full rounded-full object-cover"
                      src={ProfilePic}
                      alt="Jese Leos"
                    />
                  </Avatar>
                  <div>
                    <Link
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-secondary-foreground"
                    >
                      Jese Leos
                    </Link>
                    <Text className="text-base text-muted-foreground">
                      Graphic Designer, educator & CEO ModernUI Web
                    </Text>
                    <Text className="text-base text-muted-foreground">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </Text>
                  </div>
                </div>
              </address>
              <Heading
                level={1}
                className="mb-4 font-extrabold leading-tight lg:mb-6 lg:text-4xl"
              >
                Best practices for successful prototypes
              </Heading>
            </header>
            <Text level="mdTitle" className="mb-4">
              ModernUI Web is an open-source library of UI components built with
              the utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </Text>
            <Text className="mb-4 md:text-lg">
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </Text>
            <Text className="mb-4 md:text-lg">
              But then I found a{" "}
              <Link className="text-primary" href="#">
                component library based on Tailwind CSS called ModernUI Web
              </Link>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </Text>
            <figure className="mb-5">
              <Image className="w-full object-cover" src={Typography1} alt="" />
              <figcaption className="text-center text-sm text-muted-foreground">
                Digital art by Anonymous
              </figcaption>
            </figure>
            <BlogBody />
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="bg-muted py-6 antialiased lg:py-16"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <Heading level={3} className="mb-8 font-bold">
            Related articles
          </Heading>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {Articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Post;
