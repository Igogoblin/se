import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload; // Устанавливаем тему из payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"; // Переключение темы
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;