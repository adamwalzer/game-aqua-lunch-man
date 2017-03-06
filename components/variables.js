export const LEFT = 'left';
export const RIGHT = 'right';

export const INFO_SCREEN = [
    {
        vo: 'somefoods',
        text : (
            <p>
                Some foods need<br />
                more water than others<br />
                to be produced.<br /><br />
                In this game,<br />
                click on what food item<br />
                you think users <br />
                the least water.
            </p>
        ),
    },
    {
        vo: 'greatjob',
        text : (
            <p>
                <span className="soj-title">GREAT JOB!</span><br />
                You have the power to<br />
                help save water<br />
                by making smart food choices!
            </p>
        ),
    },
    {
        vo: 'dailymeals',
        text : (
            <p>
                Now let's see<br />
                how much water<br />
                is used for your<br />
                daily meals.
            </p>
        ),
    },
];

export const INFO_ANSWER = {
    'watermelon': (
        <div>
            <div className="soj-title">WATERMELON!</div>
            An 8 ounce serving of pizza takes<br />
            321 gallons of water to produce,<br />
            but the same amount of<br />
            watermelon only<br />
            takes 14 gallons.
        </div>
    ),
    'chicken': (
        <div>
            
            <div className="soj-title">CHICKEN!</div>
            An 8 ounce serving of steak<br />
            takes 850 gallons of water to<br />
            produce, but the same amount<br />
            of chicken only takes<br />
            133 gallons.
        </div>
    ),
    'broccoli': (
        <div>
            <div className="soj-title">BROCCOLI!</div>
            An 8 ounce serving of<br />
            a cheese sandwich takes<br />
            56 gallons of water<br />
            to produce, but the <br />
            same amount of broccoli<br />
            only takes 20 gallons.
        </div>
    ),
    'wheatbread': (
        <div>
            <div className="soj-title">WHEAT BREAD!</div>
            An 8 ounce serving of pasta<br />
            takes 100 gallons of wate<br />
            to produce, but the same amount of wheat brea<br />
            only takes 87 gallons.
        </div>
    ),
    'applejuice': (
        <div>
            <div className="soj-title">APPLE JUICE!</div>
            An 8 ounce serving of soda<br />
            takes 46 gallons of water<br />
            to produce, but the <br />
            same amount of apple juice<br />
            only takes 34 gallons.
        </div>
    ),
    'eggs': (
        <div>
            <div className="soj-title">EGGS!</div>
            An 8 ounce serving of an average<br />
            hamburger takes 660 gallon<br />
            of water to produce, but the<br />
            same amount of egg<br />
            only takes 94 gallons.
        </div>
    ),
    'avocado': (
        <div>
            <div className="soj-title">AVOCADO!</div>
            An 8 ounce serving of<br />
            lamb chops takes 677 gallons<br />
            of water to produce, but the<br />
            same amount of avocado<br />
            only takes 72 gallons.
        </div>
    ),
    'banana': (
        <div>
            <div className="soj-title">BANANA!</div>
            An 8 ounce serving of<br />
            a chocolate bar takes 317 gallons<br />
            of water to produce, but the <br />
            same amount of bananas only<br />
            takes 46 gallons.
        </div>
    ),
    'tofu': (
        <div>
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
    STARCH: 'starch',
    PROTEIN: 'protein',
    FRUITVEG: 'fruitveg',
    BEV: 'beverage',
};

const FOOD = {
    APPLE_J: {
        NAME: 'apple-juice',
        AMT: 34,
        TYPE: FOOD_TYPE.BEV,
    },
    ORANGE_J: {
        NAME: 'orange-juice',
        AMT: 33,
        TYPE: FOOD_TYPE.BEV,
    },
    OATMEAL: {
        NAME: 'oatmeal',
        AMT: 73,
        TYPE: FOOD_TYPE.STARCH,
    },
    CORNFLAKES: {
        NAME: 'cornflakes',
        AMT: 34,
        TYPE: FOOD_TYPE.STARCH,
    },
    SAUSAGES: {
        NAME: 'sausages',
        AMT: 330,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    APPLE: {
        NAME: 'apple',
        AMT: FOOD_TYPE.FRUITVEG,
        TYPE: FOOD_TYPE.BEV,
    },
    EGGS: {
        NAME: 'eggs',
        AMT: 94,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    MILK: {
        NAME: 'milk',
        AMT: 54,
        TYPE: FOOD_TYPE.BEV,
    },
    PIZZA: {
        NAME: 'pizza',
        AMT: 321,
        TYPE: FOOD_TYPE.STARCH,
    },
    RICE: {
        NAME: 'rice',
        AMT: FOOD_TYPE.STARCH,
        TYPE: FOOD_TYPE.BEV,
    },
    PEAS: {
        NAME: 'peas',
        AMT: FOOD_TYPE.FRUITVEG,
        TYPE: FOOD_TYPE.BEV,
    },
    FRIES: {
        NAME: 'fries',
        AMT: 15,
        TYPE: FOOD_TYPE.STARCH,
    },
    GRAPE_J: {
        NAME: 'grape juice',
        AMT: 22,
        TYPE: FOOD_TYPE.BEV,
    },
    HAMBURGER: {
        NAME: 'hamburger',
        AMT: 330,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    CHICKEN: {
        NAME: 'chicken',
        AMT: 94,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    SOY_MILK: {
        NAME: 'soy-milk',
        AMT: 164,
        TYPE: FOOD_TYPE.BEV,
    },
    STEAK: {
        NAME: 'steak',
        AMT: 330,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    TOFU: {
        NAME: 'tofu',
        AMT: 244,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    PASTA: {
        NAME: 'pasta',
        AMT: 100,
        TYPE: FOOD_TYPE.STARCH,
    },
    CORN: {
        NAME: 'corn',
        AMT: 107,
        TYPE: FOOD_TYPE.STARCH,
    },
    PORK_CHOPS: {
        NAME: 'pork-chops',
        AMT: 330,
        TYPE: FOOD_TYPE.PROTEIN,
    },
    BREAD: {
        NAME: 'bread',
        AMT: 20,
        TYPE: FOOD_TYPE.STARCH,
    },
};

export const MEAL_INFO = {
    [MEAL.BFAST]: {
        LIMIT: 425,
        ITEMS: [
            FOOD.APPLE_J,
            FOOD.ORANGE_J,
            FOOD.OATMEAL,
            FOOD.CORNFLAKES,
            FOOD.SAUSAGES,
            FOOD.APPLE,
            FOOD.EGGS,
            FOOD.MILK,
        ],
        REVEAL: (
            <p>
                Excellent meal-planning!<br />
                Now let's move on to<br />
                <div className="soj-title">LUNCH</div>
            </p>
        ),
    },
    [MEAL.LUNCH]: {
        LIMIT: 1000,
        ITEMS: [
            FOOD.PIZZA,
            FOOD.RICE,
            FOOD.PEAS,
            FOOD.FRIES,
            FOOD.GRAPE_J,
            FOOD.HAMBERGER,
            FOOD.CHICKEN,
            FOOD.SOY_MILK,
        ],
        REVEAL: (
            <p>
                Amazing water conservation<br />
                skills! You've designed a great<br />
                lunch and helped the <br />
                environment. Next step:
                <div className="soj-title">DINNER!</div>
            </p>
        ),

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
            FOOD.PORK_CHOPS,
            FOOD.BREAD,
        ],
        REVEAL: (
            <p>
                You've instructed a fantastic dinner!<br />
                Thank you for saving water <br />
                when you eat!
            </p>
        ),

    },
    [MEAL.INSTRUCTIONS]: (
        <p>
            <div className="soj-title">INSTRUCTIONS</div>
            Drag and drop the food items into the plate<br />
            on the center. Fill each section of it and<br />
            stay under the water usage total. Keep track<br />
            of it using the drop meter on the right.
        </p>
    ),
};

