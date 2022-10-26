import Head from "next/head";
import { GeneralProjectInfos } from "../../components/GeneralProjectInfos";

export default function ProjectSlug() {
  return (
    <>
      <Head>
        <title>{`Projetos | AQUI`}</title>
      </Head>
        <GeneralProjectInfos />
    </>
  );
}