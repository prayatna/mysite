import pte from '../assets/img/pte.png';

export default{
    projects:[
        {
            id:1,
            title: "PTE Admin Panel Website",
            description:"Website for PTE practice test built with ReactJS with Redux ",
            more_info:`A website built during my internship at NOVA Software. The website was built from ground zero using ReactJS and Redux. This was a  
            "great opportunity for me to learn about react and redux as it was all new to me. The main concept of the web application was to enable administrators to manage their " +
            "PTE practice materials. They could add/remove/update the PTE questions according to different question types. As my internship was just for couple of months only the functionality for adding
            a question was implemented.`,
            screenshots:pte,
            offsetVal: 2

        },

        {
            id:2,
            title: "NutriFinder",
            description: "Android app for getting Dietary Intake through food photographs",
            more_info: "The android based NutriFinder app was my final year project during my study of Bachelor of Software Engineering at the University of Canberra. The main aim of the" +
            "app was to take a picture of any food item and it will identify what type of food it is along with its nutritional values. The basic working mechanism is that first the app enables" +
            "the user to take a picture. The picture is then sent for identification to the Clarifai API. The API returns list of possible result but the app only display the result with the" +
            "highest confidence (must have put an option to select from the list by user). After identifying the food item, it is then sent to the Nutritionix API to get the result of the " +
            "nutritional value that particular food item contains. Finally, the result will be displayed as nutritional facts of the food item.",
            offsetVal: 0

        },

        {
            id:3,
            title: "My Shopping List",
            description: "basic  Android app to add/remove shopping list item",
            more_info: "more explanation about the project",
            offsetVal: 2


        },

        {
            id:4,
            title: "File Portal",
            description: "a file sharing web application made using Laravel framework",
            more_info: "more explanation about the project",
            offsetVal: 0

        }
    ]
}