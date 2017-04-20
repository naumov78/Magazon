
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
games = Category.create!(title: 'Games')
computers = Category.create!(title: 'Computers')
home = Category.create!(title: 'Home')
garden = Category.create!(title: 'Garden')
tools = Category.create!(title: 'Tools')
sports = Category.create!(title: 'Sports')


SmallBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'small_banners', 'sb1.jpg')))
SmallBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'small_banners', 'sb2.jpg')))
SmallBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'small_banners', 'sb3.jpg')))
SmallBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'small_banners', 'sb4.jpg')))
SmallBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'small_banners', 'sb5.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb1.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb2.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb3.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb4.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb5.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb6.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb7.png')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb8.jpg')))
BigBanner.create!(image: File.open(Rails.root.join('app', 'assets', 'images', 'big_banners', 'bb9.jpg')))

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

picture1_1 = ProductPicture.create!(product_id: product1.id)
# picture1_1.image = Rails.root.join("app/assets/images/book1/020.jpeg").open
picture1_1.image = File.open(Rails.root.join('app', 'assets', 'images', 'book1', 'book1.jpeg'))
picture1_1.save!

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
picture2_1.image = File.open(File.join(Rails.root, 'app/assets/images/video1/video1.jpg'))
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
picture3_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf1/shkaf1_1.jpg'))
picture3_1.save!
picture3_2 = ProductPicture.create!(product_id: product3.id)
picture3_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf1/shkaf1_2.jpg'))
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
picture4_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_1.jpg'))
picture4_1.save!
picture4_2 = ProductPicture.create!(product_id: product4.id)
picture4_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_2.jpg'))
picture4_2.save!
picture4_3 = ProductPicture.create!(product_id: product4.id)
picture4_3.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_3.jpg'))
picture4_3.save!
picture4_4 = ProductPicture.create!(product_id: product4.id)
picture4_4.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_4.jpg'))
picture4_4.save!
picture4_5 = ProductPicture.create!(product_id: product4.id)
picture4_5.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_5.jpg'))
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
picture5_1.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf3/shkaf3_1.jpg'))
picture5_1.save!
picture5_2 = ProductPicture.create!(product_id: product5.id)
picture5_2.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf3/shkaf3_2.jpg'))
picture5_2.save!
picture5_3 = ProductPicture.create!(product_id: product5.id)
picture5_3.image = File.open(File.join(Rails.root, 'app/assets/images/shkaf2/shkaf2_5.jpg'))
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
picture6_1.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/kadka_1.jpg'))
picture6_1.save!
picture6_2 = ProductPicture.create!(product_id: product6.id)
picture6_2.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/kadka_2.jpg'))
picture6_2.save!
picture6_3 = ProductPicture.create!(product_id: product6.id)
picture6_3.image = File.open(File.join(Rails.root, 'app/assets/images/kadka/kadka_3.jpg'))
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
picture7_1.image = File.open(File.join(Rails.root, 'app/assets/images/kust/kust_1.jpg'))
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
picture8_1.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_1.jpg'))
picture8_1.save!
picture8_2 = ProductPicture.create!(product_id: product8.id)
picture8_2.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_2.jpg'))
picture8_2.save!
picture8_3 = ProductPicture.create!(product_id: product8.id)
picture8_3.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_3.jpg'))
picture8_3.save!
picture8_4 = ProductPicture.create!(product_id: product8.id)
picture8_4.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_4.jpg'))
picture8_4.save!
picture8_5 = ProductPicture.create!(product_id: product8.id)
picture8_5.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_5.jpg'))
picture8_5.save!
picture8_6 = ProductPicture.create!(product_id: product8.id)
picture8_6.image = File.open(File.join(Rails.root, 'app/assets/images/catan/catan_6.jpg'))
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
picture9_1.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/wonder1.jpg'))
picture9_1.save!
picture9_2 = ProductPicture.create!(product_id: product9.id)
picture9_2.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/wonder2.jpg'))
picture9_2.save!
picture9_3 = ProductPicture.create!(product_id: product9.id)
picture9_3.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/wonder3.jpg'))
picture9_3.save!
picture9_4 = ProductPicture.create!(product_id: product9.id)
picture9_4.image = File.open(File.join(Rails.root, 'app/assets/images/7wonders/wonder4.jpg'))
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
picture10_1.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/laptop1_1.jpg'))
picture10_1.save!
picture10_2 = ProductPicture.create!(product_id: product10.id)
picture10_2.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/laptop1_2.jpg'))
picture10_2.save!
picture10_3 = ProductPicture.create!(product_id: product10.id)
picture10_3.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/laptop1_3.jpg'))
picture10_3.save!
picture10_4 = ProductPicture.create!(product_id: product10.id)
picture10_4.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/laptop1_4.jpg'))
picture10_4.save!
picture10_5 = ProductPicture.create!(product_id: product10.id)
picture10_5.image = File.open(File.join(Rails.root, 'app/assets/images/laptop1/laptop1_5.jpg'))
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
picture11_1.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/grill1_1.jpg'))
picture11_1.save!
picture11_2 = ProductPicture.create!(product_id: product11.id)
picture11_2.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/grill1_2.jpg'))
picture11_2.save!
picture11_3 = ProductPicture.create!(product_id: product11.id)
picture11_3.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/grill1_3.jpg'))
picture11_3.save!
picture11_4 = ProductPicture.create!(product_id: product11.id)
picture11_4.image = File.open(File.join(Rails.root, 'app/assets/images/grill1/grill1_4.jpg'))
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
picture12_1.image = File.open(File.join(Rails.root, 'app/assets/images/telega/telega1.jpg'))
picture12_1.save!
picture12_2 = ProductPicture.create!(product_id: product12.id)
picture12_2.image = File.open(File.join(Rails.root, 'app/assets/images/telega/telega2.jpg'))
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
picture13_1.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_1.jpg'))
picture13_1.save!
picture13_2 = ProductPicture.create!(product_id: product13.id)
picture13_2.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_2.jpg'))
picture13_2.save!
picture13_3 = ProductPicture.create!(product_id: product13.id)
picture13_3.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_3.jpg'))
picture13_3.save!
picture13_4 = ProductPicture.create!(product_id: product13.id)
picture13_4.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_4.jpg'))
picture13_4.save!
picture13_5 = ProductPicture.create!(product_id: product13.id)
picture13_5.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_5.jpg'))
picture13_5.save!
picture13_6 = ProductPicture.create!(product_id: product13.id)
picture13_6.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_6.jpg'))
picture13_6.save!
picture13_7 = ProductPicture.create!(product_id: product13.id)
picture13_7.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_7.jpg'))
picture13_7.save!
picture13_8 = ProductPicture.create!(product_id: product13.id)
picture13_8.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal1/snow_removal1_8.jpg'))
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
picture14_1.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/deck1_1.jpg'))
picture14_1.save!
picture14_2 = ProductPicture.create!(product_id: product14.id)
picture14_2.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/deck1_2.jpg'))
picture14_2.save!
picture14_3 = ProductPicture.create!(product_id: product14.id)
picture14_3.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/deck1_3.jpg'))
picture14_3.save!
picture14_4 = ProductPicture.create!(product_id: product14.id)
picture14_4.image = File.open(File.join(Rails.root, 'app/assets/images/deck1/deck1_4.jpg'))
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
picture15_1.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/snow_removal2_1.jpg'))
picture15_1.save!
picture15_2 = ProductPicture.create!(product_id: product15.id)
picture15_2.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/snow_removal2_2.jpg'))
picture15_2.save!
picture15_3 = ProductPicture.create!(product_id: product15.id)
picture15_3.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/snow_removal2_3.jpg'))
picture15_3.save!
picture15_4 = ProductPicture.create!(product_id: product15.id)
picture15_4.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/snow_removal2_4.jpg'))
picture15_4.save!
picture15_5 = ProductPicture.create!(product_id: product15.id)
picture15_5.image = File.open(File.join(Rails.root, 'app/assets/images/snow_removal2/snow_removal2_5.jpg'))
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
picture16_1.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/snapper1_1.jpg'))
picture16_1.save!
picture16_2 = ProductPicture.create!(product_id: product16.id)
picture16_2.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/snapper1_2.jpg'))
picture16_2.save!
picture16_3 = ProductPicture.create!(product_id: product16.id)
picture16_3.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/snapper1_3.jpg'))
picture16_3.save!
picture16_4 = ProductPicture.create!(product_id: product16.id)
picture16_4.image = File.open(File.join(Rails.root, 'app/assets/images/snapper1/snapper1_4.jpg'))
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
picture17_1.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/paintball1_1.jpg'))
picture17_1.save!
picture17_2 = ProductPicture.create!(product_id: product17.id)
picture17_2.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/paintball1_2.jpg'))
picture17_2.save!
picture17_3 = ProductPicture.create!(product_id: product17.id)
picture17_3.image = File.open(File.join(Rails.root, 'app/assets/images/paintball1/paintball1_3.jpg'))
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
picture18_1.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/feeder1_1.jpg'))
picture18_1.save!
picture18_2 = ProductPicture.create!(product_id: product18.id)
picture18_2.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/feeder1_2.jpg'))
picture18_2.save!
picture18_3 = ProductPicture.create!(product_id: product18.id)
picture18_3.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/feeder1_3.jpg'))
picture18_3.save!
picture18_4 = ProductPicture.create!(product_id: product18.id)
picture18_4.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/feeder1_4.jpg'))
picture18_4.save!
picture18_5 = ProductPicture.create!(product_id: product18.id)
picture18_5.image = File.open(File.join(Rails.root, 'app/assets/images/feeder1/feeder1_5.jpg'))
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
picture19_1.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_1.jpg'))
picture19_1.save!
picture19_2 = ProductPicture.create!(product_id: product19.id)
picture19_2.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_2.jpg'))
picture19_2.save!
picture19_3 = ProductPicture.create!(product_id: product19.id)
picture19_3.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_3.jpg'))
picture19_3.save!
picture19_4 = ProductPicture.create!(product_id: product19.id)
picture19_4.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_4.jpg'))
picture19_4.save!
picture19_5 = ProductPicture.create!(product_id: product19.id)
picture19_5.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_5.jpg'))
picture19_5.save!
picture19_6 = ProductPicture.create!(product_id: product19.id)
picture19_6.image = File.open(File.join(Rails.root, 'app/assets/images/black_decker1/black_decker1_6.jpg'))
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
picture20_1.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_1.jpg'))
picture20_1.save!
picture20_2 = ProductPicture.create!(product_id: product20.id)
picture20_2.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_2.jpg'))
picture20_2.save!
picture20_3 = ProductPicture.create!(product_id: product20.id)
picture20_3.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_3.jpg'))
picture20_3.save!
picture20_4 = ProductPicture.create!(product_id: product20.id)
picture20_4.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_4.jpg'))
picture20_4.save!
picture20_5 = ProductPicture.create!(product_id: product20.id)
picture20_5.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_5.jpg'))
picture20_5.save!
picture20_6 = ProductPicture.create!(product_id: product20.id)
picture20_6.image = File.open(File.join(Rails.root, 'app/assets/images/dewalt1/dewalt1_6.jpg'))
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
picture21_1.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/bosch1_1.jpg'))
picture21_1.save!
picture21_2 = ProductPicture.create!(product_id: product21.id)
picture21_2.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/bosch1_2.jpg'))
picture21_2.save!
picture21_3 = ProductPicture.create!(product_id: product21.id)
picture21_3.image = File.open(File.join(Rails.root, 'app/assets/images/bosch1/bosch1_3.jpg'))
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
picture22_1.image = File.open(File.join(Rails.root, 'app/assets/images/bare_tool1/bare_tool1.jpg'))
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
picture23_1.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/hand_tool1_1.jpg'))
picture23_1.save!
picture23_2 = ProductPicture.create!(product_id: product23.id)
picture23_2.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/hand_tool1_2.jpg'))
picture23_2.save!
picture23_3 = ProductPicture.create!(product_id: product23.id)
picture23_3.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool1/hand_tool1_3.jpg'))
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
picture24_1.image = File.open(File.join(Rails.root, 'app/assets/images/hand_tool2/hand_tool2_1.jpg'))
picture24_1.save!



