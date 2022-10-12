import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/config";

const addNew = async (course) => {
  try {
    const response = await addDoc(collection(db, "courses"), course);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default addNew;
