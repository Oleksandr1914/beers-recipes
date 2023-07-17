import { useState } from "react";
import { useModalData, useSelectedCard } from "../../store";
import { truncateString } from "../../utils/correctors";
import {
  CardContainer,
  AboutBox,
  ImageBeer,
  TitleCard,
  TextCard,
  TitleBox,
} from "./BeerCard.styled";

const BeerCard = ({ displayBeer, isModal, setIsModal }) => {
  const [objectCard, setObjectCard] = useState(displayBeer);

  const description = truncateString(displayBeer?.description);

  const { selectedCard, addCard, filterCard } = useSelectedCard((state) => ({
    selectedCard: state.selectedCard,
    addCard: state.addCard,
    filterCard: state.filterCard,
  }));
  const { recornInform } = useModalData((state) => ({
    recornInform: state.recornInform,
  }));

  const handleClick = () => {
    setIsModal(!isModal);
    recornInform(objectCard);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    const findObject = selectedCard.find((el) => el.id === objectCard.id);

    findObject
      ? setObjectCard({ ...objectCard, border: false })
      : setObjectCard({ ...objectCard, border: true });
    findObject ? filterCard(objectCard) : addCard(objectCard);
  };

  return (
    <CardContainer
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className={objectCard.border && "border"}
    >
      <TitleBox>
        <TitleCard>{displayBeer?.name}</TitleCard>
        <TextCard>{displayBeer?.tagline}</TextCard>
      </TitleBox>
      <AboutBox>
        <ImageBeer src={displayBeer?.image_url} alt="beer" />
        <TextCard>{description}</TextCard>
      </AboutBox>
    </CardContainer>
  );
};

export default BeerCard;