product25 = Product.create!(
title: 'Qooltek Multipurpose Laser Level laser measure Line 8ft+ Measure Tape Ruler ',
brief_description: 'Use this Multipurpose Laser Level for hanging pictures, installing shelving,laying flooring, hanging wallpaper and more.',
full_description: 'Use this Multipurpose Laser Level for hanging pictures, installing shelving,laying flooring, hanging wallpaper and more. The tape measure is an 8-foot measure that includes imperial and metric linear measures, with graduations down to 1/32” and 1mm.',
price: 13.98,
storefront: true,
category_id: tools.id
)

fbt25 = FrequentlyBoughtTogether.create!(product_id: product25.id)
product25.frequently_bought_together_id = fbt25.id
product25.save!

picture25_1 = ProductPicture.create!(product_id: product25.id)
picture25_1.image = File.open(File.join(Rails.root, 'app/assets/images/level1/level1.jpg'))
picture25_1.save!
picture25_2 = ProductPicture.create!(product_id: product25.id)
picture25_2.image = File.open(File.join(Rails.root, 'app/assets/images/level1/level2.jpg'))
picture25_2.save!
picture25_3 = ProductPicture.create!(product_id: product25.id)
picture25_3.image = File.open(File.join(Rails.root, 'app/assets/images/level1/level3.jpg'))
picture25_3.save!



