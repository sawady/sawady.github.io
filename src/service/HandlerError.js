import { clearStorage } from "./Storage";
import { user } from "../stores/user.js";

export const handleError = (error) => {
  console.log(error);
  if(error.data.error === 'token expiro') {
    user.set(null);
    clearStorage();
  }
}
