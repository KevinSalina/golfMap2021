const golfCourseArray = [
    [
      'Airways Golf Club',
      'West Suffield, CT',
      'http://www.airwaysgolf.com',
      'Monday – Friday after 12PM $20 Service Fee includes Greens Fee and Cart',
      'Saturday and Sunday after 12PM $25 Service Fee includes Greens Fee and Cart'
    ],
    [
      'Black Birch Golf Club',
      'Moodus, CT',
      'http://www.blackbirchgolf.com',
      'Monday – Friday anytime. Saturdays and Sundays after 1PM – $25 Service Fee'
    ],
    [
      'Blackledge Country Club - Anderson’s Glen Course',
      'https://blackledgecc.net/',
      'Hebron, CT',
      'Monday – Thursday between anytime, Saturday & Sunday after 2pm – $45 Service Fee Includes Greens Fee and Cart'
    ],
    [
      'Blackledge Country Club - Gilead Highland’s Course',
      'https://blackledgecc.net/',
      'Hebron, CT',
      'Monday – Thursday between anytime, Saturday & Sunday after 2pm – $45 Service Fee Includes Greens Fee and Cart'
    ],
    [
      'Blue Fox Run Golf Club',
      'Avon, CT',
      'http://www.bluefoxent.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$31 service fee includes greens fee and cart'
    ],
    [
      'Canaan Country Club',
      'Canaan, CT',
      'http://www.canaancountryclub.com',
      'Mon – Fri Before 2PM, Sunday after 2pm. Cart Fee Required'
    ],
    [
      'Chanticlair Golf Course',
      'Colchester, CT',
      'http://www.chanticlair.com',
      'Mon – Thurs anytime, Sat & Sun after 1PM. $40 for Two Includes Greens Fee & Cart'
    ],
    [
      'Connecticut National Golf Club',
      'East Putnam, CT',
      'http://www.ctnationalgolf.com/',
      'Monday – Thursday anytime. Saturdays and Sundays after 1PM',
      '– $25 Service Fee includes greens fee & cart'
    ],
    [
      'Copper Hill Golf Club',
      'East Granby, CT',
      'http://www.copperhillgolf.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '– $20 Service Fee includes Greens Fee and Cart. No Holidays'
    ],
    [
      'Crestbrook Park Golf Course',
      'Watertown, CT',
      'http://www.crestbrookpark.com',
      'Mon, Tues & Thurs before 12PM, Sat & Sun after 12pm.',
      '$30 Service Fee includes greens fee & cart'
    ],
    [
      'East Hartford Golf Club',
      'East Hartford, Ct',
      'https://www.easthartfordgc.com',
      'Monday – Thursday anytime; Saturday & Sunday after 1PM',
      '$25 Service Fee includes Greens fee & cart'
    ],
    [
      'Eastwood Country Club',
      'Torrington, CT',
      'http://www.eastwoodcountryclub.com',
      'Mon – Fri anytime, Sat & Sun after 3pm. No Holidays',
      '$20 cart fee for 18 holes / $12 for 9 holes.'
    ],
    [
      'Elmridge Golf Club',
      'Pawcatuck, CT',
      'http://www.elmridgegolf.com/',
      'Monday through Thursday anytime, Saturday & Sunday after 2:00 pm.',
      '$40 service fee includes greens fee and cart.'
    ],
    [
      'Farmington Woods Country Club (Private Club)',
      'Avon, CT',
      'https://www.farmingtonwoods.com/Golf-Home.aspx',
      'Mon – Thurs after 1PM, Sun after 1PM',
      '$50 fee includes 18-holes & cart'
    ],
    [
      'Fox Hopyard Golf Club',
      'East Haddam, CT',
      'http://www.golfthefox.com/',
      'Monday – Thursday only. No June or July play.',
      '$69 before 2PM, $49 after 2PM Includes greens fee, cart and range',
      'Before May 1 & after Nov 1 – $49 before 2PM, $39 after 2PM Includes greens fee, cart and range'
    ],
    [
      'Gillette Ridge Golf Club',
      'Bloomfield, CT',
      'http://www.gilletteridgegolf.com/',
      'Mon. – Thurs anytime, Saturday and Sunday after 1PM.',
      '$40 Service Fee includes greens fee & cart'
    ],
    [
      'Goodwin Park Golf Course',
      'Hartford, CT',
      'http://www.goodwinparkgolf.com/',
      'Monday – Thurs anytime, Sat & Sun after 1PM.',
      '$30 Service Fee includes Greens Fee and cart Fee.'
    ],
    [
      'Green Woods Country Club',
      'Winsted, CT',
      'http://www.greenwoodscc.net/',
      'Monday – Thursday anytime, Sunday after 1PM. $25 Service Fee for 18 holes includes Greens Fee and Cart'
    ],
    [
      'Hawk’s Landing Country Club',
      'Southington, CT',
      'http://www.hawkslandingcc.com/',
      'Monday – Friday anytime, Sunday after 1pm.',
      '$35 Service Fee includes greens fee & cart'
    ],
    [
      'Highland Greens Golf Club',
      'Prospect, CT',
      'https://www.highlandgreens.com',
      'Any Day, Any Time, Cart Fee Required'
    ],
    [
      'Hunter Golf Course',
      'Meriden, CT',
      'http://www.huntergolfclub.com',
      'Monday – Thursday anytime, Saturday & Sunday after 1pm.',
      '$40 Service Fee includes greens fee & cart'
    ],
    [
      'Keney Park Golf Course',
      'Hartford, CT',
      'http://www.keneyparkgolf.com',
      'Monday – Thursday Anytime, Saturday & Sunday after 1PM',
      '$35 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Laurel View Country Club',
      'Hamden, CT',
      'http://www.laurelviewcc.com/',
      'Monday – Friday anytime, Sat & Sun after 1PM',
      '$35 Service Fee includes greens fee & cart'
    ],
    [
      'Manchester Country Club',
      'Manchester, CT',
      'http://www.mancc.com/',
      'Monday – Thursday after 11 AM, Sat & Sun after 2 PM,',
      '$39 Service Fee includes greens fee & cart'
    ],
    [
      'Miner Hills Golf Course',
      'Middletown, CT',
      'http://www.minerhillsgolfcourse.com/',
      'Monday – Thurs 7am – 3pm only, Sun. after 1pm; $20 cart fee for 18 holes'
    ],
    [
      'Minnechaug Golf Course',
      'Glastonbury, CT',
      'http://www.minnechauggolf.com/',
      'Monday – Friday 10am – 3pm, Sat & Sun after 1PM.',
      '$20 Service Fee includes greens fee & cart for 9 holes.       Replay rate $15'
    ],
    [
      'Norwich Golf Course',
      'Norwich, CT',
      'http://www.norwichgolf.com/',
      'Any Day, Any Tme,',
      '$40 service fee includes greens fee & cart.'
    ],
    [
      'Oakwood Virtual Golf',
      'Glastonbury, CT',
      'http://www.OakWoodVirtualGolf.com/',
      'One Complimentary Hour With One Paid Hour. April – November ONLY'
    ],
    [
      'Pomperaug Golf Course',
      'Southbury, CT',
      'http://http//www.heritagesouthbury.com/golffitness.htm',
      'Monday – Thursday anytime and Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Portland Golf Course',
      'Portland, CT',
      'http://www.portlandgolfcourse.com/',
      'Monday – Friday anytime, Saturday & Sunday After 1PM',
      '$45 Service Fee includes greens fee & cart'
    ],
    [
      'Quarry Ridge Golf Club',
      'Portland, CT',
      'http://www.quarryridge.com/',
      'Monday – Friday anytime $35 Service Fee includes Greens Fee and Cart;',
      'Sat, Sun & Holidays after 11AM; $39 Service Fee includes Greens Fee and Cart'
    ],
    [
      'River Ridge Golf Club',
      'Jewett City, CT',
      'http://www.riverridgegolf.com',
      'Mon – Thurs 9am – 4pm, Fri, Sat & Sun after 1 PM $45 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Roseland Golf Course',
      'South Woodstock, CT',
      'http://www.roselandgolfcourse.com',
      'Mon – Thurs anytime, Sunday after 2pm,',
      '$15 cart fee for 18 holes / $10 for 9 holes.'
    ],
    [
      'Rockledge Golf Club',
      'West Hartford, CT',
      'http://www.golfrockledge.com/',
      'Monday – Friday 11am – 3 pm, Saturday, Sunday and Holidays after 1pm.',
      '$50 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Simsbury Farms Golf Course',
      'West Simsbury, CT',
      'http://www.simsburyfarms.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$39 Service Fee includes greens fee & cart'
    ],
    [
      'Southington Country Club',
      'Southington, CT',
      'http://www.southingtoncountryclub.com/',
      'Monday – Thurs anytime, Sunday after 1pm. $40 Service Fee required includes greens fee & cart.'
    ],
    [
      'Stanley Golf Course',
      'New Britain, CT',
      'http://www.stanleygolf.com',
      'Monday – Thurs before 1PM, Saturday, Sunday & Holidays after 1pm. $38 Service Fee required includes greens fee & cart.'
    ],
    [
      'Suffield Country Club (Private Club)',
      'Suffield, CT',
      'https://suffieldcc.com/',
      'Monday after 12PM; Tuesday thru Friday After 10am NO WEEKENDS,“Member for a Day” Fee of $45 includes Greens Fee & Cart Valid 4/15- 5/26 and After 9/25'
    ],
    [
      'Tallwood Country Club',
      'Hebron, CT',
      'http://www.tallwoodcountryclub.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$45 service fee includes greens fee & cart and a $5 Food Voucher.'
    ],
    [
      'The Club at River Oaks (Private Club)',
      'Sherman, CT',
      'https://www.clubriveroaks.com/',
      'All day Tuesday, Wed 10-12, Thursday 8-11. MUST Call.',
      'Member for a Day Fee of $75 includes Greens Fee & Cart. Refer to ClubRiverOaks.com for club policy.'
    ],
    [
      'Timberlin Golf Course',
      'Berlin, CT',
      'http://www.timberlingolf.com/',
      'Monday – Friday anytime and Sundays after 1PM',
      '$37 service fee includes greens fee & cart.'
    ],
    [
      'The Golf Club at Windham',
      'North Windham, CT',
      'http://http//www.windhamclub.com',
      'Monday – Thurs anytime, Sunday after 1pm.',
      '$30 Service Fee Includes Greens Fee and Cart.'
    ],
    [
      'The Hotchkiss School Golf Course',
      'Lakeville, CT',
      'http://www.hotchkiss.org/athletics/facilities/the-hotchkiss-golf-course/index.aspx',
      'Monday – Wednesday before 1PM, No Thursdays through August; Friday, Saturday & Sunday after 1PM. MUST CALL AHEAD. CASH ONLY'
    ],
    [
      'Tumble Brook Country Club (Private Club)',
      'Bloomfield, CT',
      'https://www.tumblebrookcc.com/',
      'Tuesday – Friday Anytime',
      'Member for a Day Fee of $55 includes Greens Fee & Cart',
      'Saturday & Sunday after 1PM',
      'Member for a Day Fee of $75 includes Greens Fee & Cart'
    ],
    [
      'Twin Hills Country Club',
      'Coventry, CT',
      'http://www.twinhillscountryclub.com',
      'Monday – Thursday anytime, Friday, Saturday & Sunday after 1pm',
      '$40 service fee includes greens fee & cart and a $5 Food Voucher.'
    ],
    [
      'Vineyard Vally Golf Club',
      'Promfret Center, CT',
      'http://vineyardvalleygolfclub.com/',
      'Mon – Thurs anytime, Sat & Sun after 2pm,',
      '$18 cart fee for 18 holes / $10 for 9 holes'
    ],
    [
      'Whitney Farms Golf Course',
      'Monroe, CT',
      'https://www.whitneyfarmsgc.com',
      'Mon – Friday anytime',
      '$40 service fee includes greens fee & cart.'
    ],
    [
      'Bethel Resort Golf Course',
      'Bethel, ME',
      'http://www.bethelinn.com/',
      'Monday – Thursday anytime and Sundays after 1PM. Cart Fee Required'
    ],
    [
      'Dunegrass Golf Club',
      'Old Orchard Beach, ME',
      'http://www.dunegrass.com/',
      'Mon – Thursday anytime, Fri, Sat & Sun after 1PM',
      '$30 Service Fee includes Greens Fee and Cart'
    ],
    [
      'Lake Kezar Country Club',
      'Lovell, ME',
      'https://www.lakekezargolf.com',
      'Any day  after 1PM',
      '$30 Service Fee includes Greens Fee and Cart'
    ],
    [
      'Poland Spring Resort',
      'Poland Spring, ME',
      'http://www.polandspringinns.com/',
      'Monday – Thursday after 9am, Sun. after 1PM',
      'Cart Fee Required'
    ],
    [
      'Riverside Golf Course',
      'Portland, ME',
      'http://www.riversidegolfcourseme.com/',
      'Monday – Friday anytime, Sat & Sun after 11AM;',
      'Complimentary Greens Fee with Required Cart at Non-Member Rate'
    ],
    [
      'Spring Meadows Golf Club',
      'Gray, ME',
      'http://www.springmeadowsgolf.com/',
      'Monday – Thursday anytime, Friday, Saturday & Sunday after 1PM',
      '$35 Service Fee Includes Greens Fee & Cart',
      'Not Available in July or August'
    ],
    [
      'Agawam Municipal Golf Course',
      'Feeding Hills, MA',
      'http://www.agawamgolfcourse.com',
      'Monday – Thurs anytime, Sat & Sunday after 1PM.',
      '$20 Service Fee includes greens fee & cart'
    ],
    [
      'Bass River Golf Course',
      'Yarmouth, MA',
      'http://www.golfyarmouthcapecod.com/',
      '– April – June: Sun-Thurs after 11am, Fri & Sat after 2PM',
      '— July 12 to Oct 15 Mon-Thurs after 1PM, Sun after 2PM',
      '— Oct 16 – Dec: Sun-Thurs after 11am, Fri & Sat after 12PM',
      'Cart Fee Required – Limit Two certificates per foursome or 1 Certificate per twosome'
    ],
    [
      'Bayberry Hills Golf Course',
      'Yarmouth, MA',
      'http://www.golfyarmouthcapecod.com/',
      '— April – June: Sun-Thurs after 11am, Fri & Sat after 2PM',
      '— July 12 to Oct 15 Mon-Thurs after 1PM, Sun after 2PM',
      '— Oct 16 – Dec: Sun-Thurs after 11am, Fri & Sat after 12PM',
      'Cart Fee Required – Limit Two certificates per foursome or 1 Certificate per twosome'
    ],
    [
      'Bedrock Golf Club',
      'Rutland, MA',
      'http://www.bedrockgolfclub.com',
      'Monday – Friday after 11am, Saturdays and Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Blackstone National Golf Club',
      'Sutton, MA',
      'http://www.bngc.net/',
      'Monday thru Thursday anytime. Sat & Sun after 4:00pm.',
      'One free greens fee with one paid greens fee, or 50% off greens fee'
    ],
    [
      'Blandford Golf Club',
      'Blandford, MA',
      'http://www.massgolftennis.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Chelmsford Country Club',
      'Chelmsford, MA',
      'http://www.sterlinggolf.com',
      'Monday – Thursday anytime; Friday, Saturday & Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Captains Golf Course',
      'Brewster, MA',
      'http://www.captainsgolfcourse.com',
      'Monday – Thursday anytime and Sundays after 1PM',
      'No July & August play availability.',
      '$30 service fee required includes greens fee, cart, range token.'
    ],
    [
      'Cohasse Country Club (Private Club)',
      'Southbridge, MA',
      'https://www.cohasse.com/',
      'Mon – Fri before 12PM. MUST Call. Member for a Day Fee of $35 includes Greens Fee & Cart'
    ],
    [
      'Cold Spring Country Club',
      'Belchertown, MA',
      'https://www.coldspringcc.com',
      'Mon – Thur anytime, Sat & Sun after 1PM.',
      '$35 service fee required includes greens fee & cart'
    ],
    [
      'Crumpin-Fox Club',
      'N. Bernardston, MA',
      'http://www.golfthefox.com/',
      'Mon–Thurs before 2PM – $59, After 2PM – $49,',
      'Sunday after 1PM – $49 Service Fee Includes Greens Fee Cart and Range Token.',
      'No September & October play.'
    ],
    [
      'Crystal Lake Golf Course',
      'Haverhill, MA',
      'https://www.crystallake-golf.com',
      'Mon – Thurs anytime, Sat & Sun After 1PM',
      '$25 Service Fee Includes Greens & Cart'
    ],
    [
      'Dennis Pines Golf Course',
      'Dennis, MA',
      'http://www.dennisgolf.com/',
      'Monday – Thurs anytime,',
      '2 for 1 Greens Fee / Cart required,',
      'Not available in July or August'
    ],
    [
      'Dennis Highlands Golf Course',
      'Dennis, MA',
      'http://www.dennisgolf.com/',
      'Monday – Thurs anytime,',
      '2 for 1 Greens Fee / Cart required,',
      'Not available in July or August'
    ],
    [
      'East Mountain Country Club',
      'Westfield, MA',
      'http://www.eastmountaincc.com/',
      'Monday – Friday before 12PM, Saturday, Sunday & Holidays after 12 PM.',
      '$25 Service Fee includes Greens Fee and Cart'
    ],
    [
      'Edgewood Golf Course of Southwick',
      'Southwick, MA',
      'http://www.edgewood4golf.com',
      'Monday – Thursday anytime, Saturday, Sunday & Holidays after 1 PM.',
      '$30 Service Fee includes Greens Fee and Cart'
    ],
    [
      'Ellinwood Country Club',
      'Athol, MA',
      'http://www.www.ellinwoodgolf.com',
      'Monday – Friday before anytime, Saturday, Sunday & Holidays after 1s PM.',
      '$25 Service Fee includes greens fee & cart'
    ],
    [
      'Gardner Golf Club',
      'Gardner, MA',
      'http://www.gardnergolfcourse.com/',
      'Monday – Friday After 10:30 AM, Saturday, Sunday & Holidays after 11 AM',
      '$25 Service Fee Includes Greens Fee and Cart'
    ],
    [
      'Greenock Country Club',
      'Lee, MA',
      'http://www.greenockcc.com',
      'Monday – Thursday anytime, Saturday & Sunday after 1 PM. Cart Fee Required',
      'Cart Fee Required'
    ],
    [
      'Heather Hill Country Club',
      'Plainville, MA',
      'http://www.heatherhillcountryclub.com',
      'Monday – Thursday 11am – 2PM; $30 service fee required includes greens fee & cart.',
      'Saturday & Sunday After 3PM; $35 service fee required includes greens fee & cart.'
    ],
    [
      'Heritage Country Club',
      'Charlton, MA',
      'http://heritagecountryclub.com',
      'Mon – Friday after 11am – $35 service fee include greens fee & cart',
      'Sat & Sun after 1PM $40 service fee includes greens fee & cart.'
    ],
    [
      'Ledges Golf Club',
      'South Hadley, MA',
      'http://www.ledgesgc.com/',
      'Monday – Friday  anytime; Saturday,  Sunday and Holidays after 1PM',
      '$40 Service Fee includes greens fee & cart.'
    ],
    [
      'Links at Worthington (Private Club)',
      'Worthington, MA',
      'https://worthingtongolfclub.com/',
      'Monday – Thursday before 1PM and Sundays anytime',
      'Cart Fee Required'
    ],
    [
      'MapleGate Country Club',
      'Bellingham, MA',
      'http://www.maplegate.com',
      'Monday – Friday anytime',
      '$50 Service Fee includes greens fee & cart.',
      'Saturday & Sundays after 3PM – $45 Service Fee includes greens fee & cart.'
    ],
    [
      'Maynard Golf Course',
      'Maynard, MA',
      'http://www.maynardcc.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Meadows Golf Course',
      'Greenfield, MA',
      'http://www.meadowsgolfcountryclub.com',
      'Mon – Fri anytime, Sat & Sun after 1PM',
      '$12 Service Fee for 9 Holes and a cart'
    ],
    [
      'Mill Valley Golf Links',
      'Bechertown, MA',
      'http://www.millvalleygolflinks.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$25 Service Fee includes greens fee & cart.'
    ],
    [
      'Newton Commonwealth Golf Course',
      'Newton, MA',
      'http://sterlinggolf.com/newton',
      'Monday – Thursday anytime',
      '$25 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Norwood Country Club',
      'Norwood, MA',
      'http://sterlinggolf.com/norwood',
      'Monday – Thursday anytime',
      '$25 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Oak Ridge Golf Course',
      'Feeding Hills, MA',
      'http://www.oakridgegc.com',
      'Monday – Friday anytime, Saturday & Sunday after 12 PM',
      '$35 Service Fee includes Greens Fee & Cart'
    ],
    [
      'Pine Ridge Country Club',
      'Oxford, MA',
      'http://www.pineridgegolf.net',
      'Monday – Friday anytime, Sat & Sun after 12 PM. $10 off greens fee with cart'
    ],
    [
      'Quabog Country Club',
      'Monson, MA',
      'http://www.quaboagcountryclub.com',
      'Mon – Friday after 11am – $25 Service Fee includes  greens fee & cart for 18 holes / $20 for 9',
      'Sat & Sun after1PM- $30 Service Fee includes greens fee & cart for 18 holes / $20 for 9'
    ],
    [
      'Rockland Golf Course',
      'Rockland, MA',
      'http://www.rocklandgc.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      'Cart Fee Required'
    ],
    [
      'Shaker Farms Country Club',
      'Westfield, MA',
      'http://www.shakerfarmscc.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$25 Service Fee includes greens fee & cart.'
    ],
    [
      'Stoneham Oaks Golf Course',
      'Stoneham MA',
      'http://sterlinggolf.com',
      'Mon – Thurs anytime, Fri, Sat, Sun & Holidays after 1PM. Cart Fee Required'
    ],
    [
      'Tekoa Country Club',
      'Westfield, MA',
      'http://www.tekoacc.com/',
      'Monday – Thursday anytime, Saturday & Sunday after 1pm',
      '$25 Service Fee includes greens fee & cart.'
    ],
    [
      'Unicorn Golf Course',
      'Stoneham, MA',
      'http://www.stoneham-ma.gov/unicorn-golf',
      'Mon – Thurs anytime. Fri, Sat, Sun, & Holidays after 1 PM. Cart Fee Required.'
    ],
    [
      'Waubeeka Golf Links',
      'Williamstown, MA',
      'http://www.waubeeka.com/',
      'Monday – Friday Anytime, Saturdays and Sundays after 1 PM',
      '$25 Cart Fee Required'
    ],
    [
      'Wentworth Hills Country Club',
      'Plainville, MA',
      'http://www.wentworthhillscountryclub.com',
      'Monday – Thursday 11am – 2PM; $30 service fee required includes greens fee & cart.',
      'Saturday & Sunday After 3PM; $35 service fee required includes greens fee & cart.'
    ],
    [
      'Wyckoff Country Club',
      'Holyoke, MA',
      'http://www.wyckoffcountryclub.com/',
      'Monday – Thursday Anytime',
      '$30 Fee Required includes greens fee and cart'
    ],
    [
      'Brookstone Golf Course',
      'Derry, NH',
      'http://brookstone-park.com/',
      'Monday – Thursday before 1 PM, Saturdays & Sundays after 1 PM',
      'Cart Fee Required'
    ],
    [
      'Eastman Golf Links (Private Club)',
      'Grantham, NH',
      'http://www.eastmangolflinks.com/',
      'Mon – Thurs anytime, Friday Saturday Sunday & Holidays after 12 PM.',
      '$55 Service Fee includes greens fee & cart'
    ],
    [
      'Omni Mount Washington Resort Golf Course',
      'Bretton Woods, NH',
      'https://www.brettonwoods.com/activities/golf/overview',
      'Complimentary Round',
      'Sunday – Thursday anytime; Cart Fee Required'
    ],
    [
      'The Shattuck Golf Course',
      'Jaffey, NH',
      'http://www.sterlinggolf.com/',
      'Monday – Thursday anytime, Friday, Saturday, Sunday & Holidays after 1 PM',
      'Cart Fee Required'
    ],
    [
      'Blackhead Mountain Resort',
      'Round Top, NY',
      'http://www.blackheadmtn.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$30 Service Fee Required include greens fee and cart'
    ],
    [
      'Sunny Hill Resort & Golf Course',
      'Greenville, NY',
      'http://www.sunnyhill.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$30 Service Fee Required include greens fee and cart'
    ],
    [
      'Thunderhart Golf Course',
      'Freehold, NY',
      'http://www.thunderhartgolf.com/',
      'Monday – Thursday anytime and Sundays after 1PM',
      '$30 Service Fee Required include greens fee and cart'
    ],
    [
      'Country View Golf Course',
      'Harrisville, RI',
      'http://www.countryviewgolf.net',
      'Monday - Friday anytime, Sat & Sun after 12 PM.',
      '$10 off greens fee with cart'
    ],
    [
      'Coventry Pines Golf Course',
      'Coventry, RI',
      'https://www.facebook.com/CoventryPines/',
      'Monday – Friday Anytime, Saturday and Sunday after 1PM',
      'Cart Fee Required'
    ],
    [
      'Kings Crossing Golf Club',
      'North Kingstown, RI',
      'https://kingscrossinggolfclub.com/',
      'Monday – Friday Anytime, Saturday and Sunday after 1PM',
      'Cart Fee Required'
    ],
    [
      'Laurel Lane Country Club',
      'West Kingstown, RI',
      'https://laurellanecountryclub.com/',
      'Monday – Friday anytime, Sat & Sun after 12 PM. $10 off greens fee with cart'
    ],
    [
      'Midville Golf Club',
      'West Warwick, RI',
      'https://midvillegolfclub.com/',
      'Monday – Friday Anytime',
      'After September 15th Only',
      'Complimentary Cart with purchase 9-hole round.'
    ],
    [
      'Pinecrest Golf Course',
      'Richmond, RI',
      'https://www.pinecrestri.com/',
      'Monday – Friday Anytime, Saturday and Sunday after 11 AM',
      '$25 Service Fee includes greens fee and cart for 18 holes / $18 Service Fee includes greens fee and cart for 9 holes'
    ],
    [
      'Rose Hill Golf Course',
      'Westerly, RI',
      'https://therosehillgolfclub.com/',
      'Monday – Friday 7 before 2 PM, Saturday & Sunday before 1PM',
      '$5 Cart Fee per person'
    ],
    [
      'Winnapaug Country Club',
      'Westerly, RI',
      'http://www.winnapaugcountryclub.com/',
      'Monday – Friday 7 AM – 2 PM, NO WEEKENDS',
      '$25 Service Fee includes greens fee and cart'
    ],
    [
      'Brattleboro Country Club',
      'Brattleboro, VT',
      'https://brattleborocountryclub.com/',
      'Monday – Thursday anytime, $39 Service Fee Includes Greens Fee & Cart',
      'Friday all day, Sat and Sunday after 1PM, $49 Service Fee includes Greens Fee& Cart'
    ],
    [
      'Green Mountain National',
      'Killington, VT',
      'http://www.gmngc.com/',
      'Monday – Friday anytime, Sat & Sun after 1PM  Excluding Holidays. One free greens fee with one paid greens fee (2 for 1 greens fee)'
    ],
    [
      'Killington Resort Golf Course',
      'Killington, VT',
      'http://www.killington.com/site/summer/golf_course',
      'Monday – Thursday anytime, Saturday & Sunday after 1PM, Cart Fee Mandatory'
    ],
    [
      'Mount Snow Golf Club',
      'West Dover, VT',
      'http://www.mountsnow.com/golf/',
      'Monday – Thurs anytime, Sunday after 1PM.',
      '$29 Service Fee includes greens fee & cart'
    ],
    [
      'Brigantine Golf Links',
      'Brigantine, NJ',
      'https://www.brigantinegolf.com',
      'Mon – Thurs anytime, Fri, Sat Sun after 1 pm',
      '$39 service fee includes greens fee and cart.'
    ],
    [
      'Clearbrook Golf Course',
      'Monroe Township, NJ',
      'https://www.clearbrookgolfnj.com',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $14 service fee includes greens fee and cart.'
    ],
    [
      'John Gaffney Green Tree Golf Course',
      'Egg Harbor, NJ',
      'https://greentree.aclink.org/',
      'Mon – Thurs anytime, Fri, Sat & Sun after 1 pm.',
      '$19 service fee includes greens fee and cart.'
    ],
    [
      'Down River Golf Course',
      'Everett, PA',
      'https://www.downrivergc.com/',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    ],
    [
      'Five Ponds Golf Club',
      'Warminster, PA',
      'https://5pondsgc.com/',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    ],
    [
      'Makefield Highlands Golf Club',
      'Yardley, PA',
      'https://makefieldhighlandsgolf.com/',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    ],
    [
      'Mill Race Golf and Camping',
      'Benton, PA',
      'https://www.millracegolf.com/',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    ],
    [
      'Shawnee Inn & Golf Resort',
      'Shawnee, PA',
      'https://www.shawneeinn.com/',
      'Monday – Thurs Anytime',
      '$25 Service Fee includes Greens fee and Cart'
    ],
    [
      'Spring Hollow Golf Club',
      'Spring City, PA',
      'https://freegolf.net/courses/www.springhollowgolf.com',
      'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    ]
  ]



  module.exports = golfCourseArray

