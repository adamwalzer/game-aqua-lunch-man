export const LEFT = 'left';
export const RIGHT = 'right';

export const FOOD = {
    APPLE: 'apple',
    APPLE_J: 'applejuice',
    AVOCADO: 'avocado',
    BANANA: 'banana',
    BREAD: 'wheatbread',
    BROCCOLI: 'broccoli',
    CHEESE_SANDWICH: 'cheese',
    CHICKEN: 'chicken',
    CHOCOLATE: 'chocolate',
    CORNFLAKES: 'cornflakes',
    EGGS: 'eggs',
    FRIES: 'fries',
    GRAPE_J: 'grapejuice',
    HAMBURGER: 'hamburger',
    ORANGE_J: 'orangejuice',
    OATMEAL: 'oatmeal',
    LAMB: 'lamb',
    MILK: 'milk',
    PASTA: 'pasta',
    PASTA2: 'pasta2',
    PEAS: 'peas',
    PIZZA: 'pizza',
    PORK: 'pork',
    PORKCHOPS: 'porkchops',
    RICE: 'rice',
    SAUSAGES: 'sausages',
    SODA: 'soda',
    SOY_MILK: 'soy-milk',
    SALAD: 'salad',
    STEAK: 'steak',
    TOFU: 'tofu',
    CORN: 'corn',
    WATERMELON: 'watermelon',

};

export const CORRECT_FOOD = [
    FOOD.WATERMELON,
    FOOD.CHICKEN,
    FOOD.BROCCOLI,
    FOOD.BREAD,
    FOOD.APPLE_J,
    FOOD.EGGS,
    FOOD.AVOCADO,
    FOOD.BANANA,
    FOOD.TOFU,
];

export const SCALE_FOOD = [
    FOOD.WATERMELON,
    FOOD.PIZZA,
    FOOD.CHICKEN,
    FOOD.STEAK,
    FOOD.BROCCOLI,
    FOOD.CHEESE_SANDWICH,
    FOOD.BREAD,
    FOOD.PASTA,
    FOOD.SODA,
    FOOD.APPLE_J,
    FOOD.HAMBURGER,
    FOOD.EGGS,
    FOOD.LAMB,
    FOOD.AVOCADO,
    FOOD.BANANA,
    FOOD.CHOCOLATE,
    FOOD.PORKCHOPS,
    FOOD.TOFU,
];

export const INFO_SCREEN = [
    {
        vo: 'somefoods',
        text: (
            <div className="animated">
                Some foods need<br />
                more water than others<br />
                to be produced.<br /><br />
                In this game,<br />
                click on what food item<br />
                you think uses <br />
                the least water.
            </div>
        ),
    },
    {
        vo: 'greatjob',
        text: (
            <div className="animated">
                <span className="soj-title">GREAT JOB!</span><br />
                You have the power to<br />
                help save water<br />
                by making<br />
                smart food choices!
            </div>
        ),
    },
    {
        vo: 'dailymeals',
        text: (
            <div className="animated">
                Now let's see<br />
                how much water<br />
                is used for your<br />
                daily meals.
            </div>
        ),
    },
    {
        vo: 'flip',
        text: (
            <div className="animated">
                As a reward for taking<br />
                the time to learn<br />
                about the water that<br />
                is used to make your<br />
                food, here is a FLIP!
            </div>
        ),
    }
];

