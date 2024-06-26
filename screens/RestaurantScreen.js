import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { getImage } from '../api/dataService'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice'

const RestaurantScreen = () => {
    const { params } = useRoute();
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } = params;
    const navigation = useNavigation();
    const dispatch = useDispatch(params);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
  
    useEffect(() => {
        dispatch(setRestaurant(params))
    }, [dispatch]);

    return (
    <>
        <BasketIcon />
        <ScrollView>
            <View className='relative'>
                <Image 
                    source={getImage(imgUrl)}
                    className='w-full h-56 bg-gray-300 p-4'
                />
                <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon size={20} color='#00CCBB' />
                </TouchableOpacity>
            </View>    

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>

                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-500' >{rating}</Text> • {genre}
                            </Text>
                        </View>
                        
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon color='gray' opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
                            </Text>
                        </View>
                    </View>

                    <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                </View>

                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
                    <Text className='pl-2 flex-1 text-md font-bold'>
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className='pb-36'>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                    Menu
                </Text>

                {/* Dishes */}
                {dishes?.map(dish => (
                    <DishRow 
                        key={dish.id}
                        id={dish.id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}

            </View>
        </ScrollView>
    </>
  )
}

export default RestaurantScreen;