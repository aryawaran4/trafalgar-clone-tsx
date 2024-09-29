import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { GetStaticPropsContext } from "next"; // Import type for context
import { Metadata } from "next"; // For metadata typing

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Content } from "@prismicio/client"; // For Prismic types

type PageProps = {
  params: {
    uid: string;
  };
};

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const client = createClient();

  // Use proper typing for 'page' with ToursDocument
  const page = await client.getByUID<Content.ToursDocument>("tours", params.uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID<Content.ToursDocument>("tours", params.uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams(): Promise<Array<{ uid: string }>> {
  const client = createClient();

  const pages = await client.getAllByType<Content.ToursDocument>("tours");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
