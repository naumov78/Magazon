
State.delete_all
Payment.delete_all
Network.delete_all
Address.delete_all
User.delete_all
CartProduct.delete_all
Cart.delete_all
Category.delete_all
ProductCategory.delete_all
Product.delete_all

Alabama = State.create!(state: "Alabama")
Alaska = State.create!(state: "Alaska")
Arizona = State.create!(state: "Arizona")
Arkansas = State.create!(state: "Arkansas")
California = State.create!(state: "California")
Colorado = State.create!(state: "Colorado")
Connecticut = State.create!(state: "Connecticut")
Delaware = State.create!(state: "Delaware")
Florida = State.create!(state: "Florida")
Georgia = State.create!(state: "Georgia")
Hawaii = State.create!(state: "Hawaii")
Idaho = State.create!(state: "Idaho")
Illinois = State.create!(state: "Illinois")
Indiana = State.create!(state: "Indiana")
Iowa = State.create!(state: "Iowa")
Kansas = State.create!(state: "Kansas")
Kentucky = State.create!(state: "Kentucky")
Louisiana = State.create!(state: "Louisiana")
Maine = State.create!(state: "Maine")
Maryland = State.create!(state: "Maryland")
Massachusetts = State.create!(state: "Massachusetts")
Michigan = State.create!(state: "Michigan")
Minnesota = State.create!(state: "Minnesota")
Mississippi = State.create!(state: "Mississippi")
Missouri = State.create!(state: "Missouri")
Montana = State.create!(state: "Montana")
Nebraska = State.create!(state: "Nebraska")
Nevada = State.create!(state: "Nevada")
NewHampshire = State.create!(state: "New Hampshire")
NewJersey = State.create!(state: "New Jersey")
NewMexico = State.create!(state: "New Mexico")
NewYork = State.create!(state: "New York")
NorthCarolina = State.create!(state: "North Carolina")
NorthDakota = State.create!(state: "North Dakota")
Ohio = State.create!(state: "Ohio")
Oklahoma = State.create!(state: "Oklahoma")
Oregon = State.create!(state: "Oregon")
Pennsylvania = State.create!(state: "Pennsylvania")
RhodeIsland = State.create!(state: "Rhode Island")
SouthCarolina = State.create!(state: "South Carolina")
SouthDakota = State.create!(state: "South Dakota")
Tennessee = State.create!(state: "Tennessee")
Texas = State.create!(state: "Texas")
Utah = State.create!(state: "Utah")
Vermont = State.create!(state: "Vermont")
Virginia = State.create!(state: "Virginia")
Washington = State.create!(state: "Washington")
WestVirginia = State.create!(state: "West Virginia")
Wisconsin = State.create!(state: "Wisconsin")
Wyoming = State.create!(state: "Wyoming")


AmericanExpress = Network.create!(network: "AmericanExpress")
Discover = Network.create!(network: "Discover")
MasterCard = Network.create!(network: "MasterCard")
Visa = Network.create!(network: "Visa")


books = Category.create!(title: 'Books')
movies = Category.create!(title: 'Movies')
music = Category.create!(title: 'Music')
games = Category.create!(title: 'Games')
electronics = Category.create!(title: 'Electroniics')
computers = Category.create!(title: 'Computers')
home = Category.create!(title: 'Home')
garden = Category.create!(title: 'Garden')
tools = Category.create!(title: 'Tools')
sports = Category.create!(title: 'Sports')



user1 = User.create!(first_name: "Bob", last_name: "Smith", email: "smith@gmail.com", password: "123456")
address1 = Address.create!(user_id: user1.id, street: "2755 East 21st St.", street2: "Apt. #3", city: "Brooklyn", state_id: NewYork.id, zip: 11235)
payment1 = Payment.create!(user_id: user1.id, network_id: Visa.id, cardholder: "Bob Smith", card_number: "1234567890123456", cvv: "953", expires: 20200401)
watched_list1 = WatchedList.create!(user_id: user1.id)
user1.watched_list_id = watched_list1.id
user1.address_id = address1.id
user1.payment_id = payment1.id
user1.save


product1 = Product.create!(
title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions',
brief_description: 'I am not a recruiter. I am a software engineer. And as such, I know what it\'s like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I\'ve been through this as a candidate and as an interviewer. Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I\'ve coached and interviewed hundreds of software engineers. The result is this book.',
full_description: 'I am not a recruiter. I am a software engineer. And as such, I know what it\'s like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I\'ve been through this as a candidate and as an interviewer. Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I\'ve coached and interviewed hundreds of software engineers. The result is this book.
Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.
These interview questions are real; they are not pulled out of computer science textbooks. They reflect what\'s truly being asked at the top companies, so that you can be as prepared as possible.',
price: 26.79,
storefront: true,
category_id: books.id)

fbt1 = FrequentlyBoughtTogether.create!(product_id: product1.id)
product1.frequently_bought_together_id = fbt1.id
product1.save!

picture1_1 = ProductPicture.create!(product_id: product1.id, image: File.open(File.join(Rails.root, 'app', 'assets', 'images', 'book1', '020.jpeg')) )
# picture1_1.image = Rails.root.join("app/assets/images/book1/020.jpeg").open
# picture1_1.image = File.open(Rails.root.join('app', 'assets', 'images', 'book1', '020.jpeg'))
# picture1_1.save!

