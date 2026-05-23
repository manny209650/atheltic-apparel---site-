// Rotates daily by day-of-year so each calendar date always shows the same entry
function getDailyItem(arr){
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now - start) / 86400000);
  return arr[day % arr.length];
}

const DAILY_VERSES = [
  {ref:'Philippians 4:13', text:'I can do all things through Christ who strengthens me.'},
  {ref:'Proverbs 3:5', text:'Trust in the Lord with all your heart and lean not on your own understanding.'},
  {ref:'Jeremiah 29:11', text:'For I know the plans I have for you, declares the Lord — plans to prosper you and not to harm you, plans to give you hope and a future.'},
  {ref:'Isaiah 40:31', text:'Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary.'},
  {ref:'Joshua 1:9', text:'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'},
  {ref:'Romans 8:28', text:'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.'},
  {ref:'Psalm 23:1', text:'The Lord is my shepherd, I lack nothing.'},
  {ref:'2 Timothy 1:7', text:'For God has not given us a spirit of fear, but of power and of love and of a sound mind.'},
  {ref:'Matthew 19:26', text:'With man this is impossible, but with God all things are possible.'},
  {ref:'Exodus 14:14', text:'The Lord will fight for you; you need only to be still.'},
  {ref:'Psalm 37:4', text:'Delight yourself in the Lord, and he will give you the desires of your heart.'},
  {ref:'Matthew 11:28', text:'Come to me, all you who are weary and burdened, and I will give you rest.'},
  {ref:'Philippians 4:6', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.'},
  {ref:'Psalm 46:1', text:'God is our refuge and strength, an ever-present help in trouble.'},
  {ref:'Psalm 34:19', text:'The righteous person may have many troubles, but the Lord delivers him from them all.'},
  {ref:'Matthew 7:7', text:'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.'},
  {ref:'Psalm 139:14', text:'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.'},
  {ref:'Isaiah 54:17', text:'No weapon forged against you will prevail, and you will refute every tongue that accuses you.'},
  {ref:'Psalm 46:10', text:'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'},
  {ref:'Proverbs 16:3', text:'Commit to the Lord whatever you do, and he will establish your plans.'},
  {ref:'John 15:13', text:'Greater love has no one than this: to lay down one\'s life for one\'s friends.'},
  {ref:'Proverbs 18:10', text:'The name of the Lord is a fortified tower; the righteous run to it and are safe.'},
  {ref:'John 16:33', text:'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart — I have overcome the world.'},
  {ref:'Psalm 55:22', text:'Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.'},
  {ref:'Galatians 6:9', text:'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.'},
  {ref:'Zephaniah 3:17', text:'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you.'},
  {ref:'Psalm 23:4', text:'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.'},
  {ref:'Philippians 4:19', text:'And my God will meet all your needs according to the riches of his glory in Christ Jesus.'},
  {ref:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'},
  {ref:'Numbers 6:24', text:'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.'},
  {ref:'Matthew 22:37', text:'Love the Lord your God with all your heart and with all your soul and with all your mind.'},
  {ref:'Ephesians 6:10', text:'Finally, be strong in the Lord and in his mighty power.'},
  {ref:'Jeremiah 17:7', text:'Blessed is the one who trusts in the Lord, whose confidence is in him.'},
  {ref:'John 15:5', text:'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.'},
  {ref:'Nehemiah 8:10', text:'The joy of the Lord is your strength.'},
  {ref:'Matthew 6:33', text:'Seek first his kingdom and his righteousness, and all these things will be given to you as well.'},
  {ref:'Isaiah 40:29', text:'He gives strength to the weary and increases the power of the weak.'},
  {ref:'1 Timothy 4:7', text:'Train yourself to be godly, for physical training is of some value, but godliness has value for all things.'},
  {ref:'Romans 12:2', text:'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.'},
  {ref:'Colossians 3:23', text:'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.'},
  {ref:'1 Corinthians 9:24', text:'Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize.'},
  {ref:'1 Corinthians 16:13', text:'Be on your guard; stand firm in the faith; be courageous; be strong.'},
  {ref:'1 Corinthians 6:19', text:'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?'},
  {ref:'1 Corinthians 6:20', text:'You were bought at a price. Therefore honor God with your bodies.'},
  {ref:'Proverbs 31:25', text:'She is clothed with strength and dignity; she can laugh at the days to come.'},
  {ref:'Proverbs 11:25', text:'A generous person will prosper; whoever refreshes others will be refreshed.'},
  {ref:'Proverbs 13:11', text:'Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.'},
  {ref:'Proverbs 22:1', text:'A good name is more desirable than great riches; to be esteemed is better than silver or gold.'},
  {ref:'Luke 6:38', text:'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.'},
  {ref:'Deuteronomy 28:12', text:'The Lord will open the heavens, the storehouse of his bounty, to send rain on your land in season and to bless all the work of your hands.'},
  {ref:'3 John 1:2', text:'Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well.'},
  {ref:'Romans 12:21', text:'Do not be overcome by evil, but overcome evil with good.'},
  {ref:'Proverbs 3:6', text:'In all your ways submit to him, and he will make your paths straight.'},
  {ref:'Ephesians 3:20', text:'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.'},
  {ref:'Psalm 27:1', text:'The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?'},
  {ref:'Isaiah 43:2', text:'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.'},
  {ref:'Romans 5:3-4', text:'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.'},
  {ref:'Psalm 91:11', text:'For he will command his angels concerning you to guard you in all your ways.'},
  {ref:'Habakkuk 2:2', text:'Write the vision; make it plain on tablets, so he may run who reads it.'},
  {ref:'Proverbs 4:23', text:'Above all else, guard your heart, for everything you do flows from it.'},
  {ref:'Isaiah 26:3', text:'You will keep in perfect peace those whose minds are steadfast, because they trust in you.'},
  {ref:'James 1:2-3', text:'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.'},
];

const DAILY_HEALTH = [
  {icon:'🥦', label:'Did You Know?', text:'Broccoli contains more vitamin C per ounce than oranges — and is packed with fiber and antioxidants that fight inflammation.'},
  {icon:'💪', label:'Macro Tip', text:'Protein has 4 calories per gram. Aim for 0.7–1g per pound of bodyweight daily to build and preserve muscle mass.'},
  {icon:'🍳', label:'Food of the Day', text:'Eggs are one of the most complete protein sources — containing all 9 essential amino acids your body cannot make on its own.'},
  {icon:'💧', label:'Did You Know?', text:'You can lose up to 2% body weight in water before you even feel thirsty — yet dehydration at just 1% noticeably impacts athletic performance.'},
  {icon:'🥑', label:'Food of the Day', text:'Avocados are loaded with healthy monounsaturated fats, potassium, and folate — great for heart health and hormone balance.'},
  {icon:'🔥', label:'Macro Tip', text:'Fat has 9 calories per gram — more than double protein or carbs. Focus on unsaturated fats from nuts, fish, and avocados.'},
  {icon:'😴', label:'Did You Know?', text:'Sleeping less than 6 hours per night raises hunger hormones (ghrelin) by up to 24%, making it significantly harder to stay in a calorie deficit.'},
  {icon:'🍗', label:'Food of the Day', text:'Chicken breast delivers about 26g of protein and only 3g of fat per 4oz serving — one of the leanest protein sources available.'},
  {icon:'🫐', label:'Did You Know?', text:'Blueberries have one of the highest antioxidant capacities of any fruit, helping reduce inflammation and oxidative stress after hard workouts.'},
  {icon:'🏃', label:'Macro Tip', text:'Carbs are your body\'s preferred fuel. Around workouts, fast-digesting carbs like rice and bananas help replenish glycogen quickly.'},
  {icon:'🐟', label:'Food of the Day', text:'Salmon provides omega-3 fatty acids that reduce muscle soreness, lower inflammation, and support brain health.'},
  {icon:'🧠', label:'Did You Know?', text:'Your brain is about 75% water. Even mild dehydration can cause brain fog, headaches, and mood shifts that tank your focus.'},
  {icon:'🥗', label:'Macro Tip', text:'Fiber isn\'t counted as a net carb because it doesn\'t raise blood sugar. Aim for 25–38g of fiber per day for gut and metabolic health.'},
  {icon:'🍠', label:'Food of the Day', text:'Sweet potatoes are a powerhouse carb — high in fiber, vitamin A, and potassium, with a low glycemic index that keeps energy steady.'},
  {icon:'⚡', label:'Did You Know?', text:'Caffeine peaks in your bloodstream 45 minutes after drinking it. Timing your pre-workout coffee right can boost performance by up to 12%.'},
  {icon:'🥛', label:'Food of the Day', text:'Greek yogurt delivers up to 20g of protein per cup and contains probiotics that support digestion and immune function.'},
  {icon:'🌿', label:'Did You Know?', text:'Magnesium is involved in over 300 bodily processes, yet 70% of Americans are deficient — it affects sleep, muscle recovery, and energy levels.'},
  {icon:'🍚', label:'Macro Tip', text:'White rice is not the enemy. It\'s easily digestible, fast-absorbing, and excellent for refueling muscles after an intense workout.'},
  {icon:'🥜', label:'Food of the Day', text:'Almonds are packed with healthy fats, vitamin E, magnesium, and protein — a handful is one of the best anytime snacks you can eat.'},
  {icon:'💦', label:'Did You Know?', text:'Drinking 500ml of water 30 minutes before a meal can reduce calorie intake by an average of 13% — a simple, free appetite control tool.'},
  {icon:'🍌', label:'Food of the Day', text:'Bananas are rich in potassium, which prevents muscle cramps, and natural sugars that provide quick energy before a workout.'},
  {icon:'🔁', label:'Macro Tip', text:'Your body burns calories even at rest. Your Basal Metabolic Rate (BMR) accounts for 60–75% of your total daily calorie burn.'},
  {icon:'🫀', label:'Did You Know?', text:'Regular exercise reduces your resting heart rate. Elite endurance athletes often have resting heart rates as low as 40 beats per minute.'},
  {icon:'🥚', label:'Did You Know?', text:'The yolk is not the enemy. Egg yolks contain choline essential for brain function, plus fat-soluble vitamins A, D, E, and K.'},
  {icon:'🍋', label:'Food of the Day', text:'Lemons are rich in vitamin C and citric acid — great for digestion, immune support, and improving iron absorption from plant foods.'},
  {icon:'💪', label:'Macro Tip', text:'Leucine, found in meat, dairy, and legumes, is the key amino acid that triggers muscle protein synthesis. Prioritize complete protein sources.'},
  {icon:'🧪', label:'Did You Know?', text:'Creatine is one of the most researched supplements in existence — it reliably increases strength, power, and high-intensity performance with no major side effects.'},
  {icon:'🥬', label:'Food of the Day', text:'Spinach is low in calories but high in iron, folate, and vitamin K — making it ideal for energy production and bone health.'},
  {icon:'☀️', label:'Did You Know?', text:'Vitamin D deficiency is linked to lower testosterone, weaker bones, depression, and reduced immune function. Get your levels checked annually.'},
  {icon:'🏋️', label:'Macro Tip', text:'To build muscle you need a slight calorie surplus (250–500 extra calories/day) with sufficient protein — not just lifting heavier weights.'},
  {icon:'🍒', label:'Food of the Day', text:'Tart cherries contain melatonin and antioxidants that speed up muscle recovery and improve sleep quality after training sessions.'},
  {icon:'🔥', label:'Did You Know?', text:'Muscle tissue burns about 6 calories per pound per day at rest — building muscle is one of the best long-term investments for your metabolism.'},
  {icon:'🧀', label:'Food of the Day', text:'Cottage cheese is high in casein protein, which digests slowly — making it an ideal nighttime snack to feed your muscles while you sleep.'},
  {icon:'💧', label:'Macro Tip', text:'Aim to drink at least half your body weight (in lbs) in ounces of water daily. Add more on intense training days and in hot weather.'},
  {icon:'🌰', label:'Did You Know?', text:'Walnuts are the only nut significantly high in plant-based omega-3 fatty acids (ALA), which support brain function and cardiovascular health.'},
  {icon:'🍏', label:'Food of the Day', text:'Apples contain quercetin, catechin, and chlorogenic acid — powerful antioxidants that reduce inflammation and support lung function.'},
  {icon:'⚖️', label:'Macro Tip', text:'1 pound of body fat equals roughly 3,500 calories. A 500-calorie daily deficit equals about 1 lb lost per week — slow, sustainable, and effective.'},
  {icon:'🧬', label:'Did You Know?', text:'Your gut houses over 100 trillion bacteria — more cells than your entire body. What you eat shapes your mood, immunity, and metabolism.'},
  {icon:'🥩', label:'Food of the Day', text:'Grass-fed beef is higher in omega-3s and conjugated linoleic acid (CLA) compared to grain-fed beef — better for muscle building and fat loss.'},
  {icon:'🌊', label:'Did You Know?', text:'Cold exposure like ice baths can reduce delayed onset muscle soreness (DOMS) by up to 20% after intense exercise sessions.'},
  {icon:'🍵', label:'Food of the Day', text:'Green tea contains EGCG, a powerful antioxidant that boosts metabolism, reduces fat oxidation, and improves brain function.'},
  {icon:'🏃', label:'Macro Tip', text:'Pre-workout: carbs + small protein. Post-workout: protein + carbs within 1–2 hours. Timing around training maximizes recovery and growth.'},
  {icon:'🔬', label:'Did You Know?', text:'Collagen makes up about 30% of your body\'s total protein content and is critical for joint health, skin elasticity, and tendon strength.'},
  {icon:'🫘', label:'Food of the Day', text:'Black beans deliver 15g of protein and 15g of fiber per cup — a budget-friendly, plant-based powerhouse for muscle and gut health.'},
  {icon:'🧠', label:'Did You Know?', text:'Intermittent fasting may increase brain-derived neurotrophic factor (BDNF), which promotes neural growth and protects against cognitive decline.'},
  {icon:'🥕', label:'Food of the Day', text:'Carrots are rich in beta-carotene, which converts to vitamin A — critical for vision, immune function, and skin health.'},
  {icon:'💊', label:'Macro Tip', text:'Zinc and magnesium (ZMA) taken before bed may improve testosterone levels and sleep quality — especially in athletes who sweat heavily.'},
  {icon:'🦐', label:'Did You Know?', text:'Shrimp delivers 18g of protein per 3oz with only 84 calories — one of the best high-protein, low-calorie foods you can eat.'},
  {icon:'🍫', label:'Food of the Day', text:'Dark chocolate (70%+) is loaded with flavanols that improve blood flow, lower blood pressure, and even boost athletic endurance.'},
  {icon:'🔋', label:'Did You Know?', text:'Carbohydrates stored as glycogen in your muscles and liver are your body\'s primary battery. Low glycogen equals fatigue, brain fog, and poor performance.'},
  {icon:'🌾', label:'Food of the Day', text:'Oats are a complex carb rich in beta-glucan fiber, which lowers cholesterol, stabilizes blood sugar, and feeds beneficial gut bacteria.'},
  {icon:'🏋️', label:'Macro Tip', text:'Protein timing matters less than total daily intake. Focus on hitting your protein goal consistently before worrying about meal timing windows.'},
  {icon:'🧊', label:'Did You Know?', text:'Brown fat actually burns calories to generate heat. Cold exposure activates brown fat and can boost overall metabolism over time.'},
  {icon:'🌿', label:'Food of the Day', text:'Quinoa is one of the few plant-based complete proteins — containing all 9 essential amino acids in a single ingredient.'},
  {icon:'⚡', label:'Did You Know?', text:'Your muscles don\'t grow during your workout — they grow during rest and recovery. Sleep and rest days are as important as your training sessions.'},
  {icon:'🫁', label:'Macro Tip', text:'Net carbs = Total carbs minus fiber. If you\'re watching carb intake, subtract fiber grams since they have minimal blood sugar impact.'},
  {icon:'🐟', label:'Food of the Day', text:'Canned tuna in water is one of the cheapest, most protein-dense foods available — 25g of protein per can with almost no fat.'},
  {icon:'🏃', label:'Did You Know?', text:'Zone 2 cardio (a conversational pace) improves mitochondrial density — essentially growing more energy engines inside your muscle cells.'},
  {icon:'🧅', label:'Food of the Day', text:'Onions contain quercetin and sulfur compounds that support heart health, reduce inflammation, and may naturally boost testosterone levels.'},
  {icon:'💡', label:'Macro Tip', text:'To find your TDEE, multiply your body weight (lbs) × 15 for moderate activity. Then adjust up to gain muscle or down to lose fat.'},
];

const DAILY_WEALTH = [
  {icon:'💰', label:'Rule of 72', text:'Divide 72 by your annual return rate to find how many years it takes to double your money. At 10% returns, your money doubles every 7.2 years.'},
  {icon:'📈', label:'Did You Know?', text:'Warren Buffett made 99% of his net worth after age 50. That\'s the true power of compound interest applied over a long enough time horizon.'},
  {icon:'🏦', label:'Wealth Tip', text:'Pay yourself first. Before any expense, automatically move at least 20% of your income into savings or investments. Make it non-negotiable.'},
  {icon:'💳', label:'Did You Know?', text:'The average American pays over $1,200 per year in credit card interest. Eliminating high-interest debt is the highest guaranteed return you can make.'},
  {icon:'🏠', label:'Wealth Tip', text:'Your primary home is not an investment — it\'s a liability until it produces income. True real estate wealth comes from rental properties and appreciation.'},
  {icon:'📊', label:'Did You Know?', text:'Index funds outperform 90% of actively managed funds over 15+ year periods. Boring, consistent investing almost always wins in the long run.'},
  {icon:'💡', label:'Wealth Tip', text:'The difference between rich and wealthy: rich is having money. Wealthy is having money work for you around the clock while you sleep.'},
  {icon:'🧾', label:'Did You Know?', text:'A $5/day coffee habit costs $1,825/year. That same amount invested at 10% annually for 30 years grows to over $300,000.'},
  {icon:'📚', label:'Wealth Tip', text:'Invest in yourself first. The highest ROI you\'ll ever get is learning a high-income skill that increases your earning potential by $10K+ per year.'},
  {icon:'💸', label:'Did You Know?', text:'70% of lottery winners are broke within 5 years. Wealth without financial education is just borrowed time.'},
  {icon:'🏋️', label:'Wealth Tip', text:'Treat your finances like a workout. Consistency beats intensity. Small daily habits executed over years beat sporadic big financial moves every time.'},
  {icon:'📉', label:'Did You Know?', text:'Every single recession in U.S. history has been followed by new all-time highs in the market. Downturns are temporary — your horizon is not.'},
  {icon:'🧠', label:'Wealth Tip', text:'The richest people in the world don\'t have jobs — they own assets. Your goal should be transitioning from income earner to asset owner.'},
  {icon:'💰', label:'Did You Know?', text:'Starting to invest $200/month at age 20 vs. age 30 results in $200,000+ more by retirement, assuming 8% average returns. Start now.'},
  {icon:'🔑', label:'Wealth Tip', text:'Multiple income streams are the key. The average millionaire has 7+ sources of income — salary, investments, rental income, business, and royalties.'},
  {icon:'📱', label:'Did You Know?', text:'The top highest-paid skills are all tech or communication-based. Learning to code, sell, or market can realistically double your income within 2 years.'},
  {icon:'🏦', label:'Wealth Tip', text:'Build a 3–6 month emergency fund before investing. You need a financial floor before you can build a ceiling. Protection before growth.'},
  {icon:'📈', label:'Did You Know?', text:'$10,000 invested in the S&P 500 in 2000 was worth approximately $60,000 by 2024 — despite two major crashes and multiple recessions in between.'},
  {icon:'💡', label:'Wealth Tip', text:'Time in the market beats timing the market. Every year you wait to invest costs you compound growth you can never recover.'},
  {icon:'🏡', label:'Did You Know?', text:'Real estate has historically doubled in value every 15–20 years in most U.S. markets, while also generating rental income along the way.'},
  {icon:'💼', label:'Wealth Tip', text:'Your network is your net worth. Every major income breakthrough starts with a relationship — not a resume.'},
  {icon:'📉', label:'Did You Know?', text:'Inflation erodes purchasing power by 2–3% per year. Money sitting in a savings account earning 0.5% is quietly losing value every single day.'},
  {icon:'🧮', label:'Wealth Tip', text:'Track every dollar. People who budget consistently are 3x more likely to feel financially secure than those who don\'t track their spending.'},
  {icon:'💰', label:'Did You Know?', text:'The median 401K balance for Americans aged 55–64 is only $87,000 — far below what\'s needed for retirement. Start now, not later.'},
  {icon:'🔋', label:'Wealth Tip', text:'Build recurring revenue. A subscription business, rental income, or dividend portfolio pays you whether you show up or not.'},
  {icon:'📊', label:'Did You Know?', text:'Compound interest works both ways. High-interest debt compounds against you. At 25% APR, a $5,000 balance costs $1,250/year in interest alone.'},
  {icon:'🏃', label:'Wealth Tip', text:'Move with urgency, not desperation. The best financial decisions are made with a clear head and a long-term vision — not fear.'},
  {icon:'💸', label:'Did You Know?', text:'Over 80% of millionaires in the U.S. are first-generation — meaning they didn\'t inherit wealth, they built it from scratch.'},
  {icon:'🧠', label:'Wealth Tip', text:'Rich people buy assets. Poor people buy liabilities. Assets put money in your pocket. Liabilities take money out. Know the difference.'},
  {icon:'🌍', label:'Did You Know?', text:'There are more self-made billionaires today than at any other point in history. The barrier to entry for building wealth has never been lower.'},
  {icon:'📚', label:'Wealth Tip', text:'Read one personal finance or business book per month. Over 10 years, that\'s 120 books of compounding knowledge separating you from the competition.'},
  {icon:'💰', label:'Did You Know?', text:'The average millionaire reads 2+ non-fiction books per month. Knowledge compounds just like money — the more you stack, the faster it grows.'},
  {icon:'🏗️', label:'Wealth Tip', text:'Build before you buy. Grow your income and investments before upgrading your lifestyle. Avoid lifestyle inflation at all costs.'},
  {icon:'📈', label:'Did You Know?', text:'Dollar-cost averaging — investing a fixed amount regularly regardless of price — historically outperforms trying to time the market.'},
  {icon:'🎯', label:'Wealth Tip', text:'Set a specific financial goal with a deadline. "I want $50,000 saved by December 2026" is infinitely more powerful than "I want to save money."'},
  {icon:'💡', label:'Did You Know?', text:'"The Richest Man in Babylon" (1926) popularized paying yourself first and is still one of the most powerful money books ever written — 100 years later.'},
  {icon:'💼', label:'Wealth Tip', text:'Your W-2 income has a ceiling. A business has no ceiling. The tax code also heavily favors business owners over employees.'},
  {icon:'🤑', label:'Did You Know?', text:'Taxes are the #1 expense for most Americans — more than housing, food, and transportation combined. Learning legal tax strategies is critical.'},
  {icon:'🔐', label:'Wealth Tip', text:'Max out your Roth IRA ($7,000/year) as early as possible. All growth is 100% tax-free when withdrawn in retirement.'},
  {icon:'🌱', label:'Did You Know?', text:'A Roth IRA maxed annually starting at age 18 can grow to over $2 million by age 65 — with zero taxes owed on withdrawal.'},
  {icon:'🧩', label:'Wealth Tip', text:'Diversification is protection. Spread assets across real estate, stocks, bonds, and business equity. Never have everything in one basket.'},
  {icon:'📊', label:'Did You Know?', text:'44% of Americans couldn\'t cover a $400 emergency without borrowing. An emergency fund isn\'t a luxury — it\'s your financial foundation.'},
  {icon:'💪', label:'Wealth Tip', text:'Investing in your health reduces long-term healthcare costs dramatically. Chronic illness is one of the leading causes of bankruptcy in the U.S.'},
  {icon:'🏦', label:'Did You Know?', text:'High-yield savings accounts currently pay 4–5% APY — 10x more than traditional savings accounts. Make every dollar of your savings work harder.'},
  {icon:'🌊', label:'Wealth Tip', text:'Live below your means, then invest the difference. It\'s never about how much you make — it\'s about how much you keep and multiply.'},
  {icon:'💡', label:'Did You Know?', text:'90% of startups fail, but the lessons from failure often produce the skills and mindset that drive the next venture to success.'},
  {icon:'🔑', label:'Wealth Tip', text:'Credit is a tool, not a lifestyle. Use it to build your score and earn rewards — but never carry a balance at high interest.'},
  {icon:'📈', label:'Did You Know?', text:'The stock market has returned an average of ~10% annually over the past century — despite wars, recessions, pandemics, and crashes.'},
  {icon:'🎓', label:'Wealth Tip', text:'Skills are inflation-proof. No matter what the economy does, a person with in-demand skills will always find a way to earn income.'},
  {icon:'💸', label:'Did You Know?', text:'The wealthiest 10% of Americans own 89% of all stocks. Consistent investing over time is the primary path into this group.'},
  {icon:'🧾', label:'Wealth Tip', text:'Track your net worth monthly — not just your bank balance. Net worth = total assets minus total liabilities. This is your real financial score.'},
  {icon:'🏠', label:'Did You Know?', text:'House hacking — living in one unit of a multi-family property while renting the others — can eliminate your housing expense entirely.'},
  {icon:'🚀', label:'Wealth Tip', text:'Solve bigger problems for more people and you\'ll naturally create more wealth. Income is a reflection of the value you provide to the world.'},
  {icon:'💰', label:'Did You Know?', text:'73% of self-made millionaires list consistent stock market investing as their primary wealth-building strategy — not just real estate or business alone.'},
  {icon:'🎯', label:'Wealth Tip', text:'Automate your finances: auto-pay bills, auto-invest in index funds, auto-transfer to savings. Removing emotion from money decisions leads to better outcomes.'},
  {icon:'📊', label:'Did You Know?', text:'The average return on a degree in high-earning fields like engineering or computer science is 15–20% annually — better than most investments.'},
  {icon:'💡', label:'Wealth Tip', text:'Think in decades, not days. Financial freedom isn\'t built in a month — but 10 years of consistent habits will change your family\'s entire trajectory.'},
  {icon:'🔥', label:'Did You Know?', text:'The FIRE movement is based on saving 50–70% of income. At a 50% savings rate, you can retire in approximately 17 years regardless of income level.'},
  {icon:'🌍', label:'Wealth Tip', text:'Tithe and give generously. Studies consistently show that givers accumulate more wealth over time — generosity and abundance are both spiritually and statistically linked.'},
  {icon:'💪', label:'Did You Know?', text:'Building wealth and building a body follow the same laws: consistency + patience + compound effort over time = results that most people never achieve.'},
];

function renderDailyCard(type){
  const configs = {
    verse: {
      item: getDailyItem(DAILY_VERSES),
      color: 'rgba(224,32,32,.15)',
      border: 'rgba(224,32,32,.3)',
      tag: '✝ VERSE OF THE DAY',
      render: (item) => `<p class="dc-text">"${item.text}"</p><p class="dc-ref">— ${item.ref}</p>`
    },
    health: {
      item: getDailyItem(DAILY_HEALTH),
      color: 'rgba(45,154,90,.1)',
      border: 'rgba(45,154,90,.3)',
      tag: null,
      render: (item) => `<p class="dc-label">${item.icon} ${item.label}</p><p class="dc-text">${item.text}</p>`
    },
    wealth: {
      item: getDailyItem(DAILY_WEALTH),
      color: 'rgba(195,149,60,.1)',
      border: 'rgba(195,149,60,.3)',
      tag: null,
      render: (item) => `<p class="dc-label">${item.icon} ${item.label}</p><p class="dc-text">${item.text}</p>`
    }
  };
  const c = configs[type];
  if(!c) return '';
  const dateStr = new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  return `<div class="dc-card" style="background:${c.color};border-color:${c.border}">
    <p class="dc-date">${c.tag || (type==='health'?'🥗 HEALTH FACT OF THE DAY':'💰 WEALTH TIP OF THE DAY')}</p>
    ${c.render(c.item)}
  </div>`;
}

function initDailyContent(){
  const CSS = `
  .dc-section{padding:40px 0 20px;max-width:900px;margin:0 auto;display:grid;gap:20px}
  .dc-section.three-col{grid-template-columns:repeat(3,1fr)}
  .dc-section.one-col{grid-template-columns:1fr}
  .dc-section.two-col{grid-template-columns:repeat(2,1fr)}
  .dc-card{border:1px solid;padding:28px 24px;position:relative}
  .dc-date{font-size:.52rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:14px;font-weight:700}
  .dc-label{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:10px;font-weight:600}
  .dc-text{font-size:.88rem;color:rgba(255,255,255,.85);line-height:1.7;font-style:italic}
  .dc-ref{font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-top:12px}
  .dc-outer{padding:60px 24px;border-top:1px solid rgba(255,255,255,.06)}
  .dc-heading{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.2em;text-align:center;color:rgba(255,255,255,.3);margin-bottom:28px}
  .dc-sub{max-width:900px;margin:24px auto 0;border:1px solid rgba(195,149,60,.25);background:rgba(195,149,60,.05);padding:28px 24px;text-align:center}
  .dc-sub-title{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.15em;color:#fff;margin-bottom:6px}
  .dc-sub-desc{font-size:.72rem;letter-spacing:.08em;color:rgba(255,255,255,.45);margin-bottom:18px}
  .dc-sub-form{display:flex;gap:10px;max-width:420px;margin:0 auto}
  .dc-sub-input{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);color:#fff;padding:11px 14px;font-size:.8rem;outline:none}
  .dc-sub-input::placeholder{color:rgba(255,255,255,.3)}
  .dc-sub-btn{background:linear-gradient(135deg,#C3953C,#E8B84B);color:#07072A;font-size:.62rem;letter-spacing:.2em;font-weight:700;padding:11px 20px;border:none;cursor:pointer;white-space:nowrap;text-transform:uppercase}
  .dc-sub-thanks{font-size:.78rem;color:rgba(195,149,60,.9);margin-top:12px;display:none}
  @media(max-width:768px){.dc-section.three-col,.dc-section.two-col{grid-template-columns:1fr}.dc-sub-form{flex-direction:column}}
  `;
  if(!document.getElementById('dc-styles')){
    const s = document.createElement('style');
    s.id = 'dc-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  document.querySelectorAll('[data-daily]').forEach(el=>{
    const types = el.dataset.daily.split(',');
    const cols = types.length === 3 ? 'three-col' : types.length === 2 ? 'two-col' : 'one-col';
    el.innerHTML = `
      <p class="dc-heading">TODAY · ${new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}).toUpperCase()}</p>
      <div class="dc-section ${cols}">${types.map(t=>renderDailyCard(t.trim())).join('')}</div>
      <div class="dc-sub">
        <p class="dc-sub-title">Get Daily Drops in Your Inbox</p>
        <p class="dc-sub-desc">Verse · Health Fact · Wealth Tip — delivered every morning. Free.</p>
        <form class="dc-sub-form" onsubmit="dcSubscribe(event,this)">
          <input class="dc-sub-input" type="email" placeholder="your@email.com" required>
          <button class="dc-sub-btn" type="submit">Subscribe</button>
        </form>
        <p class="dc-sub-thanks">You're in. Check your inbox tomorrow morning. 🙏</p>
      </div>`;
  });
}

function dcSubscribe(e, form){
  e.preventDefault();
  const email = form.querySelector('input[type=email]').value;
  // Submit to Formspree — replace FORMSPREE_ID with your form ID from formspree.io
  fetch('https://formspree.io/f/mredlzrv', {
    method:'POST',
    headers:{'Content-Type':'application/json','Accept':'application/json'},
    body: JSON.stringify({email, source: window.location.pathname})
  }).then(()=>{
    form.style.display = 'none';
    form.nextElementSibling.style.display = 'block';
  }).catch(()=>{
    form.style.display = 'none';
    form.nextElementSibling.style.display = 'block';
  });
}

document.addEventListener('DOMContentLoaded', initDailyContent);
