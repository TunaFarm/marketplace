import CardDetail from "components/pages/CardDetail";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

export type CardDetailType = {
    id: string;
    title: string;
}

type Props = {
    cardDetail: CardDetailType;
}

const CardDetailPage: NextPage<Props> = ({ cardDetail }) => <CardDetail cardDetail={cardDetail} />;

type Params = {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const exampleAPIResponse = [1, 2, 3, 6, 7, 10];

    const paths = exampleAPIResponse.map((id) => ({
        params: { id: id + "" },
    }));

    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
    if (params === undefined) {
        return {
            notFound: true,
        };
    }

    const { id } = params;
    // TODO: fetch data from API with this id
    const data = { id, title: "Example Title" };

    return {
        props: {
            cardDetail: data
        },
    }
}

export default CardDetailPage;