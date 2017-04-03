
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

picture1_1 = ProductPicture.create!(product_id: product1.id)
picture1_1.image = File.open('app/assets/images/020.jpeg')
picture1_1.save!

product2 = Product.create!(
title: 'Beauty and the Beast: 25th Anniversary Edition - (BD+DVD+DIGITAL HD) [Blu-ray]',
full_description: 'Be our guest at the enchanted 25th Anniversary celebration of BEAUTY AND THE BEAST, universally acclaimed as one of Disney\'s finest animated features and now honored in the Walt Disney Signature Collection. Join brave, independent Belle on the adventure of a lifetime as she sets out to rescue her father and finds herself in the enchanted castle of a mysterious beast. Enjoy this timeless tale overflowing with unforgettable characters and Academy Award(R)-winning music (Best Song, Best Score, 1991)! | It took more than 600 animators, artists, and technicians three and a half years to complete the project.| BEAUTY is the first animated Disney feature scripted by a woman, Linda Woolverton.| The film marked the first time each animator was credited on screen specifically for the character he or she brought to life.| Disney\'s animation department won a Scientific and Technical Academy Award for the design and development of the Computer Animated Production System used to make the film.| The style of illustration was inspired by French painters Fragonard and Boucher.',
price: 19.99,
storefront: true,
category_id: movies.id)

picture2_1 = ProductPicture.create!(product_id: product2.id)
picture2_1.image = File.open('app/assets/images/021.jpg')
picture2_1.save!

product3 = Product.create!(
title: 'Sauder Beginnings 4-Drawer Chest, Cinnamon Cherry',
brief_description: 'This Product Four easy-glide drawers with safety stops .Three lower drawers are extra-deep. Made in USA.',
full_description: 'This Product Four easy-glide drawers with safety stops .Three lower drawers are extra-deep. Made in USA.',
price: 85.00,
storefront: true,
category_id: home.id)

picture3_1 = ProductPicture.create!(product_id: product3.id)
picture3_1.image = File.open('app/assets/images/011.jpg')
picture3_1.save!
picture3_2 = ProductPicture.create!(product_id: product3.id)
picture3_2image = File.open('app/assets/images/012.jpg')
picture3_2.save!

product4 = Product.create!(
title: 'Elite 54" Wall Cabinet',
brief_description: 'This 3-door cabinet is 54 inches wide, which is the ideal width for placement above a standard washer and dryer.',
full_description: 'This 3-door cabinet is 54 inches wide, which is the ideal width for placement above a standard washer and dryer. It includes 2 adjustable shelves and the doors can be attached to open to the left or to the right depending or your room configuration. ELITE’s quality features include distinctive Soft Edged Doors, Designer Hardware, Attractive Finishes and European Style Hinges. Note - The 54” Wall Cabinet has been designed as a stand-alone piece and is best suited for above a washer & dryer. It is shallower (12” deep) than the other wall cabinets from the Elite Storage Collection (16” deep).',
price: 122.48,
storefront: true,
category_id: home.id)

picture4_1 = ProductPicture.create!(product_id: product4.id)
picture4_1.image = File.open('app/assets/images/013.jpg')
picture4_1.save!
picture4_2 = ProductPicture.create!(product_id: product4.id)
picture4_2.image = File.open('app/assets/images/014.jpg')
picture4_2.save!
picture4_3 = ProductPicture.create!(product_id: product4.id)
picture4_3.image = File.open('app/assets/images/015.jpg')
picture4_3.save!
picture4_4 = ProductPicture.create!(product_id: product4.id)
picture4_4.image = File.open('app/assets/images/016.jpg')
picture4_4.save!
picture4_5 = ProductPicture.create!(product_id: product4.id)
picture4_5.image = File.open('app/assets/images/017.jpg')
picture4_5.save!

