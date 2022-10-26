import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { GeneralProjectInfos } from "../../components/GeneralProjectInfos";
import { getPrismicClient } from "../../services/prismic";
import { asImageSrc, asHTML, asText } from "@prismicio/helpers";


export default function ProjectSlug({ project }) {
  return (
    <>
      <Head>
        <title>{`Projetos | `}</title>
      </Head>
        <GeneralProjectInfos data={project} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
  const { slug } = params;

  const response = await prismic.getByUID('project', String(slug), {})

  const project = {
    uid: response.uid,
    name: response.data.name,
    image: asImageSrc(response.data.image),
    text: asText(response.data.text),
    redirect: response.data.redirect.map(element => {
      return {
        link: element.link.url,
        icon: asImageSrc(element.icon),
      }
    }),
    technology: response.data.technology.map(element => {
      return {
        icon: {
          url: asImageSrc(element.icon),
          field:asText(element.field)
        }
      }
    }),
  }

  return {
    props: {
      project
    }
  }
}