product26 = Product.create!(
title: 'Rubbermaid RM-3W Folding 3-Step Steel Frame Stool with Hand Grip and Plastic Steps',
brief_description: 'The Rubbermaid RM-3W 3-Step Steel Stool is perfect tool when you need a little extra height for items in the kitchen, bathroom, office or garage. Designed with a solid steel frame, plastic steps, hand grip and a 200-pound weight capacity, you\'ll feel safe and comfortable getting to those hard to reach places.',
full_description: 'The Rubbermaid RM-3W 3-Step Steel Stool is perfect tool when you need a little extra height for items in the kitchen, bathroom, office or garage. Designed with a solid steel frame, plastic steps, hand grip and a 200-pound weight capacity, you\'ll feel safe and comfortable getting to those hard to reach places. The step stool features non-marring feet, large standing platform that automatically locks in place and a convenient handgrip making the stool easy to climb and carry. The RM-3W measures 44.75-inches (L) by 21-inches (H) by 3-inches (W) with a highest standing height of 27.25-inches and weighs approximately 13.25-pounds. The durable steel stool has a silver finish, 8.9-foot reach height, type III duty rating and folds up for easy storage. Rubbermaid products aim to simplify everyday life by consumer and commercial products that touch millions of people every day where they work, live and play. The Rubbermaid RM-3W 3-Step Steel Stool comes with a 1-year limited warranty. As a licensed manufacturer of Rubbermaid Step Stools, Tricam is a leading consumer products company who continues to lead the industry with innovative, patented designs throughout their entire product line. Tricam\'s products include household step stools, lawn and garden carts, replacement tires and tire tubes.',
price: 39.21,
storefront: true,
category_id: tools.id
)

fbt26 = FrequentlyBoughtTogether.create!(product_id: product26.id)
product26.frequently_bought_together_id = fbt26.id
product26.save!

picture26_1 = ProductPicture.create!(product_id: product26.id)
picture26_1.image = File.open(File.join(Rails.root, 'app/assets/images/ledder1/ladder1.jpg'))
picture26_1.save!
picture26_2 = ProductPicture.create!(product_id: product26.id)
picture26_2.image = File.open(File.join(Rails.root, 'app/assets/images/ledder1/ladder2.jpg'))
picture26_2.save!
picture26_3 = ProductPicture.create!(product_id: product26.id)
picture26_3.image = File.open(File.join(Rails.root, 'app/assets/images/ledder1/ladder3.jpg'))
picture26_3.save!



product27 = Product.create!(
title: 'Xtend & Climb 785P Aluminum Telescoping Ladder Type I Professional Series, 15.5-Foot',
brief_description: 'This Xtend & Climb ladder features heavy-duty construction and is designed to hold up to professional use, making it a great choice for contractors or the serious do-it-yourselfer.',
full_description: 'This Xtend & Climb ladder features heavy-duty construction and is designed to hold up to professional use, making it a great choice for contractors or the serious do-it-yourselfer. The ladder extends in 1-ft. increments and folds to 36 1/2in.H when not in use, so it stores virtually anywhere. OSHA and ANSI approved. It features rugged aerospace engineered 6061 aluminum alloy construction with a clean-touch anodized finish. Also includes a no-pinch closure system, nonslip end caps and integrated carry handle.',
price: 216.91,
storefront: true,
category_id: tools.id
)

fbt27 = FrequentlyBoughtTogether.create!(product_id: product27.id)
product27.frequently_bought_together_id = fbt27.id
product27.save!

picture27_1 = ProductPicture.create!(product_id: product27.id)
picture27_1.image = File.open(File.join(Rails.root, 'app/assets/images/ladder2/ladder2_1.jpg'))
picture27_1.save!


