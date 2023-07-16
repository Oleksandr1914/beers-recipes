import { useEffect, useState } from "react";
import { useBeersRecipes, useSelectedCard } from "../../store";
import BeerCard from "../../components/BeerCard/BeerCard";
import { BeersPageContainer, BeersList } from "./BeersPage.styled";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const BeersPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isSelecte, setIsSelecte] = useState(false);

  const {
    beersRecipes,
    displayBeers,
    fetchBeers,
    numberFetch,
    sliceBeers,
    calcFetch,
  } = useBeersRecipes((state) => ({
    beersRecipes: state.beers,
    displayBeers: state.displayBeers,
    fetchBeers: state.fetchBeersRecipes,
    numberFetch: state.numberFetch,
    calcFetch: state.calcFetch,
    sliceBeers: state.sliceBeers,
  }));

  const { selectedCard } = useSelectedCard((state) => ({
    selectedCard: state.selectedCard,
  }));

  useEffect(() => {
    if (beersRecipes.length === 0) {
      fetchBeers(numberFetch);
    }
  }, [fetchBeers, numberFetch]);

  useEffect(() => {
    sliceBeers(0);
    if (displayBeers.length < 15) {
      calcFetch();
    }
  }, [sliceBeers, beersRecipes]);

  useEffect(() => {
    if (beersRecipes.length < 15) {
      fetchBeers(numberFetch);
    }
  }, [beersRecipes]);

  return (
    <BeersPageContainer>
      {selectedCard.length > 0 && <Button />}
      <BeersList>
        {displayBeers?.map((el) => (
          <BeerCard
            key={el.id}
            displayBeer={el}
            isModal={isModal}
            setIsModal={setIsModal}
            setIsSelecte={setIsSelecte}
          />
        ))}
      </BeersList>
      {isModal && <Modal setIsModal={setIsModal} />}
    </BeersPageContainer>
  );
};

export default BeersPage;
