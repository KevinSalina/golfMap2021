const golfCourseObject = [
    {
      name: 'Airways Golf Club',
      location: 'West Suffield, CT',
      website: 'http://www.airwaysgolf.com',
      description: 'Monday – Friday after 12PM $20 Service Fee includes Greens Fee and Cart\n' +
        'Saturday and Sunday after 12PM $25 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'Black Birch Golf Club',
      location: 'Moodus, CT',
      website: 'http://www.blackbirchgolf.com',
      description: 'Monday – Friday anytime. Saturdays and Sundays after 1PM – $25 Service Fee'
    },
    {
      name: 'Blackledge Country Club - Anderson’s Glen Course',
      location: 'Hebron, CT',
      website: 'https://blackledgecc.net/',
      description: 'Monday – Thursday between anytime, Saturday & Sunday after 2pm – $45 Service Fee Includes Greens Fee and Cart'
    },
    {
      name: 'Blackledge Country Club - Gilead Highland’s Course',
      location: 'Hebron, CT',
      website: 'https://blackledgecc.net/',
      description: 'Monday – Thursday between anytime, Saturday & Sunday after 2pm – $45 Service Fee Includes Greens Fee and Cart'
    },
    {
      name: 'Blue Fox Run Golf Club',
      location: 'Avon, CT',
      website: 'http://www.bluefoxent.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$31 service fee includes greens fee and cart'
    },
    {
      name: 'Canaan Country Club',
      location: 'Canaan, CT',
      website: 'http://www.canaancountryclub.com',
      description: 'Mon – Fri Before 2PM, Sunday after 2pm. Cart Fee Required'
    },
    {
      name: 'Chanticlair Golf Course',
      location: 'Colchester, CT',
      website: 'http://www.chanticlair.com',
      description: 'Mon – Thurs anytime, Sat & Sun after 1PM. $40 for Two Includes Greens Fee & Cart'
    },
    {
      name: 'Connecticut National Golf Club',
      location: 'East Putnam, CT',
      website: 'http://www.ctnationalgolf.com/',
      description: 'Monday – Thursday anytime. Saturdays and Sundays after 1PM\n' +
        '– $25 Service Fee includes greens fee & cart'
    },
    {
      name: 'Copper Hill Golf Club',
      location: 'East Granby, CT',
      website: 'http://www.copperhillgolf.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '– $20 Service Fee includes Greens Fee and Cart. No Holidays'
    },
    {
      name: 'Crestbrook Park Golf Course',
      location: 'Watertown, CT',
      website: 'http://www.crestbrookpark.com',
      description: 'Mon, Tues & Thurs before 12PM, Sat & Sun after 12pm.\n' +
        '$30 Service Fee includes greens fee & cart'
    },
    {
      name: 'East Hartford Golf Club',
      location: 'East Hartford, Ct',
      website: 'https://www.easthartfordgc.com',
      description: 'Monday – Thursday anytime; Saturday & Sunday after 1PM\n' +
        '$25 Service Fee includes Greens fee & cart'
    },
    {
      name: 'Eastwood Country Club',
      location: 'Torrington, CT',
      website: 'http://www.eastwoodcountryclub.com',
      description: 'Mon – Fri anytime, Sat & Sun after 3pm. No Holidays\n' +
        '$20 cart fee for 18 holes / $12 for 9 holes.'
    },
    {
      name: 'Elmridge Golf Club',
      location: 'Pawcatuck, CT',
      website: 'http://www.elmridgegolf.com/',
      description: 'Monday through Thursday anytime, Saturday & Sunday after 2:00 pm.\n' +
        '$40 service fee includes greens fee and cart.'
    },
    {
      name: 'Farmington Woods Country Club (Private Club)',
      location: 'Avon, CT',
      website: 'https://www.farmingtonwoods.com/Golf-Home.aspx',
      description: 'Mon – Thurs after 1PM, Sun after 1PM\n$50 fee includes 18-holes & cart'
    },
    {
      name: 'Fox Hopyard Golf Club',
      location: 'East Haddam, CT',
      website: 'http://www.golfthefox.com/',
      description: 'Monday – Thursday only. No June or July play.\n' +
        '$69 before 2PM, $49 after 2PM Includes greens fee, cart and range\n' +
        'Before May 1 & after Nov 1 – $49 before 2PM, $39 after 2PM Includes greens fee, cart and range'
    },
    {
      name: 'Gillette Ridge Golf Club',
      location: 'Bloomfield, CT',
      website: 'http://www.gilletteridgegolf.com/',
      description: 'Mon. – Thurs anytime, Saturday and Sunday after 1PM.\n' +
        '$40 Service Fee includes greens fee & cart'
    },
    {
      name: 'Goodwin Park Golf Course',
      location: 'Hartford, CT',
      website: 'http://www.goodwinparkgolf.com/',
      description: 'Monday – Thurs anytime, Sat & Sun after 1PM.\n' +
        '$30 Service Fee includes Greens Fee and cart Fee.'
    },
    {
      name: 'Green Woods Country Club',
      location: 'Winsted, CT',
      website: 'http://www.greenwoodscc.net/',
      description: 'Monday – Thursday anytime, Sunday after 1PM. $25 Service Fee for 18 holes includes Greens Fee and Cart'
    },
    {
      name: 'Hawk’s Landing Country Club',
      location: 'Southington, CT',
      website: 'http://www.hawkslandingcc.com/',
      description: 'Monday – Friday anytime, Sunday after 1pm.\n' +
        '$35 Service Fee includes greens fee & cart'
    },
    {
      name: 'Highland Greens Golf Club',
      location: 'Prospect, CT',
      website: 'https://www.highlandgreens.com',
      description: 'Any Day, Any Time, Cart Fee Required'
    },
    {
      name: 'Hunter Golf Course',
      location: 'Meriden, CT',
      website: 'http://www.huntergolfclub.com',
      description: 'Monday – Thursday anytime, Saturday & Sunday after 1pm.\n' +
        '$40 Service Fee includes greens fee & cart'
    },
    {
      name: 'Keney Park Golf Course',
      location: 'Hartford, CT',
      website: 'http://www.keneyparkgolf.com',
      description: 'Monday – Thursday Anytime, Saturday & Sunday after 1PM\n' +
        '$35 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Laurel View Country Club',
      location: 'Hamden, CT',
      website: 'http://www.laurelviewcc.com/',
      description: 'Monday – Friday anytime, Sat & Sun after 1PM\n' +
        '$35 Service Fee includes greens fee & cart'
    },
    {
      name: 'Manchester Country Club',
      location: 'Manchester, CT',
      website: 'http://www.mancc.com/',
      description: 'Monday – Thursday after 11 AM, Sat & Sun after 2 PM,\n' +
        '$39 Service Fee includes greens fee & cart'
    },
    {
      name: 'Miner Hills Golf Course',
      location: 'Middletown, CT',
      website: 'http://www.minerhillsgolfcourse.com/',
      description: 'Monday – Thurs 7am – 3pm only, Sun. after 1pm; $20 cart fee for 18 holes'
    },
    {
      name: 'Minnechaug Golf Course',
      location: 'Glastonbury, CT',
      website: 'http://www.minnechauggolf.com/',
      description: 'Monday – Friday 10am – 3pm, Sat & Sun after 1PM.\n' +
        '$20 Service Fee includes greens fee & cart for 9 holes.       Replay rate $15'
    },
    {
      name: 'Norwich Golf Course',
      location: 'Norwich, CT',
      website: 'http://www.norwichgolf.com/',
      description: 'Any Day, Any Tme,\n$40 service fee includes greens fee & cart.'
    },
    {
      name: 'Oakwood Virtual Golf',
      location: 'Glastonbury, CT',
      website: 'http://www.OakWoodVirtualGolf.com/',
      description: 'One Complimentary Hour With One Paid Hour. April – November ONLY'
    },
    {
      name: 'Pomperaug Golf Course',
      location: 'Southbury, CT',
      website: 'http://http//www.heritagesouthbury.com/golffitness.htm',
      description: 'Monday – Thursday anytime and Sundays after 1PM\nCart Fee Required'
    },
    {
      name: 'Portland Golf Course',
      location: 'Portland, CT',
      website: 'http://www.portlandgolfcourse.com/',
      description: 'Monday – Friday anytime, Saturday & Sunday After 1PM\n' +
        '$45 Service Fee includes greens fee & cart'
    },
    {
      name: 'Quarry Ridge Golf Club',
      location: 'Portland, CT',
      website: 'http://www.quarryridge.com/',
      description: 'Monday – Friday anytime $35 Service Fee includes Greens Fee and Cart;\n' +
        'Sat, Sun & Holidays after 11AM; $39 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'River Ridge Golf Club',
      location: 'Jewett City, CT',
      website: 'http://www.riverridgegolf.com',
      description: 'Mon – Thurs 9am – 4pm, Fri, Sat & Sun after 1 PM $45 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Roseland Golf Course',
      location: 'South Woodstock, CT',
      website: 'http://www.roselandgolfcourse.com',
      description: 'Mon – Thurs anytime, Sunday after 2pm,\n' +
        '$15 cart fee for 18 holes / $10 for 9 holes.'
    },
    {
      name: 'Rockledge Golf Club',
      location: 'West Hartford, CT',
      website: 'http://www.golfrockledge.com/',
      description: 'Monday – Friday 11am – 3 pm, Saturday, Sunday and Holidays after 1pm.\n' +
        '$50 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Simsbury Farms Golf Course',
      location: 'West Simsbury, CT',
      website: 'http://www.simsburyfarms.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$39 Service Fee includes greens fee & cart'
    },
    {
      name: 'Southington Country Club',
      location: 'Southington, CT',
      website: 'http://www.southingtoncountryclub.com/',
      description: 'Monday – Thurs anytime, Sunday after 1pm. $40 Service Fee required includes greens fee & cart.'
    },
    {
      name: 'Stanley Golf Course',
      location: 'New Britain, CT',
      website: 'http://www.stanleygolf.com',
      description: 'Monday – Thurs before 1PM, Saturday, Sunday & Holidays after 1pm. $38 Service Fee required includes greens fee & cart.'
    },
    {
      name: 'Suffield Country Club (Private Club)',
      location: 'Suffield, CT',
      website: 'https://suffieldcc.com/',
      description: 'Monday after 12PM; Tuesday thru Friday After 10am NO WEEKENDS,“Member for a Day” Fee of $45 includes Greens Fee & Cart Valid 4/15- 5/26 and After 9/25'
    },
    {
      name: 'Tallwood Country Club',
      location: 'Hebron, CT',
      website: 'http://www.tallwoodcountryclub.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$45 service fee includes greens fee & cart and a $5 Food Voucher.'
    },
    {
      name: 'The Club at River Oaks (Private Club)',
      location: 'Sherman, CT',
      website: 'https://www.clubriveroaks.com/',
      description: 'All day Tuesday, Wed 10-12, Thursday 8-11. MUST Call.\n' +
        'Member for a Day Fee of $75 includes Greens Fee & Cart. Refer to ClubRiverOaks.com for club policy.'
    },
    {
      name: 'Timberlin Golf Course',
      location: 'Berlin, CT',
      website: 'http://www.timberlingolf.com/',
      description: 'Monday – Friday anytime and Sundays after 1PM\n' +
        '$37 service fee includes greens fee & cart.'
    },
    {
      name: 'The Golf Club at Windham',
      location: 'North Windham, CT',
      website: 'http://http//www.windhamclub.com',
      description: 'Monday – Thurs anytime, Sunday after 1pm.\n' +
        '$30 Service Fee Includes Greens Fee and Cart.'
    },
    {
      name: 'The Hotchkiss School Golf Course',
      location: 'Lakeville, CT',
      website: 'http://www.hotchkiss.org/athletics/facilities/the-hotchkiss-golf-course/index.aspx',
      description: 'Monday – Wednesday before 1PM, No Thursdays through August; Friday, Saturday & Sunday after 1PM. MUST CALL AHEAD. CASH ONLY'
    },
    {
      name: 'Tumble Brook Country Club (Private Club)',
      location: 'Bloomfield, CT',
      website: 'https://www.tumblebrookcc.com/',
      description: 'Tuesday – Friday Anytime\n' +
        'Member for a Day Fee of $55 includes Greens Fee & Cart\n' +
        'Saturday & Sunday after 1PM\n' +
        'Member for a Day Fee of $75 includes Greens Fee & Cart'
    },
    {
      name: 'Twin Hills Country Club',
      location: 'Coventry, CT',
      website: 'http://www.twinhillscountryclub.com',
      description: 'Monday – Thursday anytime, Friday, Saturday & Sunday after 1pm\n' +
        '$40 service fee includes greens fee & cart and a $5 Food Voucher.'
    },
    {
      name: 'Vineyard Vally Golf Club',
      location: 'Promfret Center, CT',
      website: 'http://vineyardvalleygolfclub.com/',
      description: 'Mon – Thurs anytime, Sat & Sun after 2pm,\n' +
        '$18 cart fee for 18 holes / $10 for 9 holes'
    },
    {
      name: 'Whitney Farms Golf Course',
      location: 'Monroe, CT',
      website: 'https://www.whitneyfarmsgc.com',
      description: 'Mon – Friday anytime\n$40 service fee includes greens fee & cart.'
    },
    {
      name: 'Bethel Resort Golf Course',
      location: 'Bethel, ME',
      website: 'http://www.bethelinn.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM. Cart Fee Required'
    },
    {
      name: 'Dunegrass Golf Club',
      location: 'Old Orchard Beach, ME',
      website: 'http://www.dunegrass.com/',
      description: 'Mon – Thursday anytime, Fri, Sat & Sun after 1PM\n' +
        '$30 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'Lake Kezar Country Club',
      location: 'Lovell, ME',
      website: 'https://www.lakekezargolf.com',
      description: 'Any day  after 1PM\n$30 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'Poland Spring Resort',
      location: 'Poland Spring, ME',
      website: 'http://www.polandspringinns.com/',
      description: 'Monday – Thursday after 9am, Sun. after 1PM\nCart Fee Required'
    },
    {
      name: 'Riverside Golf Course',
      location: 'Portland, ME',
      website: 'http://www.riversidegolfcourseme.com/',
      description: 'Monday – Friday anytime, Sat & Sun after 11AM;\n' +
        'Complimentary Greens Fee with Required Cart at Non-Member Rate'
    },
    {
      name: 'Spring Meadows Golf Club',
      location: 'Gray, ME',
      website: 'http://www.springmeadowsgolf.com/',
      description: 'Monday – Thursday anytime, Friday, Saturday & Sunday after 1PM\n' +
        '$35 Service Fee Includes Greens Fee & Cart\n' +
        'Not Available in July or August'
    },
    {
      name: 'Agawam Municipal Golf Course',
      location: 'Feeding Hills, MA',
      website: 'http://www.agawamgolfcourse.com',
      description: 'Monday – Thurs anytime, Sat & Sunday after 1PM.\n' +
        '$20 Service Fee includes greens fee & cart'
    },
    {
      name: 'Bass River Golf Course',
      location: 'Yarmouth, MA',
      website: 'http://www.golfyarmouthcapecod.com/',
      description: '– April – June: Sun-Thurs after 11am, Fri & Sat after 2PM\n' +
        '— July 12 to Oct 15 Mon-Thurs after 1PM, Sun after 2PM\n' +
        '— Oct 16 – Dec: Sun-Thurs after 11am, Fri & Sat after 12PM\n' +
        'Cart Fee Required – Limit Two certificates per foursome or 1 Certificate per twosome'
    },
    {
      name: 'Bayberry Hills Golf Course',
      location: 'Yarmouth, MA',
      website: 'http://www.golfyarmouthcapecod.com/',
      description: '— April – June: Sun-Thurs after 11am, Fri & Sat after 2PM\n' +
        '— July 12 to Oct 15 Mon-Thurs after 1PM, Sun after 2PM\n' +
        '— Oct 16 – Dec: Sun-Thurs after 11am, Fri & Sat after 12PM\n' +
        'Cart Fee Required – Limit Two certificates per foursome or 1 Certificate per twosome'
    },
    {
      name: 'Bedrock Golf Club',
      location: 'Rutland, MA',
      website: 'http://www.bedrockgolfclub.com',
      description: 'Monday – Friday after 11am, Saturdays and Sundays after 1PM\n' +
        'Cart Fee Required'
    },
    {
      name: 'Blackstone National Golf Club',
      location: 'Sutton, MA',
      website: 'http://www.bngc.net/',
      description: 'Monday thru Thursday anytime. Sat & Sun after 4:00pm.\n' +
        'One free greens fee with one paid greens fee, or 50% off greens fee'
    },
    {
      name: 'Blandford Golf Club',
      location: 'Blandford, MA',
      website: 'http://www.massgolftennis.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\nCart Fee Required'
    },
    {
      name: 'Chelmsford Country Club',
      location: 'Chelmsford, MA',
      website: 'http://www.sterlinggolf.com',
      description: 'Monday – Thursday anytime; Friday, Saturday & Sundays after 1PM\n' +
        'Cart Fee Required'
    },
    {
      name: 'Captains Golf Course',
      location: 'Brewster, MA',
      website: 'http://www.captainsgolfcourse.com',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        'No July & August play availability.\n' +
        '$30 service fee required includes greens fee, cart, range token.'
    },
    {
      name: 'Cohasse Country Club (Private Club)',
      location: 'Southbridge, MA',
      website: 'https://www.cohasse.com/',
      description: 'Mon – Fri before 12PM. MUST Call. Member for a Day Fee of $35 includes Greens Fee & Cart'
    },
    {
      name: 'Cold Spring Country Club',
      location: 'Belchertown, MA',
      website: 'https://www.coldspringcc.com',
      description: 'Mon – Thur anytime, Sat & Sun after 1PM.\n' +
        '$35 service fee required includes greens fee & cart'
    },
    {
      name: 'Crumpin-Fox Club',
      location: 'N. Bernardston, MA',
      website: 'http://www.golfthefox.com/',
      description: 'Mon–Thurs before 2PM – $59, After 2PM – $49,\n' +
        'Sunday after 1PM – $49 Service Fee Includes Greens Fee Cart and Range Token.\n' +
        'No September & October play.'
    },
    {
      name: 'Crystal Lake Golf Course',
      location: 'Haverhill, MA',
      website: 'https://www.crystallake-golf.com',
      description: 'Mon – Thurs anytime, Sat & Sun After 1PM\n' +
        '$25 Service Fee Includes Greens & Cart'
    },
    {
      name: 'Dennis Pines Golf Course',
      location: 'Dennis, MA',
      website: 'http://www.dennisgolf.com/',
      description: 'Monday – Thurs anytime,\n' +
        '2 for 1 Greens Fee / Cart required,\n' +
        'Not available in July or August'
    },
    {
      name: 'Dennis Highlands Golf Course',
      location: 'Dennis, MA',
      website: 'http://www.dennisgolf.com/',
      description: 'Monday – Thurs anytime,\n' +
        '2 for 1 Greens Fee / Cart required,\n' +
        'Not available in July or August'
    },
    {
      name: 'East Mountain Country Club',
      location: 'Westfield, MA',
      website: 'http://www.eastmountaincc.com/',
      description: 'Monday – Friday before 12PM, Saturday, Sunday & Holidays after 12 PM.\n' +
        '$25 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'Edgewood Golf Course of Southwick',
      location: 'Southwick, MA',
      website: 'http://www.edgewood4golf.com',
      description: 'Monday – Thursday anytime, Saturday, Sunday & Holidays after 1 PM.\n' +
        '$30 Service Fee includes Greens Fee and Cart'
    },
    {
      name: 'Ellinwood Country Club',
      location: 'Athol, MA',
      website: 'http://www.www.ellinwoodgolf.com',
      description: 'Monday – Friday before anytime, Saturday, Sunday & Holidays after 1s PM.\n' +
        '$25 Service Fee includes greens fee & cart'
    },
    {
      name: 'Gardner Golf Club',
      location: 'Gardner, MA',
      website: 'http://www.gardnergolfcourse.com/',
      description: 'Monday – Friday After 10:30 AM, Saturday, Sunday & Holidays after 11 AM\n' +
        '$25 Service Fee Includes Greens Fee and Cart'
    },
    {
      name: 'Greenock Country Club',
      location: 'Lee, MA',
      website: 'http://www.greenockcc.com',
      description: 'Monday – Thursday anytime, Saturday & Sunday after 1 PM. Cart Fee Required\n' +
        'Cart Fee Required'
    },
    {
      name: 'Heather Hill Country Club',
      location: 'Plainville, MA',
      website: 'http://www.heatherhillcountryclub.com',
      description: 'Monday – Thursday 11am – 2PM; $30 service fee required includes greens fee & cart.\n' +
        'Saturday & Sunday After 3PM; $35 service fee required includes greens fee & cart.'
    },
    {
      name: 'Heritage Country Club',
      location: 'Charlton, MA',
      website: 'http://heritagecountryclub.com',
      description: 'Mon – Friday after 11am – $35 service fee include greens fee & cart\n' +
        'Sat & Sun after 1PM $40 service fee includes greens fee & cart.'
    },
    {
      name: 'Ledges Golf Club',
      location: 'South Hadley, MA',
      website: 'http://www.ledgesgc.com/',
      description: 'Monday – Friday  anytime; Saturday,  Sunday and Holidays after 1PM\n' +
        '$40 Service Fee includes greens fee & cart.'
    },
    {
      name: 'Links at Worthington (Private Club)',
      location: 'Worthington, MA',
      website: 'https://worthingtongolfclub.com/',
      description: 'Monday – Thursday before 1PM and Sundays anytime\nCart Fee Required'
    },
    {
      name: 'MapleGate Country Club',
      location: 'Bellingham, MA',
      website: 'http://www.maplegate.com',
      description: 'Monday – Friday anytime\n' +
        '$50 Service Fee includes greens fee & cart.\n' +
        'Saturday & Sundays after 3PM – $45 Service Fee includes greens fee & cart.'
    },
    {
      name: 'Maynard Golf Course',
      location: 'Maynard, MA',
      website: 'http://www.maynardcc.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\nCart Fee Required'
    },
    {
      name: 'Meadows Golf Course',
      location: 'Greenfield, MA',
      website: 'http://www.meadowsgolfcountryclub.com',
      description: 'Mon – Fri anytime, Sat & Sun after 1PM\n' +
        '$12 Service Fee for 9 Holes and a cart'
    },
    {
      name: 'Mill Valley Golf Links',
      location: 'Bechertown, MA',
      website: 'http://www.millvalleygolflinks.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$25 Service Fee includes greens fee & cart.'
    },
    {
      name: 'Newton Commonwealth Golf Course',
      location: 'Newton, MA',
      website: 'http://sterlinggolf.com/newton',
      description: 'Monday – Thursday anytime\n$25 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Norwood Country Club',
      location: 'Norwood, MA',
      website: 'http://sterlinggolf.com/norwood',
      description: 'Monday – Thursday anytime\n$25 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Oak Ridge Golf Course',
      location: 'Feeding Hills, MA',
      website: 'http://www.oakridgegc.com',
      description: 'Monday – Friday anytime, Saturday & Sunday after 12 PM\n' +
        '$35 Service Fee includes Greens Fee & Cart'
    },
    {
      name: 'Pine Ridge Country Club',
      location: 'Oxford, MA',
      website: 'http://www.pineridgegolf.net',
      description: 'Monday – Friday anytime, Sat & Sun after 12 PM. $10 off greens fee with cart'
    },
    {
      name: 'Quabog Country Club',
      location: 'Monson, MA',
      website: 'http://www.quaboagcountryclub.com',
      description: 'Mon – Friday after 11am – $25 Service Fee includes  greens fee & cart for 18 holes / $20 for 9\n' +
        'Sat & Sun after1PM- $30 Service Fee includes greens fee & cart for 18 holes / $20 for 9'
    },
    {
      name: 'Rockland Golf Course',
      location: 'Rockland, MA',
      website: 'http://www.rocklandgc.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\nCart Fee Required'
    },
    {
      name: 'Shaker Farms Country Club',
      location: 'Westfield, MA',
      website: 'http://www.shakerfarmscc.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$25 Service Fee includes greens fee & cart.'
    },
    {
      name: 'Stoneham Oaks Golf Course',
      location: 'Stoneham MA',
      website: 'http://sterlinggolf.com',
      description: 'Mon – Thurs anytime, Fri, Sat, Sun & Holidays after 1PM. Cart Fee Required'
    },
    {
      name: 'Tekoa Country Club',
      location: 'Westfield, MA',
      website: 'http://www.tekoacc.com/',
      description: 'Monday – Thursday anytime, Saturday & Sunday after 1pm\n' +
        '$25 Service Fee includes greens fee & cart.'
    },
    {
      name: 'Unicorn Golf Course',
      location: 'Stoneham, MA',
      website: 'http://www.stoneham-ma.gov/unicorn-golf',
      description: 'Mon – Thurs anytime. Fri, Sat, Sun, & Holidays after 1 PM. Cart Fee Required.'
    },
    {
      name: 'Waubeeka Golf Links',
      location: 'Williamstown, MA',
      website: 'http://www.waubeeka.com/',
      description: 'Monday – Friday Anytime, Saturdays and Sundays after 1 PM\n' +
        '$25 Cart Fee Required'
    },
    {
      name: 'Wentworth Hills Country Club',
      location: 'Plainville, MA',
      website: 'http://www.wentworthhillscountryclub.com',
      description: 'Monday – Thursday 11am – 2PM; $30 service fee required includes greens fee & cart.\n' +
        'Saturday & Sunday After 3PM; $35 service fee required includes greens fee & cart.'
    },
    {
      name: 'Wyckoff Country Club',
      location: 'Holyoke, MA',
      website: 'http://www.wyckoffcountryclub.com/',
      description: 'Monday – Thursday Anytime\n$30 Fee Required includes greens fee and cart'
    },
    {
      name: 'Brookstone Golf Course',
      location: 'Derry, NH',
      website: 'http://brookstone-park.com/',
      description: 'Monday – Thursday before 1 PM, Saturdays & Sundays after 1 PM\n' +
        'Cart Fee Required'
    },
    {
      name: 'Eastman Golf Links (Private Club)',
      location: 'Grantham, NH',
      website: 'http://www.eastmangolflinks.com/',
      description: 'Mon – Thurs anytime, Friday Saturday Sunday & Holidays after 12 PM.\n' +
        '$55 Service Fee includes greens fee & cart'
    },
    {
      name: 'Omni Mount Washington Resort Golf Course',
      location: 'Bretton Woods, NH',
      website: 'https://www.brettonwoods.com/activities/golf/overview',
      description: 'Complimentary Round\nSunday – Thursday anytime; Cart Fee Required'
    },
    {
      name: 'The Shattuck Golf Course',
      location: 'Jaffey, NH',
      website: 'http://www.sterlinggolf.com/',
      description: 'Monday – Thursday anytime, Friday, Saturday, Sunday & Holidays after 1 PM\n' +
        'Cart Fee Required'
    },
    {
      name: 'Blackhead Mountain Resort',
      location: 'Round Top, NY',
      website: 'http://www.blackheadmtn.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$30 Service Fee Required include greens fee and cart'
    },
    {
      name: 'Sunny Hill Resort & Golf Course',
      location: 'Greenville, NY',
      website: 'http://www.sunnyhill.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$30 Service Fee Required include greens fee and cart'
    },
    {
      name: 'Thunderhart Golf Course',
      location: 'Freehold, NY',
      website: 'http://www.thunderhartgolf.com/',
      description: 'Monday – Thursday anytime and Sundays after 1PM\n' +
        '$30 Service Fee Required include greens fee and cart'
    },
    {
      name: 'Country View Golf Course',
      location: 'Harrisville, RI',
      website: 'http://www.countryviewgolf.net',
      description: 'Monday - Friday anytime, Sat & Sun after 12 PM.\n' +
        '$10 off greens fee with cart'
    },
    {
      name: 'Coventry Pines Golf Course',
      location: 'Coventry, RI',
      website: 'https://www.facebook.com/CoventryPines/',
      description: 'Monday – Friday Anytime, Saturday and Sunday after 1PM\nCart Fee Required'
    },
    {
      name: 'Kings Crossing Golf Club',
      location: 'North Kingstown, RI',
      website: 'https://kingscrossinggolfclub.com/',
      description: 'Monday – Friday Anytime, Saturday and Sunday after 1PM\nCart Fee Required'
    },
    {
      name: 'Laurel Lane Country Club',
      location: 'West Kingstown, RI',
      website: 'https://laurellanecountryclub.com/',
      description: 'Monday – Friday anytime, Sat & Sun after 12 PM. $10 off greens fee with cart'
    },
    {
      name: 'Midville Golf Club',
      location: 'West Warwick, RI',
      website: 'https://midvillegolfclub.com/',
      description: 'Monday – Friday Anytime\n' +
        'After September 15th Only\n' +
        'Complimentary Cart with purchase 9-hole round.'
    },
    {
      name: 'Pinecrest Golf Course',
      location: 'Richmond, RI',
      website: 'https://www.pinecrestri.com/',
      description: 'Monday – Friday Anytime, Saturday and Sunday after 11 AM\n' +
        '$25 Service Fee includes greens fee and cart for 18 holes / $18 Service Fee includes greens fee and cart for 9 holes'
    },
    {
      name: 'Rose Hill Golf Course',
      location: 'Westerly, RI',
      website: 'https://therosehillgolfclub.com/',
      description: 'Monday – Friday 7 before 2 PM, Saturday & Sunday before 1PM\n' +
        '$5 Cart Fee per person'
    },
    {
      name: 'Winnapaug Country Club',
      location: 'Westerly, RI',
      website: 'http://www.winnapaugcountryclub.com/',
      description: 'Monday – Friday 7 AM – 2 PM, NO WEEKENDS\n' +
        '$25 Service Fee includes greens fee and cart'
    },
    {
      name: 'Brattleboro Country Club',
      location: 'Brattleboro, VT',
      website: 'https://brattleborocountryclub.com/',
      description: 'Monday – Thursday anytime, $39 Service Fee Includes Greens Fee & Cart\n' +
        'Friday all day, Sat and Sunday after 1PM, $49 Service Fee includes Greens Fee& Cart'
    },
    {
      name: 'Green Mountain National',
      location: 'Killington, VT',
      website: 'http://www.gmngc.com/',
      description: 'Monday – Friday anytime, Sat & Sun after 1PM  Excluding Holidays. One free greens fee with one paid greens fee (2 for 1 greens fee)'
    },
    {
      name: 'Killington Resort Golf Course',
      location: 'Killington, VT',
      website: 'http://www.killington.com/site/summer/golf_course',
      description: 'Monday – Thursday anytime, Saturday & Sunday after 1PM, Cart Fee Mandatory'
    },
    {
      name: 'Mount Snow Golf Club',
      location: 'West Dover, VT',
      website: 'http://www.mountsnow.com/golf/',
      description: 'Monday – Thurs anytime, Sunday after 1PM.\n' +
        '$29 Service Fee includes greens fee & cart'
    },
    {
      name: 'Brigantine Golf Links',
      location: 'Brigantine, NJ',
      website: 'https://www.brigantinegolf.com',
      description: 'Mon – Thurs anytime, Fri, Sat Sun after 1 pm\n' +
        '$39 service fee includes greens fee and cart.'
    },
    {
      name: 'Clearbrook Golf Course',
      location: 'Monroe Township, NJ',
      website: 'https://www.clearbrookgolfnj.com',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $14 service fee includes greens fee and cart.'
    },
    {
      name: 'John Gaffney Green Tree Golf Course',
      location: 'Egg Harbor, NJ',
      website: 'https://greentree.aclink.org/',
      description: 'Mon – Thurs anytime, Fri, Sat & Sun after 1 pm.\n' +
        '$19 service fee includes greens fee and cart.'
    },
    {
      name: 'Down River Golf Course',
      location: 'Everett, PA',
      website: 'https://www.downrivergc.com/',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    },
    {
      name: 'Five Ponds Golf Club',
      location: 'Warminster, PA',
      website: 'https://5pondsgc.com/',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    },
    {
      name: 'Makefield Highlands Golf Club',
      location: 'Yardley, PA',
      website: 'https://makefieldhighlandsgolf.com/',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    },
    {
      name: 'Mill Race Golf and Camping',
      location: 'Benton, PA',
      website: 'https://www.millracegolf.com/',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    },
    {
      name: 'Shawnee Inn & Golf Resort',
      location: 'Shawnee, PA',
      website: 'https://www.shawneeinn.com/',
      description: 'Monday – Thurs Anytime\n$25 Service Fee includes Greens fee and Cart'
    },
    {
      name: 'Spring Hollow Golf Club',
      location: 'Spring City, PA',
      website: 'https://freegolf.net/courses/www.springhollowgolf.com',
      description: 'Monday through Thursday anytime, Friday through Sunday after 1 p.m. $25 service fee includes greens fee and cart.'
    }
  ]

  module.exports = golfCourseObject