import { useEffect, useState } from "react";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  where,
  query,
  limit,
} from "firebase/firestore";

const Firebase = () => {
  const [prueba, setPrueba] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    // const pruebaRef = doc(db, "prueba", "qHskRcZUgUFGbzci4QRC")
    // getDoc(pruebaRef).then((snapshot) => {
    //     if (snapshot.exists()) {
    // 	console.log({ id: snapshot.id, ...snapshot.data})
    //     }
    // })

    // getDocs(collection(db, "prueba")).then((snapshot) =>
    //   console.log(snapshot.docs)

    //   getDocs(

    //   )
    // );

    const q = query(
      collection(db, "prueba"),
      where("price", "==", 2),
      limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //   setPrueba(dataExtraida);
      console.log(dataExtraida);
      setPrueba(dataExtraida);
      //   console.log(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return <div></div>;
};

export default Firebase;
