import { useEffect, useState } from "react";
import type { NextApiRequest, NextApiResponse } from "next";

import { Instrument } from "@/types/api.d";

type AssetListItemProps = {
  assets: Instrument[];
  withPercentage?: boolean;
};

const UpArrow = () => (
  <svg
    width="11"
    height="6"
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.83259 4.74107C9.94569 4.85417 10.0022 4.9881 10.0022 5.14286C10.0022 5.29762 9.94569 5.43155 9.83259 5.54464C9.71949 5.65774 9.58557 5.71429 9.4308 5.71429H1.4308C1.27604 5.71429 1.14211 5.65774 1.02902 5.54464C0.915923 5.43155 0.859375 5.29762 0.859375 5.14286C0.859375 4.9881 0.915923 4.85417 1.02902 4.74107L5.02902 0.741071C5.14211 0.627976 5.27604 0.571428 5.4308 0.571428C5.58557 0.571428 5.71949 0.627976 5.83259 0.741071L9.83259 4.74107Z"
      fill="#5EB242"
    />
  </svg>
);

const DownArrow = () => (
  <svg
    width="11"
    height="6"
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.83259 0.169642C9.94569 0.282738 10.0022 0.416666 10.0022 0.571428C10.0022 0.72619 9.94569 0.860119 9.83259 0.973214L5.83259 4.97321C5.71949 5.08631 5.58557 5.14286 5.4308 5.14286C5.27604 5.14286 5.14211 5.08631 5.02902 4.97321L1.02902 0.973214C0.915923 0.860119 0.859375 0.72619 0.859375 0.571428C0.859375 0.416666 0.915923 0.282738 1.02902 0.169642C1.14211 0.0565475 1.27604 0 1.4308 0H9.4308C9.58557 0 9.71949 0.0565475 9.83259 0.169642Z"
      fill="#DB5940"
    />
  </svg>
);

const AmountPercentColor = ({ amount }) => (
  <span className={`text-${amount < 0 ? "red" : "green"}-4 flex items-center`}>
    {amount < 0 ? <DownArrow /> : <UpArrow />}
    &nbsp;
    {Math.abs(amount)}%
  </span>
);

const AssetListItems = ({
  assets,
  withPercentage = false,
}: AssetListItemProps) => (
  <div>
    {assets &&
      assets.map((asset: Instrument) => (
        <li className="flex pb-5">
          <div className="w-8 h-8 bg-white rounded-full mr-2 border border-gray-6 mt-1"></div>
          <div className="flex flex-col">
            <span className="text-body-2 font-medium">{asset.name}</span>
            <span className="text-body-3 font-light text-gray-4">
              {asset.symbol}
            </span>
          </div>
          <div className="flex flex-col mr-0 ml-auto">
            <span className="text-body-2 font-medium mr-0 ml-auto">
              {asset.value}
            </span>
            <div className="text-body-3 font-light text-gray-4 mr-0 ml-auto ">
              {withPercentage ? (
                <AmountPercentColor amount={asset.amount} />
              ) : (
                asset.amount
              )}
            </div>
          </div>
        </li>
      ))}
  </div>
);

export const AssetsList = () => {
  const [allCoins, setCoins] = useState<Instrument[]>();
  const [allStocks, setStocks] = useState<Instrument[]>();
  useEffect(() => {
    const getAllCoins = async () => {
      const res = await fetch(`/api/coins`);
      const data = await res.json();
      const uniqueCoins = [
        ...new Map(data.result.map((item) => [item["name"], item])).values(),
      ];
      setCoins(uniqueCoins as any[]);
    };
    getAllCoins();
    const getAllStocks = async () => {
      const res = await fetch(`/api/stocks`);
      const data = await res.json();
      setStocks(data.result);
    };
    getAllStocks();
  }, []);
  return (
    <ul role="list" className="rounded-md w-full">
      <AssetListItems assets={allCoins} />
      <div className="border border-gray-6 h1 mb-5" />
      <AssetListItems assets={allStocks} withPercentage />
    </ul>
  );
};
