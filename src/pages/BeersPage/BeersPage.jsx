import { useEffect, useState } from "react";
import { useBeersRecipes, useNumberCard, useSelectedCard } from "../../store";
import BeerCard from "../../components/BeerCard/BeerCard";
import { BeersPageContainer, BeersList } from "./BeersPage.styled";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import debounce from "lodash.debounce";

const BeersPage = () => {
  const [isModal, setIsModal] = useState(false);

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

  const { numberCard, calcNumber } = useNumberCard((state) => ({
    numberCard: state.numberCard,
    calcNumber: state.calcNumber,
  }));

  useEffect(() => {
    if (beersRecipes.length === 0) {
      fetchBeers(numberFetch);
    }
  }, []);

  useEffect(() => {
    sliceBeers(numberCard);
    if ((displayBeers.length < 15) & (displayBeers.length !== 0)) {
      calcFetch();
    }
    if ((displayBeers.length < 15) & (displayBeers.length !== 0)) {
      fetchBeers(numberFetch);
    }
  }, [beersRecipes, numberCard]);

  function scrollListener(e) {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 3
    ) {
      calcNumber(window.innerHeight + window.scrollY);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(scrollListener, 300));
  }, [debounce]);

  return (
    <>
      <BeersPageContainer id="beers">
        {selectedCard.length > 0 && <Button />}
        <BeersList id="list">
          {displayBeers?.map((el) => (
            <BeerCard
              key={el.id}
              displayBeer={el}
              isModal={isModal}
              setIsModal={setIsModal}
            />
          ))}
        </BeersList>
        {isModal && <Modal setIsModal={setIsModal} />}
      </BeersPageContainer>
    </>
  );
};

export default BeersPage;
