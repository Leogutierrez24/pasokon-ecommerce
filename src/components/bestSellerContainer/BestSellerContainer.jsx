import React, {useEffect, useState} from 'react';
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';
import { getFirestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const BestSellerContainer = () => {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, 'items'), where('subcategory', '==', 'best-seller'));
        getDocs(q).then((snapshot) => {
            setLoading(true);
            setTimeout(() => {
                setItemList(snapshot.docs.map((doc) => doc.data()));
                setLoading(false);
            }, 2000)
        });
    }, []);
    return (
        <>
            {
                (loading === false)
                    ? <ItemList items={itemList} />
                    : <Loader />
            }
        </>
    );
}

export default BestSellerContainer;