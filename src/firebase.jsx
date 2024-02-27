import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  where,
  query,
  limit,
  addDoc,
} from "firebase/firestore";

// aqui hay mucho potencial de optimizacion pero ahora no me da el tiempo

export const getProducts = () => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "productos")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      resolve(dataExtraida);
    });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "productos")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      // resolve(dataExtraida);
      resolve(dataExtraida.find((product) => product.id === productId));
    });
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "productos")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      // resolve(dataExtraida);
      resolve(dataExtraida.filter((e) => e.category == productCategory));
    });
  });
};

// aquí se repite código, a futuro hay que reemplazar por función o componente de orden superior

export const getArtists = () => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "artistas")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      resolve(dataExtraida);
    });
  });
};

export const getArtistById = (artistId) => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "artistas")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      // resolve(dataExtraida);
      resolve(dataExtraida.find((artist) => artist.id === artistId));
    });
  });
};

export const getArtistsByCategory = (artistCategory) => {
  return new Promise((resolve) => {
    const db = getFirestore();

    const q = query(
      collection(db, "artistas")
      // where("price", "==", 2),
      // limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      const dataExtraida = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataExtraida);
      // resolve(dataExtraida);
      resolve(dataExtraida.filter((e) => e.category == artistCategory));
    });
  });
};

/* export const sendOrder = () => {
  const order = {
    buyer: { name: "usertest", phone: "1111", email: "a@a.com" },
    items: [{ name: "bici", price: 100 }],
    total: 100,
  };
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  // promise
  addDoc(ordersCollection, order);
}; */

export const sendOrder = async (order) => {
  /*   const order = {
    buyer: { name: "usertest", phone: "1111", email: "a@a.com" },
    items: [{ name: "bici", price: 100 }],
    total: 100,
  }; */

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    throw error; // Throw any errors for the caller to handle
  }
};