product28 = Product.create!(
title: 'Yost BV-4 Bench Vise, 4", Blue',
brief_description: 'The Yost BV-4 4" bench vise is an all-purpose bench vise. A staple for any home workshop, no matter what your job is. Built for durability and dependability, this vise is constructed from 30,000 PSI cast iron.',
full_description: 'The Yost BV-4 4" bench vise is an all-purpose bench vise. A staple for any home workshop, no matter what your job is. Built for durability and dependability, this vise is constructed from 30,000 PSI cast iron. The replaceable serrated jaws will prevent objects from moving around once you have clamped them in place. A large anvil on the back of the vise is perfect for forming and shaping metal pieces. The anvil is machined to provide a smooth work surface. The 120 degree swivel base allows this vise to be positioned in to clamp parts with ease. The dual lockdowns on the vise are designed to keep the vise in place once in position. The acme threaded main screw provides smooth operation.',
price: 30.60,
storefront: true,
category_id: tools.id
)

fbt28 = FrequentlyBoughtTogether.create!(product_id: product28.id)
product28.frequently_bought_together_id = fbt28.id
product28.save!

picture28_1 = ProductPicture.create!(product_id: product28.id)
picture28_1.image = File.open(File.join(Rails.root, 'app/assets/images/tiski1/tiski1.jpg'))
picture28_1.save!



product29 = Product.create!(
title: 'WEN 4276 6-Inch Bench Grinder',
brief_description: 'Remember when you spent all that money replacing dull rusty tools? From deburring ragged edges to cleaning objects to sharpening blades, the WEN 6-inch Bench Grinder is the ideal companion for any workshop.',
full_description: 'Remember when you spent all that money replacing dull rusty tools? From deburring ragged edges to cleaning objects to sharpening blades, the WEN 6-inch Bench Grinder is the ideal companion for any workshop. These machines allow for simple resuscitation of dull blades, scissors, screwdrivers, and more. Compact yet powerful, the WEN 6-Inch Bench Grinder provides reliability even in the face of the most difficult tasks.',
price: 39.43,
storefront: true,
category_id: tools.id
)

fbt29 = FrequentlyBoughtTogether.create!(product_id: product29.id)
product29.frequently_bought_together_id = fbt29.id
product29.save!

picture29_1 = ProductPicture.create!(product_id: product29.id)
picture29_1.image = File.open(File.join(Rails.root, 'app/assets/images/stanok1/stanok1.jpg'))
picture29_1.save!
picture29_2 = ProductPicture.create!(product_id: product29.id)
picture29_2.image = File.open(File.join(Rails.root, 'app/assets/images/stanok1/stanok2.jpg'))
picture29_2.save!
picture29_3 = ProductPicture.create!(product_id: product29.id)
picture29_3.image = File.open(File.join(Rails.root, 'app/assets/images/stanok1/stanok3.jpg'))
picture29_3.save!




product30 = Product.create!(
title: 'Mpow SNR 34dB Safety Ear Muffs, Professional Noise Cancelling, Hearing Protection, Ear Defenders',
brief_description: 'Softly padded headband and swivel cup design help you find the perfect fit and comfortable wearing without any irritation.',
full_description: 'Softly padded headband and swivel cup design help you find the perfect fit and comfortable wearing without any irritation. Compact folding design for convenient storage and a travel drawstring bag is included for easy packing.',
price: 11.99,
storefront: true,
category_id: tools.id
)

fbt30 = FrequentlyBoughtTogether.create!(product_id: product30.id)
product30.frequently_bought_together_id = fbt30.id
product30.save!

picture30_1 = ProductPicture.create!(product_id: product30.id)
picture30_1.image = File.open(File.join(Rails.root, 'app/assets/images/headphones1/headphones1.jpg'))
picture30_1.save!
picture30_2 = ProductPicture.create!(product_id: product30.id)
picture30_2.image = File.open(File.join(Rails.root, 'app/assets/images/headphones1/headphones2.jpg'))
picture30_2.save!
picture30_3 = ProductPicture.create!(product_id: product30.id)
picture30_3.image = File.open(File.join(Rails.root, 'app/assets/images/headphones1/headphones3.jpg'))
picture30_3.save!


product31 = Product.create!(
title: 'Kidde FA110 Multi Purpose Fire Extinguisher 1A10BC',
brief_description: 'This recreational home fire extinguisher is a UL-listed unit that keeps small fires from spreading and growing. It’s non-rechargeable and designed for single use.',
full_description: 'This recreational home fire extinguisher is a UL-listed unit that keeps small fires from spreading and growing. It’s non-rechargeable and designed for single use.^^Features Lightweight Aluminum Body Tough Nylon Valve Assembly Pressure Gauge for At-a-Glance Status Multipurpose Dry Chemical^^Suitable Uses Class A Fires (Trash, Wood, and Paper)Class B Fires (Liquids and Gases)Class C Fires (Energized Electrical Equipment) Model#: FA110.',
price: 19.98,
storefront: true,
category_id: tools.id
)

fbt31 = FrequentlyBoughtTogether.create!(product_id: product31.id)
product31.frequently_bought_together_id = fbt31.id
product31.save!

picture31_1 = ProductPicture.create!(product_id: product31.id)
picture31_1.image = File.open(File.join(Rails.root, 'app/assets/images/fire1/fire1.jpg'))
picture31_1.save!
picture31_2 = ProductPicture.create!(product_id: product31.id)
picture31_2.image = File.open(File.join(Rails.root, 'app/assets/images/fire1/fire2.jpg'))
picture31_2.save!
picture31_3 = ProductPicture.create!(product_id: product31.id)
picture31_3.image = File.open(File.join(Rails.root, 'app/assets/images/fire1/fire3.jpg'))
picture31_3.save!