product5 = Product.create!(
title: 'Elite 32" Wardrobe Cabinet',
brief_description: 'This 20-inch deep Wardrobe Cabinet includes one hanging rail for clothes as well as a fixed top shelf for hats and other small items.',
full_description: 'This 20-inch deep Wardrobe Cabinet includes one hanging rail for clothes as well as a fixed top shelf for hats and other small items. Use alone or add the optional 32” Topper (WEW-3224) for 89” high storage. ELITE’s quality features include distinctive Soft Edged Doors, Designer Hardware, Attractive Finishes and European Style Hinges',
price: 125.35,
storefront: true,
category_id: home.id)

picture5_1 = ProductPicture.create!(product_id: product5.id)
picture5_1.image = File.open('app/assets/images/018.jpg')
picture5_1.save!
picture5_2 = ProductPicture.create!(product_id: product5.id)
picture5_2.image = File.open('app/assets/images/019.jpg')
picture5_2.save!
picture5_3 = ProductPicture.create!(product_id: product5.id)
picture5_3.image = File.open('app/assets/images/017.jpg')
picture5_3.save!

product6 = Product.create!(
title: 'Convenience Concepts 2-Tier Plant Stand, Chinese Fir',
brief_description: 'The Double Barrel Planter will bring life to any yard or garden. Featuring 2 Barrel planters and a trellis which allows plenty of room for different plants to grow and make this a charming home. Constructed from Chinese Fir Wood with a Red Cedar finish and slatted bottoms, this planter is sure to stand the test of time.',
full_description: 'The Double Barrel Planter will bring life to any yard or garden. Featuring 2 Barrel planters and a trellis which allows plenty of room for different plants to grow and make this a charming home. Constructed from Chinese Fir Wood with a Red Cedar finish and slatted bottoms, this planter is sure to stand the test of time.',
price: 56.31,
storefront: true,
category_id: garden.id)

picture6_1 = ProductPicture.create!(product_id: product6.id)
picture6_1.image = File.open('app/assets/images/006.jpg')
picture6_1.save!
picture6_2 = ProductPicture.create!(product_id: product6.id)
picture6_2.image = File.open('app/assets/images/007.jpg')
picture6_2.save!
picture6_3 = ProductPicture.create!(product_id: product6.id)
picture6_3.image = File.open('app/assets/images/008.jpg')
picture6_3.save!

product7 = Product.create!(
title: 'Brussel\'s Golden Gate Ficus Bonsai',
brief_description: 'Imported from China, our Golden Gate Ficus have been meticulously trained for wonderful truck movement. The Chinese have hand-wired every tree to create the trunks\’ beautiful swirl. The small dark green leaves make the Golden Ficus perfectly suited for bonsai. In the ficus family, this variety is the best for growing indoors.',
full_description: 'Imported from China, the Golden Gate ficus’s graceful trunk is the product of meticulous training. Chinese bonsai experts hand-wire every branch, shaping them into elegant swirls. One of the best indoor growing bonsai, the small, dark-green leaved ficus is a good choice for beginners. This tree is seven years, 10 to 12 inches tall, and comes in a 12-inch rectangular pot. Every tree order includes specific growing instructions.',
price: 46.26,
storefront: true,
category_id: garden.id)

picture7_1 = ProductPicture.create!(product_id: product7.id)
picture7_1.image = File.open('app/assets/images/005.jpg')
picture7_1.save!

product8 = Product.create!(
title: 'Catan 5th Edition',
brief_description: 'Your adventurous settlers seek to tame the remote but rich isle of Catan. Start by revealing Catan’s many harbors and regions: pastures, fields, mountains, hills, forests, and desert. The random mix creates a different board virtually every game.',
full_description: 'Your adventurous settlers seek to tame the remote but rich isle of Catan. Start by revealing Catan’s many harbors and regions: pastures, fields, mountains, hills, forests, and desert. The random mix creates a different board virtually every game. Guide your settlers to victory by clever trading and cunning development. Use resource combinations— grain, wool, ore, brick, and lumber—to buy handy development cards and build roads, settlements, and cities. Acquire your resources through trades, cards, or lucky dice (even outside your turn). But beware! Someone might cut off your road or buy a monopoly. And you never know when the wily robber might steal some of your precious gains!',
price: 27.49,
storefront: true,
category_id: games.id)

