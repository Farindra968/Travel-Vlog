const { LIGHT_MODE, DARK_MODE } = require("@/constant/theme");
const { createSlice } = require("@reduxjs/toolkit");

const userPreferences = createSlice(
    {
        name: "userPreferences",
        initialState: {
            theme: LIGHT_MODE,
        },
        reducers: {
            themeMode: (state) => {
                state.theme = state.theme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;

        }
    }
    },
)

export const { themeMode } = userPreferences.actions;
export default userPreferences.reducer;