product32 = Product.create!(
title: 'Streamlight 69260 TLR-1 HL Weapon Mount Tactical Flashlight Light 800 Lumens with Strobe',
brief_description: 'Streamlight 69260 TLR-1 HL High Lumen Rail-Mounted Tactical Light. The TLR-1 HL provides a 800 lumen blast of light for maximum illumination while clearing a room or searching an alley.',
full_description: 'Streamlight 69260 TLR-1 HL High Lumen Rail-Mounted Tactical Light. The TLR-1 HL provides a 800 lumen blast of light for maximum illumination while clearing a room or searching an alley. Its wide beam pattern, lights up large areas so you can identify who or what is nearby. C4 LED delivers 12,000 candela peak beam intensity; 800 lumens. TIR optic produces a concentrated beam with optimum peripheral illumination. Runs 1.25-Hours. Solid-state current regulation for consistent illumination level. It has an ambidextrous momentary/steady On-Off switch. Double tap momentary paddle to activate strobe. Securely fits a broad range of weapons; includes keys for Glock-style, Picatinny, Beretta 90two, S&W 99 and S&W TSW. Mounts directly to handguns with Glock-style rails and to all MIL-STD-1913 (Picatinny) rails. One handed snap-on and tighten interface keeps hands away from muzzle when attaching/detaching. Made up of 6000 series machined aircraft aluminum with anodized finish and shock-mounted glass lens. Tethered battery door and latch mechanism prevents battery door loss while providing easy battery replacement. Operating temperature: -40 to +120 Degree Fahrenheit. IPX7 waterproof to 1-meter for 30-Minutes. User programmable strobe can be enabled/disabled. Powered by two 3V CR123A lithium batteries (included). Serialized for positive identification. Length: 3.39-Inch (8.61 cm); Weight: 4.18-Ounce (118.6 grams). Comes with a limited lifetime warranty.',
price: 120.00,
storefront: true,
category_id: tools.id
)

fbt32 = FrequentlyBoughtTogether.create!(product_id: product32.id)
product32.frequently_bought_together_id = fbt32.id
product32.save!

picture32_1 = ProductPicture.create!(product_id: product32.id)
picture32_1.image = File.open(File.join(Rails.root, 'app/assets/images/light1/light1.jpg'))
picture32_1.save!
picture32_2 = ProductPicture.create!(product_id: product32.id)
picture32_2.image = File.open(File.join(Rails.root, 'app/assets/images/light1/light2.jpg'))
picture32_2.save!
picture32_3 = ProductPicture.create!(product_id: product32.id)
picture32_3.image = File.open(File.join(Rails.root, 'app/assets/images/light1/light3.jpg'))
picture32_3.save!



product33 = Product.create!(
title: 'SKIL 75540 4-3/8-Inch by 40T Carbide Flooring Blade',
brief_description: 'The product is 4-3/8" 40T Carb Blade. Easy to use. The product is manufactured in China.',
full_description: 'The product is 4-3/8" 40T Carb Blade. Easy to use. The product is manufactured in China. For use with Skil 3600-02 Flooring Saw. Great for cutting laminate floor, solid wood floor, and engineered wood floor.',
price: 6.99,
storefront: true,
category_id: tools.id
)

fbt33 = FrequentlyBoughtTogether.create!(product_id: product33.id)
product33.frequently_bought_together_id = fbt33.id
product33.save!

picture33_1 = ProductPicture.create!(product_id: product33.id)
picture33_1.image = File.open(File.join(Rails.root, 'app/assets/images/saw_disk1/saw_disk1.jpg'))
picture33_1.save!




product34 = Product.create!(
title: 'Pfister LG46M0BY Marielle 2-Handle Mini-Widespread Bathroom Faucet in Tuscan Bronze',
brief_description: 'A touch of old world craftsmanship is artfully reflected in the marielle® bathroom collection. This traditional French country design is highlighted by a high-arc spout and two conical handles.',
full_description: 'A touch of old world craftsmanship is artfully reflected in the marielle® bathroom collection. This traditional French country design is highlighted by a high-arc spout and two conical handles. The unique 4 inch lavatory faucet can be installed as either a traditional centerset or mini-widespread faucet.',
price: 175.58,
storefront: true,
category_id: home.id
)

fbt34 = FrequentlyBoughtTogether.create!(product_id: product34.id)
product34.frequently_bought_together_id = fbt34.id
product34.save!

picture34_1 = ProductPicture.create!(product_id: product34.id)
picture34_1.image = File.open(File.join(Rails.root, 'app/assets/images/kran1/kran1.jpg'))
picture34_1.save!
picture34_2 = ProductPicture.create!(product_id: product34.id)
picture34_2.image = File.open(File.join(Rails.root, 'app/assets/images/kran1/kran2.jpg'))
picture34_2.save!




product35 = Product.create!(
title: 'Kwikset 912 Z-Wave SmartCode Electronic Touchpad Deadbolt w/Tustin Lever',
brief_description: 'Step up to designer styles and superior security with Kwikset Signature Series products. Add a level of security and style to your home with the SmartCode touchpad electronic lever.',
full_description: 'Step up to designer styles and superior security with Kwikset Signature Series products. Add a level of security and style to your home with the SmartCode touchpad electronic lever. Designed with a sleek style to complement your home\'s interior, you can lock up your home office, wine cellar or storage room and never have to worry about keys. To gain entry, simply enter your personalized access code, while locking is as easy as touching a button. SmartCode is easy to install, program and use and operates on 4 AA batteries. It also features SmartKey re-key technology as the back-up keyway. Both knobs/levers can be locked or unlocked by key on the outside, or turn button on the inside. SmartKey Re-key Technology allows you to control who has access to your home. Re-key the lock yourself in seconds in 3 easy steps. Have you recently moved or had a child lose a key? It\’s time to re-key. SmartKey provides the highest level of residential security and features BumpGuard to protect against lock bumping. The crisp, clean appearance of the Satin Nickel finish adds to the overall look of the product and brings a modern feel.Per instructions, can only re-key to Kwikset KW1 keyway. Cannot rekey to Schlage or other keyways.',
price: 143.12,
storefront: true,
category_id: home.id
)