picture8_1 = ProductPicture.create!(product_id: product8.id)
picture8_1.image = File.open('app/assets/images/catan/001.jpg')
picture8_1.save!
picture8_2 = ProductPicture.create!(product_id: product8.id)
picture8_2.image = File.open('app/assets/images/catan/002.jpg')
picture8_2.save!
picture8_3 = ProductPicture.create!(product_id: product8.id)
picture8_3.image = File.open('app/assets/images/catan/003.jpg')
picture8_3.save!
picture8_4 = ProductPicture.create!(product_id: product8.id)
picture8_4.image = File.open('app/assets/images/catan/004.jpg')
picture8_4.save!
picture8_5 = ProductPicture.create!(product_id: product8.id)
picture8_5.image = File.open('app/assets/images/catan/005.jpg')
picture8_5.save!
picture8_6 = ProductPicture.create!(product_id: product8.id)
picture8_6.image = File.open('app/assets/images/catan/006.jpg')
picture8_6.save!


product9 = Product.create!(
title: '7 Wonders',
brief_description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
full_description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
price: 27.99,
storefront: true,
category_id: games.id)

picture9_1 = ProductPicture.create!(product_id: product9.id)
picture9_1.image = File.open('app/assets/images/7wonders/001.jpg')
picture9_1.save!
picture9_2 = ProductPicture.create!(product_id: product9.id)
picture9_2.image = File.open('app/assets/images/7wonders/002.jpg')
picture9_2.save!
picture9_3 = ProductPicture.create!(product_id: product9.id)
picture9_3.image = File.open('app/assets/images/7wonders/003.jpg')
picture9_3.save!
picture9_4 = ProductPicture.create!(product_id: product9.id)
picture9_4.image = File.open('app/assets/images/7wonders/004.jpg')
picture9_4.save!

product10 = Product.create!(
title: 'Acer Aspire VX 15 Gaming Laptop, 7th Gen Intel Core i7, NVIDIA GeForce GTX 1050 Ti, 15.6 Full HD, 16GB DDR4, 256GB SSD, VX5-591G-75RM',
brief_description: 'Acer Aspire VX 15 VX5-591G-75RM Gaming Notebook comes with these high level specs: 7th Generation Intel Core i7-7700HQ Processor 2.8GHz with Turbo Boost Technology up to 3.8GHz, 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display, NVIDIA GeForce GTX 1050 Ti with 4 GB of dedicated GDDR5 VRAM, 16GB DDR4 2400MHz Memory, 256GB SSD, Acer True Harmony Technology, Two Built-in Stereo Speakers, Built-in Digital Microphone, Secure Digital (SD) card reader, 802.11ac Wi-Fi featuring 2x2 MU-MIMO technology (Dual-Band 2.4GHz and 5GHz), Bluetooth 4.0, 10/100/1000 Gigabit Ethernet LAN (RJ-45 port), HD Webcam (1280 x 720) supporting High Dynamic Range (HDR), 1 - USB 3.1 (Type C) port (Gen 1 up to 5 Gbps), 2 - USB 3.0 Ports (One with Power-off Charging), 1 - USB 2.0 Port, 1 - HDMI Port, 3-cell Li-ion Battery (4605 mAh), Up to 6-hours Battery Life, 5.51 lbs. | 2.5 kg (system unit only) (NH.GM4AA.001).',
full_description: 'In the case of the Aspire VX 15, looks can kill! This soon-to-be battlefield gaming icon utilizes a hard-edged futuristic design with sleek lines and angles—and an impressive, 15.6” Full HD Display—to put you in total command of all the action. It combines a powerful 7th Gen Intel Core i7-7700HQ processor with high-performance NVIDIA GeForce GTX 1050 Ti graphics driven by the new NVIDIA Pascal architecture. The advanced cooling and stellar audio capabilities support intense gaming sessions while the illuminating iron-red keyboard adds to the drama.',
price: 999.99,
storefront: true,
category_id: computers.id)