product2 = Product.create!(
title: 'Beauty and the Beast: 25th Anniversary Edition - (BD+DVD+DIGITAL HD) [Blu-ray]',
full_description: 'Be our guest at the enchanted 25th Anniversary celebration of BEAUTY AND THE BEAST, universally acclaimed as one of Disney\'s finest animated features and now honored in the Walt Disney Signature Collection. Join brave, independent Belle on the adventure of a lifetime as she sets out to rescue her father and finds herself in the enchanted castle of a mysterious beast. Enjoy this timeless tale overflowing with unforgettable characters and Academy Award(R)-winning music (Best Song, Best Score, 1991)! | It took more than 600 animators, artists, and technicians three and a half years to complete the project.| BEAUTY is the first animated Disney feature scripted by a woman, Linda Woolverton.| The film marked the first time each animator was credited on screen specifically for the character he or she brought to life.| Disney\'s animation department won a Scientific and Technical Academy Award for the design and development of the Computer Animated Production System used to make the film.| The style of illustration was inspired by French painters Fragonard and Boucher.',
price: 19.99,
storefront: true,
category_id: movies.id)

fbt2 = FrequentlyBoughtTogether.create!(product_id: product2.id)
product2.frequently_bought_together_id = fbt2.id
product2.save!

picture2_1 = ProductPicture.create!(product_id: product2.id)
picture2_1.image = File.open(File.join(Rails.root, 'app/assets/images/video1/021.jpg'))
picture2_1.save!

product3 = Product.create!(
title: 'Sauder Beginnings 4-Drawer Chest, Cinnamon Cherry',
brief_description: 'This Product Four easy-glide drawers with safety stops .Three lower drawers are extra-deep. Made in USA.',
full_description: 'This Product Four easy-glide drawers with safety stops .Three lower drawers are extra-deep. Made in USA.',
price: 85.00,
storefront: true,
category_id: home.id)

fbt3 = FrequentlyBoughtTogether.create!(product_id: product3.id)
product3.frequently_bought_together_id = fbt3.id
product3.save!

picture3_1 = ProductPicture.create!(product_id: product3.id)
picture3_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf1/011.jpg'))
picture3_1.save!
picture3_2 = ProductPicture.create!(product_id: product3.id)
picture3_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf1/012.jpg'))
picture3_2.save!

product4 = Product.create!(
title: 'Elite 54" Wall Cabinet',
brief_description: 'This 3-door cabinet is 54 inches wide, which is the ideal width for placement above a standard washer and dryer.',
full_description: 'This 3-door cabinet is 54 inches wide, which is the ideal width for placement above a standard washer and dryer. It includes 2 adjustable shelves and the doors can be attached to open to the left or to the right depending or your room configuration. ELITE’s quality features include distinctive Soft Edged Doors, Designer Hardware, Attractive Finishes and European Style Hinges. Note - The 54” Wall Cabinet has been designed as a stand-alone piece and is best suited for above a washer & dryer. It is shallower (12” deep) than the other wall cabinets from the Elite Storage Collection (16” deep).',
price: 122.48,
storefront: true,
category_id: home.id)

fbt4 = FrequentlyBoughtTogether.create!(product_id: product4.id)
product4.frequently_bought_together_id = fbt4.id
product4.save!

picture4_1 = ProductPicture.create!(product_id: product4.id)
picture4_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/013.jpg'))
picture4_1.save!
picture4_2 = ProductPicture.create!(product_id: product4.id)
picture4_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/014.jpg'))
picture4_2.save!
picture4_3 = ProductPicture.create!(product_id: product4.id)
picture4_3.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/015.jpg'))
picture4_3.save!
picture4_4 = ProductPicture.create!(product_id: product4.id)
picture4_4.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/016.jpg'))
picture4_4.save!
picture4_5 = ProductPicture.create!(product_id: product4.id)
picture4_5.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/017.jpg'))
picture4_5.save!

product5 = Product.create!(
title: 'Elite 32" Wardrobe Cabinet',
brief_description: 'This 20-inch deep Wardrobe Cabinet includes one hanging rail for clothes as well as a fixed top shelf for hats and other small items.',
full_description: 'This 20-inch deep Wardrobe Cabinet includes one hanging rail for clothes as well as a fixed top shelf for hats and other small items. Use alone or add the optional 32” Topper (WEW-3224) for 89” high storage. ELITE’s quality features include distinctive Soft Edged Doors, Designer Hardware, Attractive Finishes and European Style Hinges',
price: 125.35,
storefront: true,
category_id: home.id)

fbt5 = FrequentlyBoughtTogether.create!(product_id: product5.id)
product5.frequently_bought_together_id = fbt5.id
product5.save!

picture5_1 = ProductPicture.create!(product_id: product5.id)
picture5_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf3/018.jpg'))
picture5_1.save!
picture5_2 = ProductPicture.create!(product_id: product5.id)
picture5_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf3/019.jpg'))
picture5_2.save!
picture5_3 = ProductPicture.create!(product_id: product5.id)
picture5_3.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/017.jpg'))
picture5_3.save!

