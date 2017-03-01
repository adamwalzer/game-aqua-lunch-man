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
    BFAST: {
        NAME: 'breakfast',
        ITEM: [
            { NAME: 'apple-juice', AMT: 34 },
            { NAME: 'orange-juice', AMT: 33 },
            { NAME: 'oatmeal', AMT: 73 },
            { NAME: 'cornflakes', AMT: 34 },
            { NAME: 'sausages', AMT: 330 },
            { NAME: 'apple', AMT: 27 },
            { NAME: 'eggs', AMT: 94 },
            { NAME: 'milk', AMT: 54 },
        ],
    },
    LUNCH: {
        NAME: 'lunch',
        ITEM: [

        ],
    },
    DINNER: {
        NAME: 'dinner',
        ITEM: [

        ],
    },
};

export const MEAL_REVEAL = {
    INSTRUCTIONS: (
        <div>
            <div className="soj-title">INSTRUCTIONS</div>
            Drag and drop the food items into the plate<br />
            on the center. Fill each section of it and<br />
            stay under the water usage total. Keep track<br />
            of it using the drop meter on the right.
        </div>
    ),
    BFAST: (
        <div>
            Excellent meal-planning!
            <div className="soj-title">Now let's move on to LUNCH</div>
        </div>
    ),
    LUNCH: (
        <div>
            Amazing water conservation<br />
            skills! You've designed a great<br />
            lunch and helped the <br />
            environment. Next step:
            <div className="soj-title">DINNER!</div>
        </div>
    ),
    DINNER: (
        <div>
            You've instructed a fantastic dinner!<br />
            Thank you for saving water <br />
            when you eat!
        </div>
    ),
};

