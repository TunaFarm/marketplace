import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import CardDetail from "components/pages/CardDetail";
import { Card } from "../../models/Card";

type Props = {
  card: Card;
};

type Params = {
  id: string;
};

const CardDetailPage: NextPage<Card> = () => <CardDetail />;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const exampleAPIResponse = [1, 2, 3, 6, 7, 10];

  const paths = exampleAPIResponse.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  if (params === undefined) {
    return {
      notFound: true,
    };
  }

  const { id } = params;
  // TODO: fetch data from API with this id
  const data = { id, name: "Example Title", price: 1000, image: "Test" };

  return {
    props: {
      card: data,
    },
  };
};

export default CardDetailPage;