fbt35 = FrequentlyBoughtTogether.create!(product_id: product35.id)
product35.frequently_bought_together_id = fbt35.id
product35.save!

picture35_1 = ProductPicture.create!(product_id: product35.id)
picture35_1.image = File.open(File.join(Rails.root, 'app/assets/images/lock1/lock1.jpg'))
picture35_1.save!
picture35_2 = ProductPicture.create!(product_id: product35.id)
picture35_2.image = File.open(File.join(Rails.root, 'app/assets/images/lock1/lock2.jpg'))
picture35_2.save!
picture35_3 = ProductPicture.create!(product_id: product35.id)
picture35_3.image = File.open(File.join(Rails.root, 'app/assets/images/lock1/lock3.jpg'))
picture35_3.save!



product36 = Product.create!(
title: 'Progress Lighting P4202-84 6-Light Le Jardin Chandelier',
brief_description: 'Progress Lighting P4202-84 Six-light chandelier with weathered sand stone glass and leaf accents. Espresso Le Jardin Collection Espresso 6-light Chandelier Le Jardin is a dramatic blend of traditional craftsmanship and styling.',
full_description: 'Progress Lighting P4202-84 Six-light chandelier with weathered sand stone glass and leaf accents. Espresso Le Jardin Collection Espresso 6-light Chandelier Le Jardin is a dramatic blend of traditional craftsmanship and styling. Sweeping into a unique scroll design, leaves stem naturally into the open spaces for a delightful play of light and shadow. Richly weathered sand stone glass shades are subtly scalloped to highlight the antiqued finish. Espresso finish Weathered sandstone glass 28 In. Diameter x 32 In. Height Uses (6) 100-watt medium base bulbs',
price: 282.99,
storefront: true,
category_id: home.id
)

fbt36 = FrequentlyBoughtTogether.create!(product_id: product36.id)
product36.frequently_bought_together_id = fbt36.id
product36.save!

picture36_1 = ProductPicture.create!(product_id: product36.id)
picture36_1.image = File.open(File.join(Rails.root, 'app/assets/images/lamp1/lamp1.jpg'))
picture36_1.save!




product37 = Product.create!(
title: 'Brentwood TS-337 Single Hot Plate, 10-Inch by 10.5-Inch by 3.25-Inch, Chrome',
brief_description: 'Brentwood\'S ts-337 electric single hot plate features a power light indicator, easyto clean chromed housing and 1000 watts of power. Perfect for dorm rooms.',
full_description: 'Brentwood\'S ts-337 electric single hot plate features a power light indicator, easyto clean chromed housing and 1000 watts of power. Perfect for dorm rooms.',
price: 14.78,
storefront: true,
category_id: home.id
)

fbt37 = FrequentlyBoughtTogether.create!(product_id: product37.id)
product37.frequently_bought_together_id = fbt37.id
product37.save!

picture37_1 = ProductPicture.create!(product_id: product37.id)
picture37_1.image = File.open(File.join(Rails.root, 'app/assets/images/plitka1/plitka1.jpg'))
picture37_1.save!




product38 = Product.create!(
title: '15 Piece Nonstick Cookware Set - Colored Kitchen Pots and Pans Set Nonstick with Cooking Utensils',
brief_description: 'Cookware set includes: 14 x 6.5cm saucepan with glass lid capacity: 1.1qt, 16 x 7cm saucepan with glass lid capacity: 1.5qt, 18 x 8cm saucepan with glass lid capacity: 2.1 QT, 24 x 11cm stockpot with glass lid capacity: 5.3 QT, 20 x 4cm frypan / 8'' and 26 x 5cm frypan / 10''. 5 pieces FDA grade nylon tools (slotted spoon - slotted spatula- pasta server- ladle- potato masher).',
full_description: 'Cookware set includes: 14 x 6.5cm saucepan with glass lid capacity: 1.1qt, 16 x 7cm saucepan with glass lid capacity: 1.5qt, 18 x 8cm saucepan with glass lid capacity: 2.1 QT, 24 x 11cm stockpot with glass lid capacity: 5.3 QT, 20 x 4cm frypan / 8'' and 26 x 5cm frypan / 10''. 5 pieces FDA grade nylon tools (slotted spoon - slotted spatula- pasta server- ladle- potato masher).',
price: 40.99,
storefront: true,
category_id: home.id
)

fbt38 = FrequentlyBoughtTogether.create!(product_id: product38.id)
product38.frequently_bought_together_id = fbt38.id
product38.save!

picture38_1 = ProductPicture.create!(product_id: product38.id)
picture38_1.image = File.open(File.join(Rails.root, 'app/assets/images/cookware_set1/cookware_set1.jpg'))
picture38_1.save!
picture38_2 = ProductPicture.create!(product_id: product38.id)
picture38_2.image = File.open(File.join(Rails.root, 'app/assets/images/cookware_set1/cookware_set2.jpg'))
picture38_2.save!


product39 = Product.create!(
title: 'TableCraft Coca-Cola CC304 Vending Machine Toothpick Dispenser',
brief_description: 'Relive the nostalgia of your childhood with this officially sanctioned vending machine style toothpick dispenser from Coca-Cola! The classic design evokes soda fountains, laughter and wholesome fun in our fast-paced modern society.',
full_description: 'Relive the nostalgia of your childhood with this officially sanctioned vending machine style toothpick dispenser from Coca-Cola! The classic design evokes soda fountains, laughter and wholesome fun in our fast-paced modern society.',
price: 14.85,
storefront: true,
category_id: home.id
)

fbt39 = FrequentlyBoughtTogether.create!(product_id: product39.id)
product39.frequently_bought_together_id = fbt39.id
product39.save!

picture39_1 = ProductPicture.create!(product_id: product39.id)
picture39_1.image = File.open(File.join(Rails.root, 'app/assets/images/coke1/coke1.jpg'))
picture39_1.save!
picture39_2 = ProductPicture.create!(product_id: product39.id)
picture39_2.image = File.open(File.join(Rails.root, 'app/assets/images/coke1/coke2.jpg'))
picture39_2.save!


