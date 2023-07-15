import { create } from "zustand";

export const useBeersRecipes = create((set, get) => ({
  beers: [],
  displayBeers: [],
  numberFetch: 1,
  error: null,
  sliceBeers: (startIndex) =>
    set((state) => {
      let endIndex = startIndex + 15;
      const displayRecipes = state.beers.slice(startIndex, endIndex);
      return { displayBeers: [...displayRecipes] };
    }),
  calcFetch: () =>
    set({
      numberFetch: get().numberFetch + 1,
    }),
  fetchBeersRecipes: async (number) => {
    try {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?page=${number}`
      );

      if (!res.ok) throw new Error("Failed to fetch! Try again.");

      set({ beers: [...get().beers, ...(await res.json())], error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export const useModalData = create((set) => ({
  informationCard: {},
  recornInform: (data) =>
    set({
      informationCard: data,
    }),
}));
