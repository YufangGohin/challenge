import Arrow from "./Arrow";

type CoinsListProps = {
  onClick: () => void;
};

type CoinListItemProps = {
  actionText: string;
  asset: string;
  onClick?: () => void;
};

const CoinListItem = ({ asset, actionText, onClick }: CoinListItemProps) => (
  <li
    role="presentation"
    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
    onClick={onClick}
  >
    <div className="w-0 flex-1 flex items-center">{actionText}</div>
    <div className="w-3 flex-1 flex flex-row items-center">
      <div className="w-4 h-4 bg-white rounded-full mr-1 border border-gray-6" />
      {asset}
    </div>
    <div className="ml-4 flex-shrink-0">
      <Arrow />
    </div>
  </li>
);

const CoinSwitcher = () => (
  <div className="flex justify-center items-center w-6 h-6 !rounded-full bg-gray-6 absolute right-10 top-8">
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 4L3.5 1L6 4" stroke="#191919" strokeLinecap="round" />
      <path
        d="M4 1C4 0.723858 3.77614 0.5 3.5 0.5C3.22386 0.5 3 0.723858 3 1H4ZM3 11C3 11.2761 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.2761 4 11H3ZM3 1L3 11H4L4 1H3Z"
        fill="#191919"
      />
      <path d="M8 12L10.5 15L13 12" stroke="#191919" strokeLinecap="round" />
      <path
        d="M11 15C11 15.2761 10.7761 15.5 10.5 15.5C10.2239 15.5 10 15.2761 10 15H11ZM10 5C10 4.72386 10.2239 4.5 10.5 4.5C10.7761 4.5 11 4.72386 11 5H10ZM10 15V5H11V15H10Z"
        fill="#191919"
      />
    </svg>
  </div>
);

const CoinsList = ({ onClick }: CoinsListProps) => {
  return (
    <ul className="relative border border-gray-6 rounded-md divide-y divide-gray-6 w-full cursor-pointer">
      <CoinListItem actionText="Buy" asset="BTC" onClick={onClick} />
      <CoinSwitcher />
      <CoinListItem actionText="Pay with" asset="ETH" onClick={onClick} />
    </ul>
  );
};
export default CoinsList;