product6 = Product.create!(
title: 'Convenience Concepts 2-Tier Plant Stand, Chinese Fir',
brief_description: 'The Double Barrel Planter will bring life to any yard or garden. Featuring 2 Barrel planters and a trellis which allows plenty of room for different plants to grow and make this a charming home. Constructed from Chinese Fir Wood with a Red Cedar finish and slatted bottoms, this planter is sure to stand the test of time.',
full_description: 'The Double Barrel Planter will bring life to any yard or garden. Featuring 2 Barrel planters and a trellis which allows plenty of room for different plants to grow and make this a charming home. Constructed from Chinese Fir Wood with a Red Cedar finish and slatted bottoms, this planter is sure to stand the test of time.',
price: 56.31,
storefront: true,
category_id: garden.id)

fbt6 = FrequentlyBoughtTogether.create!(product_id: product6.id)
product6.frequently_bought_together_id = fbt6.id
product6.save!

picture6_1 = ProductPicture.create!(product_id: product6.id)
picture6_1.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/006.jpg'))
picture6_1.save!
picture6_2 = ProductPicture.create!(product_id: product6.id)
picture6_2.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/007.jpg'))
picture6_2.save!
picture6_3 = ProductPicture.create!(product_id: product6.id)
picture6_3.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/008.jpg'))
picture6_3.save!

product7 = Product.create!(
title: 'Brussel\'s Golden Gate Ficus Bonsai',
brief_description: 'Imported from China, our Golden Gate Ficus have been meticulously trained for wonderful truck movement. The Chinese have hand-wired every tree to create the trunks\’ beautiful swirl. The small dark green leaves make the Golden Ficus perfectly suited for bonsai. In the ficus family, this variety is the best for growing indoors.',
full_description: 'Imported from China, the Golden Gate ficus’s graceful trunk is the product of meticulous training. Chinese bonsai experts hand-wire every branch, shaping them into elegant swirls. One of the best indoor growing bonsai, the small, dark-green leaved ficus is a good choice for beginners. This tree is seven years, 10 to 12 inches tall, and comes in a 12-inch rectangular pot. Every tree order includes specific growing instructions.',
price: 46.26,
storefront: true,
category_id: garden.id)

fbt7 = FrequentlyBoughtTogether.create!(product_id: product7.id)
product7.frequently_bought_together_id = fbt7.id
product7.save!

picture7_1 = ProductPicture.create!(product_id: product7.id)
picture7_1.image = File.open(File.join(Rails.root, 'app/assets/images/kust/005.jpg'))
picture7_1.save!

product8 = Product.create!(
title: 'Catan 5th Edition',
brief_description: 'Your adventurous settlers seek to tame the remote but rich isle of Catan. Start by revealing Catan’s many harbors and regions: pastures, fields, mountains, hills, forests, and desert. The random mix creates a different board virtually every game.',
full_description: 'Your adventurous settlers seek to tame the remote but rich isle of Catan. Start by revealing Catan’s many harbors and regions: pastures, fields, mountains, hills, forests, and desert. The random mix creates a different board virtually every game. Guide your settlers to victory by clever trading and cunning development. Use resource combinations— grain, wool, ore, brick, and lumber—to buy handy development cards and build roads, settlements, and cities. Acquire your resources through trades, cards, or lucky dice (even outside your turn). But beware! Someone might cut off your road or buy a monopoly. And you never know when the wily robber might steal some of your precious gains!',
price: 27.49,
storefront: true,
category_id: games.id)

fbt8 = FrequentlyBoughtTogether.create!(product_id: product8.id)
product8.frequently_bought_together_id = fbt8.id
product8.save!

picture8_1 = ProductPicture.create!(product_id: product8.id)
picture8_1.image = File.open(File.join(Rails.root, 'app/assets/images/catan/001.jpg'))
picture8_1.save!
picture8_2 = ProductPicture.create!(product_id: product8.id)
picture8_2.image = File.open(File.join(Rails.root, 'app/assets/images/catan/002.jpg'))
picture8_2.save!
picture8_3 = ProductPicture.create!(product_id: product8.id)
picture8_3.image = File.open(File.join(Rails.root, 'app/assets/images/catan/003.jpg'))
picture8_3.save!
picture8_4 = ProductPicture.create!(product_id: product8.id)
picture8_4.image = File.open(File.join(Rails.root, 'app/assets/images/catan/004.jpg'))
picture8_4.save!
picture8_5 = ProductPicture.create!(product_id: product8.id)
picture8_5.image = File.open(File.join(Rails.root, 'app/assets/images/catan/005.jpg'))
picture8_5.save!
picture8_6 = ProductPicture.create!(product_id: product8.id)
picture8_6.image = File.open(File.join(Rails.root, 'app/assets/images/catan/006.jpg'))
picture8_6.save!


product9 = Product.create!(
title: '7 Wonders',
brief_description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
full_description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
price: 27.99,
storefront: true,
category_id: games.id)

fbt9 = FrequentlyBoughtTogether.create!(product_id: product9.id)
product9.frequently_bought_together_id = fbt9.id
product9.save!

picture9_1 = ProductPicture.create!(product_id: product9.id)
picture9_1.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/001.jpg'))
picture9_1.save!
picture9_2 = ProductPicture.create!(product_id: product9.id)
picture9_2.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/002.jpg'))
picture9_2.save!
picture9_3 = ProductPicture.create!(product_id: product9.id)
picture9_3.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/003.jpg'))
picture9_3.save!
picture9_4 = ProductPicture.create!(product_id: product9.id)
picture9_4.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/004.jpg'))
picture9_4.save!

