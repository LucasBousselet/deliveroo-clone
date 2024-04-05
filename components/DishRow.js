import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default DishRow = ({ id, name, description, price, image }) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });

    return (
        <TouchableOpacity>
            <View>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
                <Text className='text-gray-400 mt-2'>
                    {formatter.format(price)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}