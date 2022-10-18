import { Report } from "../types/report";

type Action = {
  type: "TOGGLE";
  id: number;
};

const reducer = (state: Report[], action: Action) => {
  switch (action.type) {
    case "TOGGLE":
      return state.map(bug =>
        bug.bug_id === action.id
          ? {
              ...bug,
              status: !bug.status,
              date_resolved: bug.status
                ? null
                : new Date().toISOString().slice(0, 19).replace("T", " ")
            }
          : bug
      );

    default:
      return state;
  }
};

export default reducer;