product10 = Product.create!(
title: 'Acer Aspire VX 15 Gaming Laptop, 7th Gen Intel Core i7, NVIDIA GeForce GTX 1050 Ti, 15.6 Full HD, 16GB DDR4, 256GB SSD, VX5-591G-75RM',
brief_description: 'Acer Aspire VX 15 VX5-591G-75RM Gaming Notebook comes with these high level specs: 7th Generation Intel Core i7-7700HQ Processor 2.8GHz with Turbo Boost Technology up to 3.8GHz, 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display, NVIDIA GeForce GTX 1050 Ti with 4 GB of dedicated GDDR5 VRAM, 16GB DDR4 2400MHz Memory, 256GB SSD, Acer True Harmony Technology, Two Built-in Stereo Speakers, Built-in Digital Microphone, Secure Digital (SD) card reader, 802.11ac Wi-Fi featuring 2x2 MU-MIMO technology (Dual-Band 2.4GHz and 5GHz), Bluetooth 4.0, 10/100/1000 Gigabit Ethernet LAN (RJ-45 port), HD Webcam (1280 x 720) supporting High Dynamic Range (HDR), 1 - USB 3.1 (Type C) port (Gen 1 up to 5 Gbps), 2 - USB 3.0 Ports (One with Power-off Charging), 1 - USB 2.0 Port, 1 - HDMI Port, 3-cell Li-ion Battery (4605 mAh), Up to 6-hours Battery Life, 5.51 lbs. | 2.5 kg (system unit only) (NH.GM4AA.001).',
full_description: 'In the case of the Aspire VX 15, looks can kill! This soon-to-be battlefield gaming icon utilizes a hard-edged futuristic design with sleek lines and angles—and an impressive, 15.6” Full HD Display—to put you in total command of all the action. It combines a powerful 7th Gen Intel Core i7-7700HQ processor with high-performance NVIDIA GeForce GTX 1050 Ti graphics driven by the new NVIDIA Pascal architecture. The advanced cooling and stellar audio capabilities support intense gaming sessions while the illuminating iron-red keyboard adds to the drama.',
price: 999.99,
storefront: true,
category_id: computers.id)

fbt10 = FrequentlyBoughtTogether.create!(product_id: product10.id)
product10.frequently_bought_together_id = fbt10.id
product10.save!

picture10_1 = ProductPicture.create!(product_id: product10.id)
picture10_1.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/001.jpg'))
picture10_1.save!
picture10_2 = ProductPicture.create!(product_id: product10.id)
picture10_2.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/002.jpg'))
picture10_2.save!
picture10_3 = ProductPicture.create!(product_id: product10.id)
picture10_3.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/003.jpg'))
picture10_3.save!
picture10_4 = ProductPicture.create!(product_id: product10.id)
picture10_4.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/004.jpg'))
picture10_4.save!
picture10_5 = ProductPicture.create!(product_id: product10.id)
picture10_5.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/006.jpg'))
picture10_5.save!


product11 = Product.create!(
title: 'Weber 46510001 Spirit E310 Liquid Propane Gas Grill, Black',
brief_description: 'Redesigned in 2013, the new Spirit E-310 LP gas grill is complete with all the essential features a griller could want in an affordable package.',
full_description: 'Redesigned in 2013, the new Spirit E-310 LP gas grill is complete with all the essential features a griller could want in an affordable package. With the control panel conveniently moved to the front, two full-use stainless steel tables allow for food platters and prep. The grill offers enough room to cook a 20-pound turkey or roast meats and vegetables at the same time. Porcelain-enameled cast-iron cooking grates provide superior heat retention and clean up easily, and the durable porcelain-enameled shroud will not fade, peel or rust. An Electronic Crossover ignition system lights the three burners with just one touch of the igniter button, and an easy-to-read fuel gauge accurately measures the amount of LP gas in the tank.',
price: 499.00,
storefront: true,
category_id: garden.id
)

fbt11 = FrequentlyBoughtTogether.create!(product_id: product11.id)
product11.frequently_bought_together_id = fbt11.id
product11.save!

picture11_1 = ProductPicture.create!(product_id: product11.id)
picture11_1.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/001.jpg'))
picture11_1.save!
picture11_2 = ProductPicture.create!(product_id: product11.id)
picture11_2.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/002.jpg'))
picture11_2.save!
picture11_3 = ProductPicture.create!(product_id: product11.id)
picture11_3.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/003.jpg'))
picture11_3.save!
picture11_4 = ProductPicture.create!(product_id: product11.id)
picture11_4.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/004.jpg'))
picture11_4.save!


product12 = Product.create!(
title: 'Amish Wagon Decorative Garden Planter, Green, Weathered',
brief_description: 'Showcase flowers & plants and create sensational seasonal displays with our Amish Country Wagon.',
full_description: 'Showcase flowers & plants and create sensational seasonal displays with our Amish Country Wagon. Crafted from wood with rolling iron wheels. Measures 44 1/4"L (includes handle), x 14 1/2"W x 15 1/2"H. Length of the wagon is 21.75" without the handle. Some assembly required. Specify Blue, Country Red or Green.',
price: 19.99,
storefront: true,
category_id: garden.id
)

fbt12 = FrequentlyBoughtTogether.create!(product_id: product12.id)
product12.frequently_bought_together_id = fbt12.id
product12.save!

