import React from "react";
import { useState } from "react";
import { AssetsCard } from "./AssetsCard";
import { CoinsCard } from "./CoinsCard";

export const TradeCard = () => {
  const [openAssetsCard, setOpenAssetsCard] = useState<boolean>(false);
  return (
    <div className="container mx-auto">
      {!openAssetsCard && <CoinsCard onClick={() => setOpenAssetsCard(true)} />}
      {openAssetsCard && (
        <AssetsCard onClick={() => setOpenAssetsCard(false)} />
      )}
    </div>
  );
};