export const INFO_ANSWER = {
    [FOOD.WATERMELON]: (
        <div className="animated">
            <div className="soj-title">WATERMELON!</div>
            An 8 ounce serving of pizza takes<br />
            321 gallons of water to produce,<br />
            but the same amount of<br />
            watermelon only<br />
            takes 14 gallons.
        </div>
    ),
    [FOOD.CHICKEN]: (
        <div className="animated">
            <div className="soj-title">CHICKEN!</div>
            An 8 ounce serving of steak<br />
            takes 850 gallons of water to<br />
            produce, but the same amount<br />
            of chicken only takes<br />
            133 gallons.
        </div>
    ),
    [FOOD.BROCCOLI]: (
        <div className="animated">
            <div className="soj-title">BROCCOLI!</div>
            An 8 ounce serving of<br />
            a cheese sandwich takes<br />
            56 gallons of water<br />
            to produce, but the <br />
            same amount of broccoli<br />
            only takes 20 gallons.
        </div>
    ),
    [FOOD.BREAD]: (
        <div className="animated">
            <div className="soj-title">WHEAT BREAD!</div>
            An 8 ounce serving of pasta<br />
            takes 100 gallons of water<br />
            to produce, but the<br />
            same amount of wheat bread<br />
            only takes 87 gallons.
        </div>
    ),
    [FOOD.APPLE_J]: (
        <div className="animated">
            <div className="soj-title">APPLE JUICE!</div>
            An 8 ounce serving of soda<br />
            takes 46 gallons of water<br />
            to produce, but the <br />
            same amount of apple juice<br />
            only takes 34 gallons.
        </div>
    ),
    [FOOD.EGGS]: (
        <div className="animated">
            <div className="soj-title">EGGS!</div>
            An 8 ounce serving of an average<br />
            hamburger takes 660 gallon<br />
            of water to produce, but the<br />
            same amount of egg<br />
            only takes 94 gallons.
        </div>
    ),
    [FOOD.AVOCADO]: (
        <div className="animated">
            <div className="soj-title">AVOCADO!</div>
            An 8 ounce serving of<br />
            lamb chops takes 677 gallons<br />
            of water to produce, but the<br />
            same amount of avocado<br />
            only takes 72 gallons.
        </div>
    ),
    [FOOD.BANANA]: (
        <div className="animated">
            <div className="soj-title">BANANA!</div>
            An 8 ounce serving of<br />
            a chocolate bar takes 317 gallons<br />
            of water to produce, but the <br />
            same amount of bananas only<br />
            takes 46 gallons.
        </div>
    ),
    [FOOD.TOFU]: (
        <div className="animated">
            <div className="soj-title">TOFU!</div>
            An 8 ounce serving of<br />
            pork takes 330 gallon<br />
            of water to produce, but th<br />
            same amount of tof<br />
            only takes 244 gallons.
        </div>
    ),
};

export const MEAL = {
    BFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    INSTRUCTIONS: 'instructions',
};

export const FOOD_TYPE = {
    FRUITVEG: 'fruitveg',
    STARCH: 'starch',
    PROTEIN: 'protein',
    BEV: 'beverage',
};

export const FOOD_TYPES = [
    FOOD_TYPE.FRUITVEG,
    FOOD_TYPE.STARCH,
    FOOD_TYPE.PROTEIN,
    FOOD_TYPE.BEV,
];

export const FOOD_INFO = {
    [FOOD.APPLE_J]: { AMT: 34, TYPE: FOOD_TYPE.BEV },
    [FOOD.ORANGE_J]: { AMT: 33, TYPE: FOOD_TYPE.BEV },
    [FOOD.OATMEAL]: { AMT: 73, TYPE: FOOD_TYPE.STARCH },
    [FOOD.CORNFLAKES]: { AMT: 34, TYPE: FOOD_TYPE.STARCH },
    [FOOD.SAUSAGES]: { AMT: 330, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.APPLE]: { AMT: 27, TYPE: FOOD_TYPE.FRUITVEG },
    [FOOD.EGGS]: { AMT: 94, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.MILK]: { AMT: 54, TYPE: FOOD_TYPE.BEV },
    [FOOD.BANANA]: { AMT: 46, TYPE: FOOD_TYPE.FRUITVEG },
    [FOOD.PIZZA]: { AMT: 321, TYPE: FOOD_TYPE.STARCH },
    [FOOD.RICE]: { AMT: 98, TYPE: FOOD_TYPE.STARCH },
    [FOOD.PEAS]: { AMT: 356, TYPE: FOOD_TYPE.FRUITVEG },
    [FOOD.FRIES]: { AMT: 15, TYPE: FOOD_TYPE.STARCH },
    [FOOD.GRAPE_J]: { AMT: 22, TYPE: FOOD_TYPE.BEV },
    [FOOD.HAMBURGER]: { AMT: 330, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.CHICKEN]: { AMT: 94, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.SOY_MILK]: { AMT: 164, TYPE: FOOD_TYPE.BEV },
    [FOOD.SALAD]: { AMT: 15, TYPE: FOOD_TYPE.FRUITVEG },
    [FOOD.STEAK]: { AMT: 330, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.TOFU]: { AMT: 244, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.PASTA]: { AMT: 100, TYPE: FOOD_TYPE.STARCH },
    [FOOD.CORN]: { AMT: 107, TYPE: FOOD_TYPE.FRUITVEG },
    [FOOD.PORKCHOPS]: { AMT: 330, TYPE: FOOD_TYPE.PROTEIN },
    [FOOD.BREAD]: { AMT: 20, TYPE: FOOD_TYPE.STARCH },
};