picture12_1 = ProductPicture.create!(product_id: product12.id)
picture12_1.image = File.open(File.join(Rails.root, 'app/assets/images/telega/009.jpg'))
picture12_1.save!
picture12_2 = ProductPicture.create!(product_id: product12.id)
picture12_2.image = File.open(File.join(Rails.root, 'app/assets/images/telega/010.jpg'))
picture12_2.save!


product13 = Product.create!(
title: 'Briggs and Stratton 1696619 Dual-Stage Snow Thrower with 250cc Engine and Electric Start',
brief_description: 'The Briggs & Stratton 1696619 Medium-Duty Dual-Stage Snow Thrower features a 27-inch wide clearing path with a 20 inch intake height for clearing snow from sidewalks and other outdoor surfaces.',
full_description: 'The Briggs & Stratton 1696619 Medium-Duty Dual-Stage Snow Thrower features a 27-inch wide clearing path with a 20 inch intake height for clearing snow from sidewalks and other outdoor surfaces. This model has the 1150 Snow Series 250 cc Engine with 11.50 foot-pounds of torque to power through heavier snowfalls. This model comes equipped with electric start so when it\'s time to start your thrower it\'s as easy as pushing a button. Unit features a friction disc drive system with 5 forward and 2 reverse speeds and a 12 inch steel scroll auger. The Briggs & Stratton 1696619 Medium-Duty Dual-Stage Snow Thrower comes equipped with Free Hand Control and on panel deflector control. Other features include synthetic oil for easy starting, a dash mounted chute control and steel reversible skid shoes. The Briggs & Stratton 1696619 Medium-Duty Dual-Stage Snow Thrower comes with a 3-year equipment and engine warranty to protect against defects in materials and workmanship. Known for hard-working, dependable, efficient products, Briggs & Stratton is the world\'s largest producer of gasoline engines for outdoor power equipment. Briggs & Stratton products are designed, manufactured, marketed and serviced in over 100 countries on all seven continents.',
price: 919.99,
storefront: true,
category_id: garden.id
)

fbt13 = FrequentlyBoughtTogether.create!(product_id: product13.id)
product13.frequently_bought_together_id = fbt13.id
product13.save!

picture13_1 = ProductPicture.create!(product_id: product13.id)
picture13_1.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/001.jpg'))
picture13_1.save!
picture13_2 = ProductPicture.create!(product_id: product13.id)
picture13_2.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/002.jpg'))
picture13_2.save!
picture13_3 = ProductPicture.create!(product_id: product13.id)
picture13_3.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/003.jpg'))
picture13_3.save!
picture13_4 = ProductPicture.create!(product_id: product13.id)
picture13_4.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/004.jpg'))
picture13_4.save!
picture13_5 = ProductPicture.create!(product_id: product13.id)
picture13_5.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/005.jpg'))
picture13_5.save!
picture13_6 = ProductPicture.create!(product_id: product13.id)
picture13_6.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/006.jpg'))
picture13_6.save!
picture13_7 = ProductPicture.create!(product_id: product13.id)
picture13_7.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/007.jpg'))
picture13_7.save!
picture13_8 = ProductPicture.create!(product_id: product13.id)
picture13_8.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/008.jpg'))
picture13_8.save!


product14 = Product.create!(
title: 'Patio Deck Cooler Rolling Outdoor 80 Quart Solid Steel Construction Home Party',
brief_description: 'Our convenient rolling patio deck cooler is perfect for any outdoor occasion, whether it be for a dinner party, sports party, even a simple family barbeque day.',
full_description: 'Our convenient rolling patio deck cooler is perfect for any outdoor occasion, whether it be for a dinner party, sports party, even a simple family barbeque day. The cooler has a 80 quart capacity that holds up to 100 12oz cans and comes with a convenient drain plug for easy cleaning. Features a double lid top, convenient can opener on the side, and a hardened powder coat finish that will last you for years. We purchase our products directly from the manufacturer, so you know you\'re getting the best prices available. FEATURES: Our convenient rolling patio deck cooler is perfect for any outdoor occasion whether it be for a dinner party, sports party, or even a simple family relaxation day. The cooler has a 80 quart capacity that holds up to 100 12oz cans and comeswith a convenient drain plug for easy cleaning. Features a double lid top, a convenient can opener on the side, and a hardened powder coat finish that will last you years. The patio deck cooler will add style and functionality to your patio , backyard, or outdoor entertainment area. Overall dimensions: 15.5"(L) x 36"(W) x 33"(H), Product weight: 44 lbs SPECIFICATIONS: Overall dimensions: 15.5"(L) x 36"(W) x 33"(H) Capacity: 80 quarts Assembly required Product Weight: 44 lbs Color: Red',
price: 143.05,
storefront: true,
category_id: garden.id
)

fbt14 = FrequentlyBoughtTogether.create!(product_id: product14.id)
product14.frequently_bought_together_id = fbt14.id
product14.save!

picture14_1 = ProductPicture.create!(product_id: product14.id)
picture14_1.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/001.jpg'))
picture14_1.save!
picture14_2 = ProductPicture.create!(product_id: product14.id)
picture14_2.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/002.jpg'))
picture14_2.save!
picture14_3 = ProductPicture.create!(product_id: product14.id)
picture14_3.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/003.jpg'))
picture14_3.save!
picture14_4 = ProductPicture.create!(product_id: product14.id)
picture14_4.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/004.jpg'))
picture14_4.save!






