import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { getImage } from '../api/dataService';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image 
                source={getImage(imgUrl)}
                className='h-20 w-20 rounded'
            />
            <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
        </TouchableOpacity>
    );
}

export default CategoryCard;