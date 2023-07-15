import { useModalData } from "../../store";
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
  const description = truncateString(displayBeer?.description);

  const { recornInform } = useModalData((state) => ({
    recornInform: state.recornInform,
  }));

  const handleClick = () => {
    setIsModal(!isModal);
    recornInform(displayBeer);
  };

  return (
    <CardContainer onClick={handleClick}>
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
