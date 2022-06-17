import AssetsList from "./AssetsList";
import Search from "./Search";
import Button from "./Button";

type AssetsCardProps = {
  onClick: () => void;
};

const AssetsCard = ({ onClick }: AssetsCardProps) => {
  return (
    <div className="flex flex-col items-top w-[380px] bg-white rounded-xl border text-sm border-gray-6 p-3">
      <p className="font-bold dark:text-white my-2 mx-1 text-header-5">
        Which asset would you like to buy ?
      </p>
      <Search />
      <AssetsList />
      <Button
        onClick={onClick}
        bgColor="bg-white"
        borderColor="gray-6"
        txtColor="text-red-4"
      >
        Cancel
      </Button>
    </div>
  );
};
export default AssetsCard;
