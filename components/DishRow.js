import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { getImage } from '../api/dataService';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../slices/basketSlice';

export default DishRow = ({ id, name, description, price, image }) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
    const dispatch = useDispatch();
    const items = useSelector(state => selectBasketItemsWithId(state, id));
    const [isPressed, setIsPressed] = useState(false);

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }));
    }
    
    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }));
    }

    return (
        <>
            <TouchableOpacity 
                onPress={() => setIsPressed(!isPressed)} 
                className={`bg-white p-4 ${!isPressed && 'border border-gray-200'}`}
            >
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>
                            {formatter.format(price)}
                        </Text>                    
                    </View>
                    <View>
                        <Image 
                            style={{
                                borderWidth: 1,
                                borderColor: '#F3F3F4'
                            }}
                            source={getImage(image)}
                            className='h-20 w-20 bg-gray-300 p-4'
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity disabled={!items.length > 0} onPress={removeItemFromBasket}>
                            <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
                        </TouchableOpacity>
                        
                        <Text>{items.length}</Text>
                        
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color='#00CCBB' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>}
        </>
    )
}