export const fakeData = {
	"restaurant": [{		
		"id": "r1",
		"name": "Wagamama",
		"short_description": "Welcome to Wagamama where we serve asian food inspired by the flavours of Japan and Thailand.",
		"image": "wagamamaIcon.png",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 3,
		"address": "123 Westminster Street",
		"type": "c2",
		"dishes": ["d1", "d2", "d13", "d14"]
	}, {		
		"id": "r2",
		"name": "KFC",
		"short_description": "Kentucky Fried Chicken, home of the famous 13 spices and herbs recipe!",
		"image": "KFChoe.jpeg",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 4,
		"address": "333 Oven Av",
		"type": "c1",
		"dishes": ["d1", "d2", "d11", "d12"]
	}, {		
		"id": "r3",
		"name": "Nando's",
		"short_description": "Voted best chicken place of 2024!",
		"image": "nandoo.png",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 4.5,
		"address": "321 Spicy Road",
		"type": "c1",
		"dishes": ["d1", "d2", "d9", "d10"]
	}, {
		"id": "r4",
		"name": "Yo! Sushi",
		"short_description": "Homemade sushis by the best Japanese chefs!",
		"image": "yosushi.jpg",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 5,
		"address": "606 Appetit Blvd",
		"type": "c5",
		"dishes": ["d1", "d2", "d6", "d4"]
	}, {		
		"id": "r5",
		"name": "Five Guys",
		"short_description": "A cosy place to enjoy a satisfying burger",
		"image": "5guys.jpg",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 3.5,
		"address": "87 That Plaza",
		"type": "c4",
		"dishes": ["d1", "d2", "d7", "d8"]
	}, {		
		"id": "r6",
		"name": "Subway",
		"short_description": "Make up your dream sandwich with the freshest ingredients there is!",
		"image": "subway.jpg",
		"lat": 51.50609138390963,
		"long": -0.11703550900582022,
		"rating": 2.5,
		"address": "1102 Food Court Place",
		"type": "c3",
		"dishes": ["d1", "d2", "d3", "d5"]
	}],
	"dish": [{
		"id": "d1",
		"name": "Coke",
		"short_description": "Coca-cola, no need to say anything else.",
		"image": "coke.jpg",
		"price": 1.5
	}, {
		"id": "d2",
		"name": "7-UP",
		"short_description": "Lime-flavoured fizzy drink that will makes you want more!",
		"image": "7up.jpg",
		"price": 1.5
	}, {
		"id": "d3",
		"name": "Foot-long sub",
		"short_description": "Subway sandwich made from fresh ingredients!",
		"image": "subwayFootLong.jpg",
		"price": 6
	}, {
		"id": "d4",
		"name": "Rainbow rolls",
		"short_description": "Colourful sushi rolls as beautiful as they are tasty!",
		"image": "rainbowRolls.jpg",
		"price": 5
	}, {
		"id": "d5",
		"name": "Meatballs sub",
		"short_description": "Subway sandwich with meatballs",
		"image": "subwayMeatball.jpg",
		"price": 7
	}, {
		"id": "d6",
		"name": "California rolls",
		"short_description": "Awesome rolls from the USA",
		"image": "californiaRolls.jpg",
	    "price": 4
	}, {
		"id": "d7",
		"name": "All the way",
		"short_description": "Classic Five Guys burger",
		"image": "fiveGuys1.jpg",
		"price": 9
	}, {
		"id": "d8",
		"name": "Double cheese",
		"short_description": "Extra cheesy burger with all the fries!",
		"image": "extracheese.jpg",
		"price": 10
	}, {
		"id": "d9",
		"name": "Wrap à la Nando's",
		"short_description": "Nando's version of the nicely tucked chicken wrap!",
		"image": "nando2.jpg",
		"price": 6
	}, {
		"id": "d10",
		"name": "Nando’s classic chicky",
		"short_description": "Famous Nando's chicken breast!",
		"image": "nandos1.jpg",
		"price": 7
	}, {
		"id": "d11",
		"name": "Spicy Zinger",
		"short_description": "Delicious fried chicken with spicy sauce!",
		"image": "kfc1.jpg",
		"price": 4
	}, {
		"id": "d12",
		"name": "Bucket of delights",
		"short_description": "1 full bucket of perfectly fried chicken pieces!",
		"image": "kfcbucket.jpg",
		"price": 6.5
	}, {
		"id": "d13",
		"name": "Wag’ Ramen",
		"short_description": "Smooth ramen with lots of toppings!",
		"image": "ramen.jpg",
		"price": 3.5
	}, {
		"id": "d14",
		"name": "Dumplings galore",
		"short_description": "Lovely set of handmade dumplings, you pick the sauce!",
		"image": "dumpling.jpg",
		"price": 4
	}],
	"category": [{
		"id": "c1",
		"name": "Fried Chicken",
		"image": "friedChickenIcon.jpg"
	}, {
		"id": "c2",
		"name": "Asian",
		"image": "asianFoodIcon.jpg"
	}, {
		"id": "c3",
		"name": "Sandwich",
		"image": "sandwich.png"
	}, {
		"id": "c4",
		"name": "Burger",
		"image": "burgerIcon.jpg"
	}, {
		"id": "c5",
		"name": "Sushi",
		"image": "sushiFoodIcon.jpg"
	}],
	"featured": [{
		"id": "f1",
		"name": "Featured", 		
		"short_description": "Paid placements from our partners",
		"restaurants": ["r4", "r1", "r2", "r5"]
	}, {
		"id": "f2",
		"name": "Tasty Discounts", 		
		"short_description": "Everyone's been enjoying these juicy discounts!",
		"restaurants": ["r3", "r4", "r6", "r5"]
	}, {
		"id": "f3",
		"name": "Offers near you!", 		
		"short_description": "Why not support your local restaurants tonight!",
		"restaurants": ["r1", "r2", "r3", "r4"]
	}]
}

