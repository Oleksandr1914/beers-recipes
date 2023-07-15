import { useEffect, useState } from "react";
import { useBeersRecipes } from "../../store";
import BeerCard from "../../components/BeerCard/BeerCard";
import { BeersPageContainer, BeersList } from "./BeersPage.styled";
import Modal from "../../components/Modal/Modal";

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
    console.log("123", displayBeers);
  }, [sliceBeers, beersRecipes]);

  // console.log(beersRecipes, numberFetch);
  console.log(displayBeers);
  return (
    <BeersPageContainer>
      <BeersList>
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
  );
};

export default BeersPage;
