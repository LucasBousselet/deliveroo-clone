import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { getCategoriesAsync } from '../api/dataService';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategoriesAsync().then(data => setCategories(data));
    }, []);

    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            {/* Category card */}
            {categories?.map(category => <CategoryCard key={category.id} imgUrl={category.image} title={category.name} />)}
        </ScrollView>
    );
}

export default Categories;