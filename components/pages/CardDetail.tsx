import CardInformation from "components/carddetail/CardInformation";
import ImagePreview from "components/carddetail/ImagePreview";
import PaymentMethod from "components/carddetail/PaymentMethod";
import { useState } from "react";

// type Props = {
//   cardDetail: Card;
// };

const CardDetail = () => {
  const [show, setShow] = useState(false);

  const doPayment = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="bg-[#1b2026] h-full w-full pt-24">
      <div
        className={show ? "hidden" : "flex justify-center scroll-smooth h-full"}
      >
        <ImagePreview doPayment={doPayment} />
        <CardInformation />
      </div>
      <div
        className={show ? "flex justify-center items-center h-full" : "hidden"}
      >
        <PaymentMethod
          doPayment={doPayment}
          className={
            show ? "flex justify-center items-center h-full" : "hidden"
          }
        />
      </div>
    </div>
  );
};

export default CardDetail;
