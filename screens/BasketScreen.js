import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../slices/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid'
import { getImage } from '../api/dataService';
import { currencyFormatter } from '../utils/common';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();
    
    const groupedItems = useMemo(() => {
        const reduced = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        return reduced;
    }, [items]);

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100 '>
                <View className='p-5 border-b border-[#00CCBB] shadow-xs bg-white'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                    >
                        <XCircleIcon color='#00CCBB' size={50} />
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-3'>
                    <Image 
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                     />
                     <Text className='flex-1'>Deliver in 50-75 min</Text>
                     <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                     </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200'>
                    {Object.entries(groupedItems).map(([key, value]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className='text-[#00CCBB]'>{value.length} x</Text>
                            <Image 
                                source={getImage(value[0].image)}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{value[0]?.name}</Text>
                            <Text className='text-gray-600'>
                                {currencyFormatter.format(value[0]?.price)}
                            </Text>

                            <TouchableOpacity>
                                <Text 
                                    className='text-[#00CCBB] text-xs'
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>{currencyFormatter.format(basketTotal)}</Text>
                    </View>
                
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>{currencyFormatter.format(5.99)}</Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className='font-extrabold'>{currencyFormatter.format(basketTotal + 5.99)}</Text>
                    </View>
                    
                    <TouchableOpacity 
                        className='rounded-lg bg-[#00CCBB] p-4'
                        onPress={() => navigation.navigate('PreparingOrder')}
                    >
                        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}