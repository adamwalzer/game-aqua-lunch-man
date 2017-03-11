export const LEFT = 'left';
export const RIGHT = 'right';

export const INFO_SCREEN = [
    {
        vo: 'somefoods',
        text : (
            <div>
                Some foods need<br />
                more water than others<br />
                to be produced.<br /><br />
                In this game,<br />
                click on what food item<br />
                you think users <br />
                the least water.
            </div>
        ),
    },
    {
        vo: 'greatjob',
        text : (
            <div>
                <span className="soj-title">GREAT JOB!</span><br />
                You have the power to<br />
                help save water<br />
                by making smart food choices!
            </div>
        ),
    },
    {
        vo: 'dailymeals',
        text : (
            <div>
                Now let's see<br />
                how much water<br />
                is used for your<br />
                daily meals.
            </div>
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

export const FOOD = {
    APPLE_J: 'apple-juice',
    ORANGE_J: 'orange-juice',
    OATMEAL: 'oatmeal',
    CORNFLAKES: 'cornflakes',
    SAUSAGES: 'sausages',
    APPLE: 'apple',
    EGGS: 'eggs',
    MILK: 'milk',
    BANANA: 'banana',
    PIZZA: 'pizza',
    RICE: 'rice',
    PEAS: 'peas',
    FRIES: 'fries',
    GRAPE_J: 'grape-juice',
    HAMBURGER: 'hamburger',
    CHICKEN: 'chicken',
    SOY_MILK: 'soy-milk',
    SALAD: 'salad',
    STEAK: 'steak',
    TOFU: 'tofu',
    PASTA: 'pasta',
    CORN: 'corn',
    PORK_CHOPS: 'pork-chops',
    BREAD: 'bread',
};

export const FOOD_INFO = {
    [FOOD.APPLE_J]:    { AMT: 34,  TYPE: FOOD_TYPE.BEV, },
    [FOOD.ORANGE_J]:   { AMT: 33,  TYPE: FOOD_TYPE.BEV, },
    [FOOD.OATMEAL]:    { AMT: 73,  TYPE: FOOD_TYPE.STARCH, },
    [FOOD.CORNFLAKES]: { AMT: 34,  TYPE: FOOD_TYPE.STARCH, },
    [FOOD.SAUSAGES]:   { AMT: 330, TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.APPLE]:      { AMT: 27,  TYPE: FOOD_TYPE.FRUITVEG, },
    [FOOD.EGGS]:       { AMT: 94,  TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.MILK]:       { AMT: 54,  TYPE: FOOD_TYPE.BEV, },
    [FOOD.BANANA]:     { AMT: 46,  TYPE: FOOD_TYPE.FRUITVEG, },
    [FOOD.PIZZA]:      { AMT: 321, TYPE: FOOD_TYPE.STARCH, },
    [FOOD.RICE]:       { AMT: 98,  TYPE: FOOD_TYPE.BEV, },
    [FOOD.PEAS]:       { AMT: 356, TYPE: FOOD_TYPE.FRUITVEG, },
    [FOOD.FRIES]:      { AMT: 15,  TYPE: FOOD_TYPE.STARCH, },
    [FOOD.GRAPE_J]:    { AMT: 22,  TYPE: FOOD_TYPE.BEV, },
    [FOOD.HAMBURGER]:  { AMT: 330, TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.CHICKEN]:    { AMT: 94,  TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.SOY_MILK]:   { AMT: 164, TYPE: FOOD_TYPE.BEV, },
    [FOOD.SALAD]:      { AMT: 15,  TYPE: FOOD_TYPE.FRUITVEG, },
    [FOOD.STEAK]:      { AMT: 330, TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.TOFU]:       { AMT: 244, TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.PASTA]:      { AMT: 100, TYPE: FOOD_TYPE.STARCH, },
    [FOOD.CORN]:       { AMT: 107, TYPE: FOOD_TYPE.STARCH, },
    [FOOD.PORK_CHOPS]: { AMT: 330, TYPE: FOOD_TYPE.PROTEIN, },
    [FOOD.BREAD]:      { AMT: 20,  TYPE: FOOD_TYPE.STARCH, },
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
            FOOD.BANANA,
        ],
        REVEAL: (
            <div>
                Excellent meal-planning!<br />
                Now let's move on to<br />
                <div className="soj-title">LUNCH</div>
            </div>
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
            FOOD.SALAD,
        ],
        REVEAL: (
            <div>
                Amazing water conservation<br />
                skills! You've designed a great<br />
                lunch and helped the <br />
                environment. Next step:
                <div className="soj-title">DINNER!</div>
            </div>
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
            <div>
                You've instructed a fantastic dinner!<br />
                Thank you for saving water <br />
                when you eat!
            </div>
        ),

    },
    [MEAL.INSTRUCTIONS]: (
        <div>
            <div className="soj-title">INSTRUCTIONS</div>
            Drag and drop the food items into the plate<br />
            on the center. Fill each section of it and<br />
            stay under the water usage total. Keep track<br />
            of it using the drop meter on the right.
        </div>
    ),
};