product15 = Product.create!(
title: 'GreenWorks Pro 2601302 80V 20-Inch Cordless Snow Thrower',
brief_description: 'GreenWorks Pro 80-Volt 20-in Cordless Electric Snow Blower with 20-inch auger width and utilizing the powerful 80V lithium ion power (Battery and Charger not included)',
full_description: 'GreenWorks Pro 80-Volt 20-in Cordless Electric Snow Blower with 20-inch auger width and utilizing the powerful 80V lithium ion power (Battery and Charger not included)',
price: 234.99,
storefront: true,
category_id: garden.id
)

fbt15 = FrequentlyBoughtTogether.create!(product_id: product15.id)
product15.frequently_bought_together_id = fbt15.id
product15.save!

picture15_1 = ProductPicture.create!(product_id: product15.id)
picture15_1.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/001.jpg'))
picture15_1.save!
picture15_2 = ProductPicture.create!(product_id: product15.id)
picture15_2.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/002.jpg'))
picture15_2.save!
picture15_3 = ProductPicture.create!(product_id: product15.id)
picture15_3.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/003.jpg'))
picture15_3.save!
picture15_4 = ProductPicture.create!(product_id: product15.id)
picture15_4.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/004.jpg'))
picture15_4.save!
picture15_5 = ProductPicture.create!(product_id: product15.id)
picture15_5.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/005.jpg'))
picture15_5.save!


product16 = Product.create!(
title: 'Snapper XD SXDCS82 82V Cordless 18-Inch Chainsaw',
brief_description: 'Snapper XD SXDCS82 82V 18-Inch Cordless Chainsaw - Battery and Charger Not Included. Extra durable. Powerful. Convenient.',
full_description: 'Snapper XD SXDCS82 82V 18-Inch Cordless Chainsaw - Battery and Charger Not Included. Extra durable. Powerful. Convenient. The industry\'s first 82V lithium ion cordless chainsaw powered by Briggs & Stratton. Brushless motor for high efficiency & longer life. Blue indicator light illuminates to let you know the unit is powered on. The Snapper XD 82V cordless chainsaw\'s rugged metal handle with comfortable, ergonomic rubber grip & touchpoints provides extra comfort for the operator. The Snapper XD 82V battery powered chainsaw offers less noise & vibration for quieter sawing & better handling. Reliable power, easy start & less maintenance with this Snapper XD 82V cordless chainsaw. This unit can only be used with the Briggs & Stratton 2.0Ah 82V lithium ion battery & rapid charger (models BSB2AH82 & BSRC82 sold separately). Hassle-free ownership at its best - no cords, gas, oil or maintenance...JUST CHARGE & GO!',
price: 199.00,
storefront: true,
category_id: garden.id
)

fbt16 = FrequentlyBoughtTogether.create!(product_id: product16.id)
product16.frequently_bought_together_id = fbt16.id
product16.save!

picture16_1 = ProductPicture.create!(product_id: product16.id)
picture16_1.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/001.jpg'))
picture16_1.save!
picture16_2 = ProductPicture.create!(product_id: product16.id)
picture16_2.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/002.jpg'))
picture16_2.save!
picture16_3 = ProductPicture.create!(product_id: product16.id)
picture16_3.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/003.jpg'))
picture16_3.save!
picture16_4 = ProductPicture.create!(product_id: product16.id)
picture16_4.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/004.jpg'))
picture16_4.save!



product17 = Product.create!(
title: 'Planet Eclipse Geo CSR Paintball Gun',
brief_description: 'In the mold of the SL lines that came before it, the CSR is a heavily modified variant of the current headline Eclipse marker, the CS1.',
full_description: 'In the mold of the SL lines that came before it, the CSR is a heavily modified variant of the current headline Eclipse marker, the CS1. It features bespoke machined components and custom accessories that can only be found on the CSR, such as the frame, body, POPS assembly and eye covers and introduces a completely new barrel system in the Shaft FL.',
price: 1795.00,
storefront: true,
category_id: sports.id
)

fbt17 = FrequentlyBoughtTogether.create!(product_id: product17.id)
product17.frequently_bought_together_id = fbt17.id
product17.save!

picture17_1 = ProductPicture.create!(product_id: product17.id)
picture17_1.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/001.jpg'))
picture17_1.save!
picture17_2 = ProductPicture.create!(product_id: product17.id)
picture17_2.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/002.jpg'))
picture17_2.save!
picture17_3 = ProductPicture.create!(product_id: product17.id)
picture17_3.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/003.jpg'))
picture17_3.save!


product18 = Product.create!(
title: 'Virtue Spire 200 Electronic Paintball Loader / Hopper',
brief_description: 'The Virtue Spire is the next generation in loader technology with a shot activated sensor, jam-proof feeding system and a tool-less design that can be taken apart and reassembled in seconds. Not only is the Spire an aggressive, lightweight, and compact design, but it also holds more paint than the leading competitors.',
full_description: 'The Virtue Spire is the next generation in loader technology with a shot activated sensor, jam-proof feeding system and a tool-less design that can be taken apart and reassembled in seconds. Not only is the Spire an aggressive, lightweight, and compact design, but it also holds more paint than the leading competitors.',
price: 159.95,
storefront: true,
category_id: sports.id
)

