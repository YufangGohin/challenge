import { CoinsList } from "./CoinsList";
import { Button } from "./Button";
import { Tabs } from "./Tabs";

type CoinsCardProps = {
  onClick: () => void;
};

export const CoinsCard = ({ onClick }: CoinsCardProps) => {
  return (
    <div className="flex flex-col items-top w-[380px] h-[460px] bg-white rounded-xl border text-sm border-gray-6 p-5">
      <Tabs />
      <div className="flex justify-center items-center w-[330px] h-[120px]  font-medium dark:text-white my-2 mx-1">
        <span className="text-folio-1">$</span>
        <span className="text-folio">0</span>
      </div>

      <div className="flex mb-2">
        <span className="text-body-3 font-normal text-gray-4 flex justify-center items-center">
          ETH Wallet: $29,778.36
        </span>
        <div className="flex justify-center items-center w-6 h-6 !rounded-full bg-gray-6 mr-0 ml-auto">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 6.81774C12.5816 4.2755 10.1034 2.4541 7.19035 2.4541C3.49537 2.4541 0.5 5.3846 0.5 8.99956C0.5 12.6145 3.49537 15.545 7.19035 15.545C10.1034 15.545 12.5816 13.7236 13.5 11.1814"
              stroke="#262626"
            />
            <path d="M5.375 15.5459V18.0004" stroke="#262626" />
            <path d="M8.625 15.5459V18.0004" stroke="#262626" />
            <path d="M5.375 0V2.45455" stroke="#262626" />
            <path d="M8.625 0V2.45455" stroke="#262626" />
          </svg>
        </div>
        <div className="flex justify-center items-center w-10 h-6 !rounded-full bg-gray-6 mr-0 ml-2 text-gray-1 text-body-3">
          MAX
        </div>
      </div>

      <CoinsList onClick={onClick} />
      <Button
        bgColor="bg-black"
        borderColor="transparent"
        txtColor="text-white"
      >
        Buy BTC
      </Button>
    </div>
  );
};
