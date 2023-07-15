import { useEffect } from "react";
import { useBeersRecipes } from "../../store";
import BeerCard from "../../components/BeerCard/BeerCard";
import { BeersPageContainer, BeersList } from "./BeersPage.styled";

const BeersPage = () => {
  const {
    beersRecipes,
    displayBeers,
    fetchBeers,
    numberFetch,
    sliceBeers,
    calcFetch,
  } = useBeersRecipes((state) => ({
    beersRecipes: state.beers,
    displayBeers: state.beers,
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
    sliceBeers(10);
    if (displayBeers.length < 15) {
      calcFetch();
    }
  }, [sliceBeers, beersRecipes]);

  // console.log(beersRecipes, numberFetch);
  console.log(displayBeers);
  return (
    <BeersPageContainer>
      <BeersList>
        {displayBeers.length > 0 &&
          displayBeers?.map((el) => <BeerCard key={el.id} displayBeer={el} />)}
      </BeersList>
    </BeersPageContainer>
  );
};

export default BeersPage;
