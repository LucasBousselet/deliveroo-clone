import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { getRestaurantsFromFeatureIdAsync } from '../api/dataService';

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurantsFromFeatureIdAsync(id).then(data => setRestaurants(data));
    }, []);

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>
                    {title}
                </Text>
                <ArrowRightIcon color='#00CCBB' />        
            </View>

            <Text className='text-xs text-gray-500 px-4'>
                {description}
            </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    // This style is applied to the content
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaurant Cards */}
                {restaurants?.map(restaurant => <RestaurantCard 
                    key={restaurant.id}
                    id={restaurant.id}
                    imgUrl={restaurant.image}
                    title={restaurant.name}
                    rating={restaurant.rating}
                    genre={restaurant.type.name}
                    address={restaurant.address}
                    short_description={restaurant.short_description}
                    dishes={restaurant.dishes}
                    long={restaurant.long}
                    lat={restaurant.lat}
                />)}
            </ScrollView>
        </View>

    );
}

export default FeaturedRow;