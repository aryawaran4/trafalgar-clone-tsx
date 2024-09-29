import Head from "next/head";
import { isFilled, asLink, Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { GetStaticProps, GetStaticPaths } from "next";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

type PageProps = {
  page: Content.ToursDocument;
};

export default function Page({ page }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID<Content.ToursDocument>("tours", params?.uid as string);

  return {
    props: { page },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType<Content.ToursDocument>("tours");

  return {
    paths: pages.map((page) => asLink(page) || ""), // asLink returns a string or null, handle this case
    fallback: false,
  };
};