picture10_1 = ProductPicture.create!(product_id: product10.id)
picture10_1.image = File.open('app/assets/images/laptop1/001.jpg')
picture10_1.save!
picture10_2 = ProductPicture.create!(product_id: product10.id)
picture10_2.image = File.open('app/assets/images/laptop1/002.jpg')
picture10_2.save!
picture10_3 = ProductPicture.create!(product_id: product10.id)
picture10_3.image = File.open('app/assets/images/laptop1/003.jpg')
picture10_3.save!
picture10_4 = ProductPicture.create!(product_id: product10.id)
picture10_4.image = File.open('app/assets/images/laptop1/004.jpg')
picture10_4.save!
picture10_5 = ProductPicture.create!(product_id: product10.id)
picture10_5.image = File.open('app/assets/images/laptop1/006.jpg')
picture10_5.save!


product11 = Product.create!(
title: 'Weber 46510001 Spirit E310 Liquid Propane Gas Grill, Black',
brief_description: 'Redesigned in 2013, the new Spirit E-310 LP gas grill is complete with all the essential features a griller could want in an affordable package.',
full_description: 'Redesigned in 2013, the new Spirit E-310 LP gas grill is complete with all the essential features a griller could want in an affordable package. With the control panel conveniently moved to the front, two full-use stainless steel tables allow for food platters and prep. The grill offers enough room to cook a 20-pound turkey or roast meats and vegetables at the same time. Porcelain-enameled cast-iron cooking grates provide superior heat retention and clean up easily, and the durable porcelain-enameled shroud will not fade, peel or rust. An Electronic Crossover ignition system lights the three burners with just one touch of the igniter button, and an easy-to-read fuel gauge accurately measures the amount of LP gas in the tank.',
price: 499.00,
storefront: true,
category_id: garden.id
)

picture11_1 = ProductPicture.create!(product_id: product11.id)
picture11_1.image = File.open('app/assets/images/001.jpg')
picture11_1.save!
picture11_2 = ProductPicture.create!(product_id: product11.id)
picture11_2.image = File.open('app/assets/images/002.jpg')
picture11_2.save!
picture11_3 = ProductPicture.create!(product_id: product11.id)
picture11_3.image = File.open('app/assets/images/003.jpg')
picture11_3.save!
picture11_4 = ProductPicture.create!(product_id: product11.id)
picture11_4.image = File.open('app/assets/images/004.jpg')
picture11_4.save!


product12 = Product.create!(
title: 'Amish Wagon Decorative Garden Planter, Green, Weathered',
brief_description: 'Showcase flowers & plants and create sensational seasonal displays with our Amish Country Wagon.',
full_description: 'Showcase flowers & plants and create sensational seasonal displays with our Amish Country Wagon. Crafted from wood with rolling iron wheels. Measures 44 1/4"L (includes handle), x 14 1/2"W x 15 1/2"H. Length of the wagon is 21.75" without the handle. Some assembly required. Specify Blue, Country Red or Green.',
price: 19.99,
storefront: true,
category_id: garden.id
)

picture12_1 = ProductPicture.create!(product_id: product12.id)
picture12_1.image = File.open('app/assets/images/009.jpg')
picture12_1.save!
picture12_2 = ProductPicture.create!(product_id: product12.id)
picture12_2.image = File.open('app/assets/images/010.jpg')
picture12_2.save!


cart1 = Cart.create!(user_id: user1.id)
user1.cart_id = cart1.id
user1.save!

CartProduct.create(cart_id: cart1.id, product_id: product4.id)
CartProduct.create(cart_id: cart1.id, product_id: product5.id)
