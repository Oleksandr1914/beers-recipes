import { useEffect } from "react";
import { useBeersRecipes } from "../../store";
import BeerCard from "../../components/BeerCard/BeerCard";

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

  console.log(beersRecipes, numberFetch);
  return (
    <div>
      <BeerCard />
    </div>
  );
};

export default BeersPage;