product40 = Product.create!(
title: 'Villeroy & Boch French Garden Kitchen Tea kettle 67oz (2 liter)',
brief_description: 'Whistling tea kettle',
full_description: 'Whistling tea kettle',
price: 42.98,
storefront: true,
category_id: home.id
)

fbt40 = FrequentlyBoughtTogether.create!(product_id: product40.id)
product40.frequently_bought_together_id = fbt40.id
product40.save!

picture40_1 = ProductPicture.create!(product_id: product40.id)
picture40_1.image = File.open(File.join(Rails.root, 'app/assets/images/kettle1/kettle1.jpg'))
picture40_1.save!



product41 = Product.create!(
title: 'Hamilton Beach 12-Cup Stack and Snap Food Processor',
brief_description: 'Whether you are cooking for two or prepping a large family meal, the Hamilton Beach Stack & Snap 12 Cup Food Processor takes the guesswork out of food processing with a simple function guide that shows you which blade to use and which button to press.',
full_description: 'Whether you are cooking for two or prepping a large family meal, the Hamilton Beach Stack & Snap 12 Cup Food Processor takes the guesswork out of food processing with a simple function guide that shows you which blade to use and which button to press. Designed to be uniquely simple - there\'s no twisting, turning or locking required when assembling the food processor. Chop, slice, shred, mix and puree just about anything with the powerful 450 Watt motor. There is no max liquid fill line on this food processor, so you can process liquids without worrying about leaks because the bowl is sealed. The large-capacity bowl holds 12 cups and has a pour spout to reduce messy drips. This processor has a Big Mouth feed tube that saves you time by reducing the need for pre-cutting. In-bowl blade storage, cord storage and dishwasher-safe parts make for easy cleaning and storage.',
price: 47.99,
storefront: true,
category_id: home.id
)

fbt41 = FrequentlyBoughtTogether.create!(product_id: product41.id)
product41.frequently_bought_together_id = fbt41.id
product41.save!

picture41_1 = ProductPicture.create!(product_id: product41.id)
picture41_1.image = File.open(File.join(Rails.root, 'app/assets/images/food1/food1.jpg'))
picture41_1.save!
picture41_2 = ProductPicture.create!(product_id: product41.id)
picture41_2.image = File.open(File.join(Rails.root, 'app/assets/images/food1/food2.jpg'))
picture41_2.save!
picture41_3 = ProductPicture.create!(product_id: product41.id)
picture41_3.image = File.open(File.join(Rails.root, 'app/assets/images/food1/food3.jpg'))
picture41_3.save!
picture41_4 = ProductPicture.create!(product_id: product41.id)
picture41_4.image = File.open(File.join(Rails.root, 'app/assets/images/food1/food4.jpg'))
picture41_4.save!
picture41_5 = ProductPicture.create!(product_id: product41.id)
picture41_5.image = File.open(File.join(Rails.root, 'app/assets/images/food1/food5.jpg'))
picture41_5.save!



product42 = Product.create!(
title: 'KitchenAid KV25GOXER Professional 5 Plus 5-Quart Stand Mixer, Empire Red',
brief_description: 'The Professional 5 Plus has a powerful 450-watt motor that delivers enough power to handle the heaviest mixtures, and mixes large batches easily. This special bowl lift model has brackets on the bowl that fit over support pins on the stand mixer, which is than lifted up by a handle on the right side of the mixer to lock the bowl in place while mixing (this design is made to handle heavy mixtures and large recipes).',
full_description: 'The Professional 5 Plus has a powerful 450-watt motor that delivers enough power to handle the heaviest mixtures, and mixes large batches easily. This special bowl lift model has brackets on the bowl that fit over support pins on the stand mixer, which is than lifted up by a handle on the right side of the mixer to lock the bowl in place while mixing (this design is made to handle heavy mixtures and large recipes). The 5-quart polished stainless steel bowl is dishwasher safe. Its ergonomically designed handle is contoured to fit the hand and makes lifting the bowl more comfortable. This mixer also features a unique mixing action: the beater spins clockwise as the shaft spins counter clockwise, moving the beater to 67 different points around the bowl. This distinctive mixing action creates a thorough blend of ingredients and eliminates the need to rotate the bowl. 10 speeds allow the user to select the right speed for the mixing job, from very high to a very slow stir. The flat beater, dough hook, and professional wire whip add to the versatility of the mixer. In addition, the Soft Start mixing feature helps prevent ingredient splash-out and "flour puff" at startup, while "Overload Reset" helps eliminate overheating of the motor. A hinged hub cover flips up, allowing easy installation of attachments and never leaves the mixer.',
price: 228.23,
storefront: true,
category_id: home.id
)

fbt42 = FrequentlyBoughtTogether.create!(product_id: product42.id)
product42.frequently_bought_together_id = fbt42.id
product42.save!

picture42_1 = ProductPicture.create!(product_id: product42.id)
picture42_1.image = File.open(File.join(Rails.root, 'app/assets/images/mixer1/mixer1.jpg'))
picture42_1.save!
picture42_2 = ProductPicture.create!(product_id: product42.id)
picture42_2.image = File.open(File.join(Rails.root, 'app/assets/images/mixer1/mixer2.jpg'))
picture42_2.save!
picture42_3 = ProductPicture.create!(product_id: product42.id)
picture42_3.image = File.open(File.join(Rails.root, 'app/assets/images/mixer1/mixer3.jpg'))
picture42_3.save!
picture42_4 = ProductPicture.create!(product_id: product42.id)
picture42_4.image = File.open(File.join(Rails.root, 'app/assets/images/mixer1/mixer4.jpg'))
picture42_4.save!
picture42_5 = ProductPicture.create!(product_id: product42.id)
picture42_5.image = File.open(File.join(Rails.root, 'app/assets/images/mixer1/mixer5.jpg'))
picture42_5.save!




