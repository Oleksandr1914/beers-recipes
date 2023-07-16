import { useEffect } from "react";

import { createPortal } from "react-dom";
import {
  Backdrop,
  BeerBox,
  ImageModal,
  ModalCard,
  TextModal,
  TitleBeerBox,
  IngredientsContainer,
  TitleModal,
  HopsMaltContainer,
  IngredientType,
  IngredientsList,
  IngredientsItem,
  TextBeerBox,
  YeastContainer,
  DescriptionContainer,
} from "./Modal.styled";
import { useModalData } from "../../store";
import { nanoid } from "nanoid";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ setIsModal }) => {
  const body = document.querySelector("body");

  const { informationCard } = useModalData((state) => ({
    informationCard: state.informationCard,
  }));

  useEffect(() => {
    body.classList.add("no-scroll");

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [body.classList]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        body.classList.remove("no-scroll");
        setIsModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [body.classList]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      body.classList.remove("no-scroll");
      setIsModal(false);
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalCard>
        <TitleModal>{informationCard.name}</TitleModal>
        <TextModal>{informationCard.tagline} </TextModal>
        <BeerBox>
          <ImageModal src={informationCard.image_url} alt="beers" />
          <IngredientsContainer>
            <TitleBeerBox>Ingredients:</TitleBeerBox>
            <HopsMaltContainer>
              <div>
                <IngredientType>Hops</IngredientType>
                <IngredientsList>
                  {informationCard.ingredients.hops.map((el, index) => (
                    <li key={nanoid()}>
                      <TextBeerBox>{el.name} </TextBeerBox>

                      <TextBeerBox>{el.add} </TextBeerBox>
                      <TextBeerBox>
                        {el.amount.value} {el.amount.unit}
                      </TextBeerBox>
                      <TextBeerBox> {el.attribute}</TextBeerBox>
                    </li>
                  ))}
                </IngredientsList>
              </div>
              <div>
                <IngredientType>Malt</IngredientType>
                <IngredientsList>
                  {informationCard.ingredients.malt.map((el) => (
                    <IngredientsItem key={nanoid()}>
                      <TextBeerBox>{el.name} </TextBeerBox>
                      <TextBeerBox>
                        {el.amount.value} {el.amount.unit}
                      </TextBeerBox>
                    </IngredientsItem>
                  ))}
                </IngredientsList>
              </div>
            </HopsMaltContainer>
            <YeastContainer>
              <IngredientType>Yeast</IngredientType>
              <TextBeerBox>{informationCard.ingredients.yeast}</TextBeerBox>
            </YeastContainer>

            <DescriptionContainer>
              <TitleBeerBox>Description:</TitleBeerBox>
              <TextBeerBox>{informationCard.description}</TextBeerBox>
            </DescriptionContainer>
          </IngredientsContainer>
        </BeerBox>
      </ModalCard>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