fbt18 = FrequentlyBoughtTogether.create!(product_id: product18.id)
product18.frequently_bought_together_id = fbt18.id
product18.save!

picture18_1 = ProductPicture.create!(product_id: product18.id)
picture18_1.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/001.jpg'))
picture18_1.save!
picture18_2 = ProductPicture.create!(product_id: product18.id)
picture18_2.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/002.jpg'))
picture18_2.save!
picture18_3 = ProductPicture.create!(product_id: product18.id)
picture18_3.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/003.jpg'))
picture18_3.save!
picture18_4 = ProductPicture.create!(product_id: product18.id)
picture18_4.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/004.jpg'))
picture18_4.save!
picture18_5 = ProductPicture.create!(product_id: product18.id)
picture18_5.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/005.jpg'))
picture18_5.save!




product19 = Product.create!(
title: 'Black & Decker BDCDD220C 20V MAX Lithium 2-Speed Drill/Driver',
brief_description: 'The BLACK+DECKER BDCDD220C 20V MAX* Lithium 2-Speed Drill/Driver is compact yet powerful and can tackle both everyday tasks and tough jobs like drilling through studs.',
full_description: 'The BLACK+DECKER BDCDD220C 20V MAX* Lithium 2-Speed Drill/Driver is compact yet powerful and can tackle both everyday tasks and tough jobs like drilling through studs. The compact design, 30% smaller than the GC1801 Drill/Driver, allows you to fit in tighter spaces (behind appliances, inside cabinets, inside closets, etc.). This drill is lightweight at 2.64 lbs which offers less fatigue and makes it easy to move from room to room. A 2-speed transmission allows you to tackle both everyday tasks and tough applications. The keyless chuck allows for easy bit changes and an 11 position clutch helps prevent stripping screws or damaging material. This drill features an LED light which illuminates the project surface. The mid-handle design helps make the drill comfortable to use. Part of the 20V MAX* System - 1 System. Endless Tasks. Power for your Style. Includes: (1) 20V MAX* Battery, (1) Battery Charger, (1) Double Ended Bit.',
price: 59.99,
storefront: true,
category_id: tools.id
)

fbt19 = FrequentlyBoughtTogether.create!(product_id: product19.id)
product19.frequently_bought_together_id = fbt19.id
product19.save!

picture19_1 = ProductPicture.create!(product_id: product19.id)
picture19_1.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/001.jpg'))
picture19_1.save!
picture19_2 = ProductPicture.create!(product_id: product19.id)
picture19_2.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/002.jpg'))
picture19_2.save!
picture19_3 = ProductPicture.create!(product_id: product19.id)
picture19_3.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/003.jpg'))
picture19_3.save!
picture19_4 = ProductPicture.create!(product_id: product19.id)
picture19_4.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/004.jpg'))
picture19_4.save!
picture19_5 = ProductPicture.create!(product_id: product19.id)
picture19_5.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/005.jpg'))
picture19_5.save!
picture19_6 = ProductPicture.create!(product_id: product19.id)
picture19_6.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/006.jpg'))
picture19_6.save!



product20 = Product.create!(
title: 'DEWALT D25263K D-Handle SDS Rotary Hammer with Shocks, 1-1/8"',
brief_description: 'The D25263K 1-1/8-inch D-Handle SDS Rotary Hammer with SHOCKS offers 3 Joules of impact energy for fast drilling and chipping speed.',
full_description: 'The D25263K 1-1/8-inch D-Handle SDS Rotary Hammer with SHOCKS offers 3 Joules of impact energy for fast drilling and chipping speed. It has a 8.5 Amp high performance motor for all your needs, and also features SHOCKS active vibration control and regulation, resulting in reduced vibration felt in the handles - a Perform & Protect feature. This Rotary Hammer has a rotating brush ring which delivers full speed/torque in forward and reverse, along with an integral clutch that reduces sudden, high torque reactions if bit jams. Includes: Rotary Hammer, 360 Side Handle, Depth Rod, Kit Box.',
price: 188.71,
storefront: true,
category_id: tools.id
)

fbt20 = FrequentlyBoughtTogether.create!(product_id: product20.id)
product20.frequently_bought_together_id = fbt20.id
product20.save!

picture20_1 = ProductPicture.create!(product_id: product20.id)
picture20_1.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/001.jpg'))
picture20_1.save!
picture20_2 = ProductPicture.create!(product_id: product20.id)
picture20_2.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/002.jpg'))
picture20_2.save!
picture20_3 = ProductPicture.create!(product_id: product20.id)
picture20_3.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/003.jpg'))
picture20_3.save!
picture20_4 = ProductPicture.create!(product_id: product20.id)
picture20_4.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/004.jpg'))
picture20_4.save!
picture20_5 = ProductPicture.create!(product_id: product20.id)
picture20_5.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/005.jpg'))
picture20_5.save!
picture20_6 = ProductPicture.create!(product_id: product20.id)
picture20_6.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/006.jpg'))
picture20_6.save!



