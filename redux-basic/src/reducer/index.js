const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETDATA":
      return [
        ...state,
        {
          id: 2,
          text: "Build something fun!",
          completed: false,
          color: "blue",
        },
      ];
    default:
      return state;
  }
};

export default rootReducer;
