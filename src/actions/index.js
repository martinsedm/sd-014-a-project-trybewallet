import { INPUT_EMAIL } from "../services/noMagicStuff";

export const emailChange = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});