product21 = Product.create!(
title: 'Bosch PS31-2A 12-Volt Max Lithium-Ion 3/8-Inch 2-Speed Drill/Driver Kit with 2 Batteries, Charger and Case',
brief_description: 'Featuring a compact, lightweight design for easy handling overhead and in tight spaces, the Bosch 12-Volt max drill/driver lets you tackle professional jobs with ease.',
full_description: 'Featuring a compact, lightweight design for easy handling overhead and in tight spaces, the Bosch 12-Volt max drill/driver lets you tackle professional jobs with ease. Offering high torque and the convenience of two speed settings, this tool is powerful and user-friendly for fast, efficient drilling and driving. This drill/driver combines speed, power, and performance, making it ideal for professionals and do-it-yourselfers. It comes with two batteries, a charger, and a carrying case.',
price: 96.75,
storefront: true,
category_id: tools.id
)

fbt21 = FrequentlyBoughtTogether.create!(product_id: product21.id)
product21.frequently_bought_together_id = fbt21.id
product21.save!

picture21_1 = ProductPicture.create!(product_id: product21.id)
picture21_1.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/001.jpg'))
picture21_1.save!
picture21_2 = ProductPicture.create!(product_id: product21.id)
picture21_2.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/002.jpg'))
picture21_2.save!
picture21_3 = ProductPicture.create!(product_id: product21.id)
picture21_3.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/003.jpg'))
picture21_3.save!



product22 = Product.create!(
title: 'Bare-Tool Milwaukee 2630-20 Bare-Tool 18-Volt 6-1/2-Inch Circular Saw',
brief_description: 'Milwaukee Electric Tool Corporation introduces the new M18 61/2-Inch Circular Saw that is designed to provide powerful lightweight cutting for a variety of applications including plumbing, electrical, framing, finishing and carpentry.',
full_description: 'Milwaukee Electric Tool Corporation introduces the new M18 61/2-Inch Circular Saw that is designed to provide powerful lightweight cutting for a variety of applications including plumbing, electrical, framing, finishing and carpentry. The 2630 is a high performance circular saw that delivers the most durability in a cordless saw. Its powerful 3,500 RPM motor easily and quickly cuts tough material such as LVL headers. Magnesium upper and lower guards provide best-in-class durability to protect the blade from drops. The soft-grip handle is ergonomically designed to provide superior comfort and balance for easily controlled cuts. An easy-to-read aircraft aluminum shoe provides a light weight durable shoe and greater accuracy in rip cuts. The 2630 features an 18-Volt XC High Capacity LITHIUM-ION battery which provides longer run-time and up to 20-Percent more torque for powerful cuts. The battery fuel gauge displays remaining run-time. Backed by Milwaukee\'s 5-year 2,000 charge warranty.',
price: 97.90,
storefront: true,
category_id: tools.id
)

fbt22 = FrequentlyBoughtTogether.create!(product_id: product22.id)
product22.frequently_bought_together_id = fbt22.id
product22.save!

picture22_1 = ProductPicture.create!(product_id: product22.id)
picture22_1.image = File.open(File.join(Rails.root, 'app/assets/images/bare_tool1/001.jpg'))
picture22_1.save!




product23 = Product.create!(
title: '65-Piece Homeowner\'s Tool Kit',
brief_description: 'A great gift idea for any new homeowner, the tool set provides the tools needed to take on fun new projects and handle everyday necessary repairs',
full_description: 'Tackle any basic DIY project around the home with help from the 65-Piece Homeowners Tool Set. The collection includes an array of essentials—all kept neatly stored together in a handy carrying case for easy access and convenient portability.',
price: 23.79,
storefront: true,
category_id: tools.id
)

fbt23 = FrequentlyBoughtTogether.create!(product_id: product23.id)
product23.frequently_bought_together_id = fbt23.id
product23.save!

picture23_1 = ProductPicture.create!(product_id: product23.id)
picture23_1.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/001.jpg'))
picture23_1.save!
picture23_2 = ProductPicture.create!(product_id: product23.id)
picture23_2.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/002.jpg'))
picture23_2.save!
picture23_3 = ProductPicture.create!(product_id: product23.id)
picture23_3.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/003.jpg'))
picture23_3.save!




product24 = Product.create!(
title: 'Performance Tool (W1099) 32-Piece SAE and Metric Wrench Set',
brief_description: 'SAE and Metric standard and stubby wrenches. Mirror polished chrome vanadium steel. Improved box end design grips sides of fasteners for more torque. Includes convenient storage rack.',
full_description: 'SAE and Metric standard and stubby wrenches. Mirror polished chrome vanadium steel. Improved box end design grips sides of fasteners for more torque. Includes convenient storage rack. SAE sizes: 1/4, 5/16, 11/32, 3/8, 7/16, 1/2, 9/16, 5/8, 11/16 and 3/4 inch. Stubby SAE sizes: 5/16, 3/8, 7/16, 1/2, 9/16 and 5/8 inch. Metric sizes: 6, 8, 10, 11, 12, 13, 14, 15, 17 and 18 millimeters. Stubby Metric sizes: 10, 11, 12, 13, 14 and 15 millimeters.',
price: 28.98,
storefront: true,
category_id: tools.id
)

fbt24 = FrequentlyBoughtTogether.create!(product_id: product24.id)
product24.frequently_bought_together_id = fbt24.id
product24.save!

picture24_1 = ProductPicture.create!(product_id: product24.id)
picture24_1.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool2/001.jpg'))
picture24_1.save!



cart1 = Cart.create!(user_id: user1.id)
user1.cart_id = cart1.id
user1.save!

CartProduct.create(cart_id: cart1.id, product_id: product4.id)
CartProduct.create(cart_id: cart1.id, product_id: product5.id)
