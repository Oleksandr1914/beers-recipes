import { ButtonDete } from "./Button.styled";
import Delete from "../../assets/delete.svg";
import { useBeersRecipes, useSelectedCard } from "../../store";

const Button = () => {
  const { selectedCard, cleanrCard } = useSelectedCard((state) => ({
    selectedCard: state.selectedCard,
    cleanrCard: state.cleanrCard,
  }));
  const { filterBeers } = useBeersRecipes((state) => ({
    filterBeers: state.filterBeers,
  }));

  const handleClick = () => {
    filterBeers(selectedCard);
    cleanrCard();
  };

  return (
    <ButtonDete onClick={handleClick}>
      <img src={Delete} alt="garbage container" />
      Delete
    </ButtonDete>
  );
};

export default Button;
