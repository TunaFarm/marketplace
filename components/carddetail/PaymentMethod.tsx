import Image from "next/image";
// eslint-disable-next-line react/prop-types
const walletTypes = [
  {
    icon: "https://placekitten.com/400/300",
    name: "Metamask",
    suggestion: "Recommended",
    port: "web3",
  },
  {
    icon: "https://placekitten.com/400/300",
    name: "Bitski",
    port: "web3",
  },
  {
    icon: "https://placekitten.com/400/300",
    name: "Coinbase",
    port: "web3",
  },
];

const socialTypes = [
  {
    icon: "https://placekitten.com/400/300",
    name: "Facebook",
  },
  {
    icon: "https://placekitten.com/400/300",
    name: "Twitter",
  },
  {
    icon: "https://placekitten.com/400/300",
    name: "Google",
  },
];

const PaymentMethod = ({ doPayment }: any) => (
  <div className=" ">
    <button
      type="button"
      onClick={doPayment}
      className="text-white text-xl text-end w-full"
    >
      X
    </button>
    <div className="flex-col w-[440px] h-96 p-5">
      <p className="text-white font-bold text-center my-2.5 justify-between">
        Log in or Create an account
      </p>
      <div className="my-1.5">
        {walletTypes.map((item) => (
          <div
            key={item.name}
            className="bg-[#252c34] rounded-md p-2.5 my-2 text-white text-md  flex justify-between items-center"
          >
            <div className="flex w-4/6">
              <div className="items-center relative w-8 h-8">
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="object-contain "
                  layout="fill"
                />
              </div>
              <div className="ml-2.5 w-fit ">{item.name}</div>
              <div className="px-1 font-thin w-fit">
                {item?.suggestion ? `(${item.suggestion})` : ""}
              </div>
            </div>
            <div className="text-[#bdc0c2] text-sm  uppercase">{item.port}</div>
          </div>
        ))}
      </div>
      <div className="my-2.5">
        <div className="text-white text-sm font-bold my-2.5">SOCIAL</div>
        <div className="flex justify-between">
          {socialTypes.map((item) => (
            <div
              key={item.name}
              className="flex bg-[#252c34] p-2.5 w-32 rounded-md text-white items-center"
            >
              <div className="items-center relative w-8 h-8">
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="object-contain "
                  layout="fill"
                />
              </div>
              <p className="ml-1 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center my-2.5">
        <p className="text-[#0084ff] font-bold">Sign in with email {">"}</p>
        <p className="text-[#bdc0c2] text-sm">What&apos;s a crypto-wallet</p>
      </div>
    </div>
  </div>
);

export default PaymentMethod;
