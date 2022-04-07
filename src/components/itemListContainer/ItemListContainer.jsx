import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';
import { getFirestore } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './itemListContainer.scss';

function ItemListContainer() {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    
    useEffect( () => {
        window.scrollTo(0, 0);
        const db = getFirestore();
        const q = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId)) : collection(db, 'items');
        getDocs(q).then((snapshot) => {
            setLoading(true);
            setTimeout(() => {
                setItemList(snapshot.docs.map((doc) => doc.data()));
                setLoading(false);
            }, 2000)
        });
    }, [categoryId]);
    return (
        <div className="items-container">
            {
                (loading === false)
                    ? <ItemList items={itemList} />
                    : <Loader />
            }
        </div>
    );
}

export default ItemListContainer