product43 = Product.create!(
title: 'KitchenAid KEK1222PT 1.25-Liter Electric Kettle - Pistachio',
brief_description: 'The KitchenAid Electric Kettle is simple to use and offers a stylish compact footprint for your countertop.',
full_description: 'The KitchenAid Electric Kettle is simple to use and offers a stylish compact footprint for your countertop.',
price: 79.05,
storefront: true,
category_id: home.id
)

fbt43 = FrequentlyBoughtTogether.create!(product_id: product43.id)
product43.frequently_bought_together_id = fbt43.id
product43.save!

picture43_1 = ProductPicture.create!(product_id: product43.id)
picture43_1.image = File.open(File.join(Rails.root, 'app/assets/images/kettle2/kettle2_1.jpg'))
picture43_1.save!
picture43_2 = ProductPicture.create!(product_id: product43.id)
picture43_2.image = File.open(File.join(Rails.root, 'app/assets/images/kettle2/kettle2_2.jpg'))
picture43_2.save!
picture43_3 = ProductPicture.create!(product_id: product43.id)
picture43_3.image = File.open(File.join(Rails.root, 'app/assets/images/kettle2/kettle2_3.jpg'))
picture43_3.save!
picture43_4 = ProductPicture.create!(product_id: product43.id)
picture43_4.image = File.open(File.join(Rails.root, 'app/assets/images/kettle2/kettle2_4.jpg'))
picture43_4.save!


product44 = Product.create!(
title: 'PanSaver EZ Clean Multi-Use Cooking Bags Slow Cooker Liners, 25 Count',
brief_description: 'Ovenable (400ºF/204ºC) PanSaver EZ Clean Multi-Use Cooking Bags /Slow Cooker Liners Are Used in Food Preparation, Cooking and Holding, to Prevent Food From "Baking-on" and "Burning-on" to the Pot, Pan or Slow cooker. PanSaver Pan Liners are Convenient, Time Saving Kitchen Aids Which Will Improve the Food You Serve As Well As Reduce Your Costs. 25 Liners and Ties Per Box',
full_description: 'Ovenable (400ºF/204ºC) PanSaver EZ Clean Multi-Use Cooking Bags /Slow Cooker Liners Are Used in Food Preparation, Cooking and Holding, to Prevent Food From "Baking-on" and "Burning-on" to the Pot, Pan or Slow cooker. PanSaver Pan Liners are Convenient, Time Saving Kitchen Aids Which Will Improve the Food You Serve As Well As Reduce Your Costs. 25 Liners and Ties Per Box',
price: 14.14,
storefront: true,
category_id: home.id
)

fbt44 = FrequentlyBoughtTogether.create!(product_id: product44.id)
product44.frequently_bought_together_id = fbt44.id
product44.save!

picture44_1 = ProductPicture.create!(product_id: product44.id)
picture44_1.image = File.open(File.join(Rails.root, 'app/assets/images/slowcooker1/slowcooker1.jpg'))
picture44_1.save!




product45 = Product.create!(
title: 'Totally Bamboo 3 Piece Bamboo Cutting Board Set, For Meat & Veggie Prep, Serve Bread, Crackers & Cheese, Cocktail Bar Board',
brief_description: 'Don\'t be caught again without an extra cutting board. This set from Totally Bamboo includes three versatile 100% bamboo cutting boards. The boards measure 6" by 8", 8-1/2" by 11" and 9-1/2" by 13" and each one is only 3/8" thick.',
full_description: 'Don\'t be caught again without an extra cutting board. This set from Totally Bamboo includes three versatile 100% bamboo cutting boards. The boards measure 6" by 8", 8-1/2" by 11" and 9-1/2" by 13" and each one is only 3/8" thick. Plenty of functional surface area to work on but lightweight, easy to maneuver and store. Made from bamboo, they are durable, long lasting and safe for food prep and will not damage the blade of your knives. In order to extend the life of the cutting boards, we suggest hand washing with warm water and occasionally using Totally Bamboo\'s Revitalizing Oil to maintain the beauty of your boards. Every Totally Bamboo piece is distinctively attractive and super durable. Bamboo is the natural alternative for all things wood, substantially stronger than hard woods often used for cutting boards. It is the fastest growing plant on our planet and does not require any special care to grow. In fact, it is a grass that produces more oxygen than a hard wood forest of comparable size, therefore reducing carbon dioxide gases associated with climate change. It also prevents soil erosion through its widespread root system and large canopy. At Totally Bamboo, we are proud to use "Moso" timber which is harvested at the optimum age of 5 years from our own bamboo forests. Our goal is continuous improvement through design, developing new, unique and innovative products which appeal to the environmentally conscious.',
price: 12.99,
storefront: true,
category_id: home.id
)

fbt45 = FrequentlyBoughtTogether.create!(product_id: product45.id)
product45.frequently_bought_together_id = fbt45.id
product45.save!

picture45_1 = ProductPicture.create!(product_id: product45.id)
picture45_1.image = File.open(File.join(Rails.root, 'app/assets/images/boards1/boards1.jpg'))
picture45_1.save!
picture45_2 = ProductPicture.create!(product_id: product45.id)
picture45_2.image = File.open(File.join(Rails.root, 'app/assets/images/boards1/boards2.jpg'))
picture45_2.save!
picture45_3 = ProductPicture.create!(product_id: product45.id)
picture45_3.image = File.open(File.join(Rails.root, 'app/assets/images/boards1/boards3.jpg'))
picture45_3.save!



cart1 = Cart.create!(user_id: user1.id)
user1.cart_id = cart1.id
user1.save!

CartProduct.create(cart_id: cart1.id, product_id: product4.id)
CartProduct.create(cart_id: cart1.id, product_id: product5.id)
