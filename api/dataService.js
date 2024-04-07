import { fakeData } from "./fakeData";

const getFeaturedCategoriesAsync = () => {
    const featuredCategories = fakeData.featured.map(normedFeature => {
        const resolvedRestanrants = getRestaurantsFromIds(normedFeature.restaurants);
        return {
            ...normedFeature,
            restaurants: resolvedRestanrants
        };
    });
    return Promise.resolve(featuredCategories);
}

const getRestaurantsAsync = () => {
    return Promise.resolve(getRestaurantsFromIds());
}

const getRestaurantsFromFeatureIdAsync = (id) => {
    const restaurantsIds = fakeData.featured.find(feat => feat.id === id)?.restaurants;
    return Promise.resolve(getRestaurantsFromIds(restaurantsIds));
}

const getRestaurantsFromIds = (ids) => {
    let restaurants = []; 
    fakeData.restaurant.forEach(normedRestaurant => {
        // If specific ids were given, and that the restaurant isn't one of them, skip it
        if (ids && !ids.includes(normedRestaurant.id)) {
            return;
        }
        const resolvedType = getCategoryById(normedRestaurant.type);
        const resolvedDishes = getDishesByIds(normedRestaurant.dishes);
        restaurants.push({
            ...normedRestaurant,
            type: resolvedType,
            dishes: resolvedDishes
        });
    })
    return restaurants;
}

const getDishesByIds = ids => {
    let dishes = [];
    ids.forEach(id => {
        dishes.push(getDishById(id));
    });
    return dishes;
}

const getDishById = id => {
    return fakeData.dish.find(dish => dish.id === id);
}

const getDishesAsync = () => {
    return Promise.resolve(fakeData.dish);
}

const getCategoryById = id => {
    return fakeData.category.find(cat => cat.id === id);
}

const getCategoriesAsync = () => {
    return Promise.resolve(fakeData.category);
}

const getImage = path => {
    switch (path) {
        case 'wagamamaIcon.png':
            return require('../assets/fakeImage/wagamamaIcon.png');
        case 'KFChoe.jpeg':
            return require('../assets/fakeImage/KFChoe.jpeg');
        case 'nandoo.png':
            return require('../assets/fakeImage/nandoo.png');
        case 'nandos1.jpg':
            return require('../assets/fakeImage/nandos1.jpg');
        case 'yosushi.jpg':
            return require('../assets/fakeImage/yosushi.jpg');
        case '5guys.jpg':
            return require('../assets/fakeImage/5guys.jpg');
        case 'subway.jpg':
            return require('../assets/fakeImage/subway.jpg');
        case 'coke.jpg':
            return require('../assets/fakeImage/coke.jpg');
        case '7up.jpg':
            return require('../assets/fakeImage/7up.jpg');
        case 'subwayFootLong.jpg':
            return require('../assets/fakeImage/subwayFootLong.jpg');
        case 'rainbowRolls.jpg':
            return require('../assets/fakeImage/rainbowRolls.jpg');
        case 'subwayMeatball.jpg':
            return require('../assets/fakeImage/subwayMeatball.jpg');
        case 'californiaRolls.jpg':
            return require('../assets/fakeImage/californiaRolls.jpg');
        case 'fiveGuys1.jpg':
            return require('../assets/fakeImage/fiveGuys1.jpg');
        case 'extracheese.jpg':
            return require('../assets/fakeImage/extracheese.jpg');
        case 'nando2.jpg':
            return require('../assets/fakeImage/nando2.jpg');
        case 'nandos1.jpg':
            return require('../assets/fakeImage/nandos1.jpg');
        case 'kfc1.jpg':
            return require('../assets/fakeImage/kfc1.jpg');
        case 'kfcbucket.jpg':
            return require('../assets/fakeImage/kfcbucket.jpg');
        case 'ramen.jpg':
            return require('../assets/fakeImage/ramen.jpg');
        case 'dumpling.jpg':
            return require('../assets/fakeImage/dumpling.jpg');
        case 'friedChickenIcon.jpg':
            return require('../assets/fakeImage/friedChickenIcon.jpg');
        case 'asianFoodIcon.jpg':
            return require('../assets/fakeImage/asianFoodIcon.jpg');
        case 'sandwich.png':
            return require('../assets/fakeImage/sandwich.png');
        case 'burgerIcon.jpg':
            return require('../assets/fakeImage/burgerIcon.jpg');
        case 'sushiFoodIcon.jpg':
            return require('../assets/fakeImage/sushiFoodIcon.jpg');
        default:
            return '';
    }
}

export {
    getFeaturedCategoriesAsync,
    getRestaurantsFromFeatureIdAsync,
    getDishesAsync,
    getCategoriesAsync,
    getImage
}