export const PLATE_FOOD = [
    FOOD.APPLE_J,
    FOOD.ORANGE_J,
    FOOD.OATMEAL,
    FOOD.CORNFLAKES,
    FOOD.BANANA,
    FOOD.SAUSAGES,
    FOOD.APPLE,
    FOOD.EGGS,
    FOOD.MILK,
    FOOD.SOY_MILK,
    FOOD.PIZZA,
    FOOD.RICE,
    FOOD.PEAS,
    FOOD.FRIES,
    FOOD.PASTA2,
    FOOD.GRAPE_J,
    FOOD.HAMBURGER,
    FOOD.PORKCHOPS,
    FOOD.BREAD,
    FOOD.PASTA,
    FOOD.STEAK,
    FOOD.CORN,
    FOOD.TOFU,
    FOOD.SALAD,
    FOOD.CHICKEN,
];

export const MEAL_INFO = {
    [MEAL.BFAST]: {
        LIMIT: 425,
        ITEMS: [
            FOOD.APPLE_J,
            FOOD.ORANGE_J,
            FOOD.OATMEAL,
            FOOD.CORNFLAKES,
            FOOD.BANANA,
            FOOD.SAUSAGES,
            FOOD.APPLE,
            FOOD.EGGS,
            FOOD.MILK,
        ],
        REVEAL: (
            <div>
                Excellent meal-planning!<br />
                Now let's move on to<br />
                <div className="soj-title">LUNCH</div>
            </div>
        ),
        NEXT: MEAL.LUNCH,
    },
    [MEAL.LUNCH]: {
        LIMIT: 1000,
        ITEMS: [
            FOOD.PIZZA,
            FOOD.RICE,
            FOOD.PEAS,
            FOOD.FRIES,
            FOOD.GRAPE_J,
            FOOD.HAMBURGER,
            FOOD.CHICKEN,
            FOOD.SOY_MILK,
            FOOD.SALAD,
        ],
        REVEAL: (
            <div>
                Amazing water conservation<br />
                skills! You've designed a great<br />
                lunch and helped the <br />
                environment. Next stop:
                <div className="soj-title">DINNER!</div>
            </div>
        ),
        NEXT: MEAL.DINNER,
    },
    [MEAL.DINNER]: {
        LIMIT: 425,
        ITEMS: [
            FOOD.STEAK,
            FOOD.APPLE_J,
            FOOD.TOFU,
            FOOD.PASTA,
            FOOD.ORANGE_J,
            FOOD.CORN,
            FOOD.PORKCHOPS,
            FOOD.BREAD,
        ],
        REVEAL: (
            <div>
                You've constructed<br />
                a fantastic dinner!<br />
                Thank you<br />
                for saving water <br />
                when you eat!
            </div>
        ),
        NEXT: 'thankyou',
    },
    [MEAL.INSTRUCTIONS]: (
        <div>
            <div className="soj-title">INSTRUCTIONS</div>
            Drag and drop the food items into this plate<br />
            on the center. Fill each section of it and<br />
            stay under the water usage total. Keep track<br />
            of it using the drop meter on the right.
        </div>
    ),
};

