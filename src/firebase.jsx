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
