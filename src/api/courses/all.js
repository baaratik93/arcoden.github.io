import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/config";

const allCourses = async()=> {
    const data =[]
    const coursCollection = await getDocs(collection(db, "courses"));
    coursCollection.forEach(doc => {
            data.push({
            id: doc.id,
            ...doc.data()
          })
    });
    return data;
}

export default allCourses;