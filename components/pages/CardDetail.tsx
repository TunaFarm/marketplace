import CardInformation from 'components/carddetail/CardInformation'
import ImagePreview from 'components/carddetail/ImagePreview'
import React from 'react'
import { CardDetailType } from 'pages/market/[id]'

type Props = {
    cardDetail: CardDetailType;
}

function CardDetail({ cardDetail }: Props) {
    return (
        <div className="bg-[#1b2026] h-full w-full">
            <div className="flex justify-center pt-24 h-full w-auto scroll-smooth">
                <ImagePreview />
                <CardInformation />
            </div>
        </div>
    )
}

export default CardDetail
