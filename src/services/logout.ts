import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";

export const logoutUser = async () => {
  await signOut(auth);
};