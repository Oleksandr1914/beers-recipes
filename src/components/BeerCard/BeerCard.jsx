import { truncateString } from "../../utils/correctors";
import {
  CardContainer,
  AboutBox,
  ImageBeer,
  TitleCard,
  TextCard,
  TitleBox,
} from "./BeerCard.styled";

const BeerCard = ({ displayBeer }) => {
  const description = truncateString(displayBeer?.description);
  return (
    <CardContainer>
      <TitleBox>
        <TitleCard>{displayBeer?.name}</TitleCard>
        <TextCard>{displayBeer?.tagline}</TextCard>
      </TitleBox>
      <AboutBox>
        <ImageBeer src={displayBeer?.image_url} alt="beer" />
        <TextCard>{description}...</TextCard>
      </AboutBox>
    </CardContainer>
  );
};

export default BeerCard;
