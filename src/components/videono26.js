import React, { PureComponent } from 'react';

export default class NewItem extends PureComponent {
    article=[
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Lifestyle Desk",
                    "title": "ICMR warns against protein supplements: All about the potential health risks - The Times of India",
                    "description": "ICMR and NIN guidelines caution against protein supplements due to various risks like kidney damage, dehydration, and nutrient imbalances. In the 148",
                    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/icmr-warns-against-protein-supplements-all-about-the-potential-health-risks/articleshow/110029006.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-110028969,width-1070,height-580,imgsize-650753,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2024-05-11T06:27:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Amar Sunil Panicker",
                    "title": "IPL 2024: Shubman Gill, Sai Sudharshan's Centuries Power Gujarat Titans to a Thumping 35-Run Win Over Chenn - News18",
                    "description": "The Gujarat Titans returned to winning ways as they beat the Chennai Super Kings by 35 runs with Mohit Sharma being the pick of the bowlers with figures of 3/31 in his four overs.",
                    "url": "https://www.news18.com/cricket/gt-vs-csk-ipl-2024-shubman-gill-sai-sudharshans-centuries-power-gujarat-titans-to-a-thumping-35-run-win-over-chennai-super-kings-8885699.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/shubman-gill-sai-sudharshan-gt-vs-csk-ipl-2024-2-sportzpics-feature-2024-05-9d7ac3200eb3f18aa16cc1b655846d90-16x9.jpg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2024-05-11T06:21:20Z",
                    "content": "The Gujarat Titans managed to return to winning ways with an emphatic win over the defending champions Chennai Super Kings by 35 runs at the Narendra Modi Stadium in Ahmedabad.\r\nGTs opening pair of S… [+2569 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Latest News, Live Updates Today May 11, 2024: Clear Delhi govt’s legal costs at the earliest, Supreme Court tells Centre - Hindustan Times",
                    "description": "Welcome to the live updates platform for Hindustan Times. Follow all the major news updates, headlines and breaking news stories from India and around the world right here. Track the real-time developments of major events for May 11, 2024.",
                    "url": "https://www.hindustantimes.com/india-news/latest-india-news-today-live-updates-may-11-2024-101715391003614.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/550x309/North-Korea-Koreas-Tensions-0_1715411763688_1715411805072.jpg",
                    "publishedAt": "2024-05-11T06:00:16Z",
                    "content": "Get the latest news updates and breaking news stories from India and around the world right here. Disclaimer: This is an AI-generated live blog and has not been edited by Hindustan Times staff....Rea… [+7262 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Sumedha Kirti, News Desk",
                    "title": "Mocking 'Nakli' NCP, PM Modi Tells Sharad Pawar to Join BJP-led NDA. He Says No - News18",
                    "description": "Sharad Pawar said that he would never ditch the Nehru-Gandhi ideology and join hands with those who adopt an anti-Muslim stand.",
                    "url": "https://www.news18.com/elections/maharashtra-politics-news-sharad-pawar-pm-modi-modi-muslims-congress-full-details-8885836.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/pm-modi-sharad-pawar-maharashtra-election-2024-05-d93e95aebdfb9d194f5b312a69d2c07a-16x9.png?impolicy=website&width=1200&height=675",
                    "publishedAt": "2024-05-11T05:55:18Z",
                    "content": "Prime Minister Narendra Modi extended an invite to National Congress Party (SP) chief Sharad Pawar to join the alliance of Bharatiya Janata Party after the results for the Lok Sabha elections on June… [+3487 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Lifestyle Desk",
                    "title": "How dangerous is magnesium deficiency; Tips to absorb it better - The Times of India",
                    "description": "Maintaining adequate magnesium levels is crucial for overall health and well-being. By understanding the dangers of magnesium deficiency and implementing these tips to absorb magnesium better, you can support your body's vital functions and reduce the risk of…",
                    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/how-dangerous-is-magnesium-deficiency-tips-to-absorb-it-better/photostory/109997400.cms",
                    "urlToImage": "https://static.toiimg.com/photo/109997438.cms",
                    "publishedAt": "2024-05-11T05:30:00Z",
                    "content": "Here are some tips to better absorb magnesium in our body:\r\nEat magnesium-rich foods - Include magnesium-rich foods in your diet, such as spinach, almonds, cashews, peanuts, black beans, and whole gr… [+783 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "At Indian-American Billionaire's Dinner For Biden, POTUS Talks Of Trump - NDTV",
                    "description": "Prominent Indian-American billionaire and venture capitalist Vinod Khosla hosted US President Joe Biden at his Silicon Valley residence. Here'e what President Biden spoke about during his dinner interaction with all those present there.",
                    "url": "https://www.ndtv.com/world-news/at-indian-american-billionaire-vinod-khoslas-dinner-for-joe-biden-potus-talks-of-donald-trump-5637697",
                    "urlToImage": "https://c.ndtvimg.com/2024-05/vfpj000g_biden-fundraiser-hosted-by-vinod-khosla_625x300_11_May_24.jpeg?ver-20240506.08",
                    "publishedAt": "2024-05-11T05:22:01Z",
                    "content": "Indian-American billionaire Vinod Khosla hosted Joe Biden at his Silicon Valley residence\r\nWashington: Prominent Indian-American billionaire and venture capitalist Vinod Khosla hosted US President Jo… [+4917 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Ekta Kapoor expecting a second baby? 4 things we know - Hindustan Times",
                    "description": "There are contrary reports on whether producer Ekta Kapoor is expecting her second baby. She conceived her son Ravie Kapoor via surrogacy in 2019. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/ekta-kapoor-expecting-a-second-baby-4-things-we-know-101715402151453.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/1600x900/66f7f3f6-cc97-11ec-aa8a-3e772098118b_1651771254217_1715402446280.jpg",
                    "publishedAt": "2024-05-11T05:20:51Z",
                    "content": "Producer Ekta Kapoor juggles many hats. Besides creating content for TV (Balaji Telefilms), films (Balaji Motion Pictures), and OTT, she's also a mother. Amid conflicting reports of her expecting a s… [+2173 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Sanchari Ghosh",
                    "title": "CM Revanth Reddy says 'country does not need BJP or PM Modi' - Mint",
                    "description": "Voting for all 17 Telangana seats on May 13. CM Reddy says country doesn't need BJP or Modi, criticizes handling of Pulwama incident and internal security.",
                    "url": "https://www.livemint.com/politics/news/jai-sri-ram-for-everything-cm-revanth-reddy-on-why-country-does-not-need-bjp-or-pm-modi-11715400787825.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/11/1600x900/Revanth_Reddy_1715404042069_1715404042288.jpg",
                    "publishedAt": "2024-05-11T05:17:34Z",
                    "content": "Telangana CM Revanth Reddy on Saturday said that the country does not need PM Modi or the BJP as try to make everything political. He further added, Classic examples would be - answering everything w… [+2278 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Virat-Rohit or Rohit-Yashasvi? - Matthew Hayden has a suggestion for India openers at T20 World Cup - The Times of India",
                    "description": "Cricket News: Cricketing legends Sourav Ganguly and Matthew Hayden, former Australia opener, have weighed in on Virat Kohli's batting position for the upcoming T20",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/virat-rohit-or-rohit-yashasvi-matthew-hayden-has-a-suggestion-for-india-openers-at-t20-world-cup/articleshow/110026770.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-110026860,width-1070,height-580,imgsize-89100,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2024-05-11T04:35:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Diya Sharma",
                    "title": "Garena Free Fire MAX redeem codes for May 11, 2024: Win free weapons, diamonds, and more rewards today - Moneycontrol",
                    "description": "It's essential to note that these free redeem codes have a limited lifespan, typically valid for up to 12 hours, and are restricted to the first 500 claimants.",
                    "url": "https://www.moneycontrol.com/technology/garena-free-fire-max-redeem-codes-for-may-11-2024-win-free-weapons-diamonds-and-more-rewards-today-article-12719662.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/05/20240511042547_garena.jpg",
                    "publishedAt": "2024-05-11T04:26:16Z",
                    "content": "After the ban of its predecessor in 2022, Garena Free Fire Max quickly gained popularity among Indian gamers. Praised for its immersive graphics and extensive gameplay, the game has garnered signific… [+1743 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Aditi Srivastava",
                    "title": "Aurora Borealis dances across skies in 10 stunning photos: Northern Lights dazzle UK and US after Solar storm - Hindustan Times",
                    "description": "Unforgettable display of Northern Lights dazzles UK residents, solar storm supercharges Earth's magnetosphere",
                    "url": "https://www.hindustantimes.com/world-news/us-news/aurora-borealis-dances-across-skies-in-10-stunning-photos-northern-lights-dazzle-uk-and-us-after-solar-storm-101715397414313.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/1600x900/Germany-Northern-Lights-1_1715398134312_1715398965726.jpg",
                    "publishedAt": "2024-05-11T04:02:06Z",
                    "content": "A powerful solar storm supercharged the Earth's magnetosphere, sparkling the usually elusive Aurora Borealis, or Northern Lights, across the UK. The celestial spectacle, predicted by the National Oce… [+3176 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Karishma Pranav Bhavsar",
                    "title": "Watch | Chennai skywatchers thrilled as International Space Station graces night sky, says 'flew too fast' | Mint - Mint",
                    "description": "The ISS, 'third brightest object in the night sky', was visible in Chennai on May 10 after NASA's announcement. Users shared videos and excitement on social media about witnessing the space station with the naked eye.",
                    "url": "https://www.livemint.com/news/trends/nasa-watch-chennai-skywatchers-thrilled-as-international-space-station-graces-night-sky-says-flew-too-fast-11715397560388.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/11/1600x900/2-0-99802854-MK-AT605-SPACE-0_1681711226470_1715399598749.jpg",
                    "publishedAt": "2024-05-11T03:56:02Z",
                    "content": "The International Space Station (ISS) which is considered to be the third brightest object in the night sky was visible in the skies in Chennai on May 10. This came after NASA indicated that the ISS … [+3161 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Arvind Kejriwal, Out Of Jail For 21 Days, Starts Campaigning Today - NDTV",
                    "description": "Just a day after being granted interim bail, Delhi Chief Minister Arvind Kejriwal is expected to hit the ground running and will hold a roadshow today.",
                    "url": "https://www.ndtv.com/india-news/arvind-kejriwal-to-hit-the-ground-running-mega-roadshow-planned-today-5637462",
                    "urlToImage": "https://c.ndtvimg.com/2024-05/fo6c3p6_arvind-kejriwal-temple_625x300_11_May_24.jpeg",
                    "publishedAt": "2024-05-11T03:34:22Z",
                    "content": "New Delhi: Just a day after being granted interim bail, Delhi Chief Minister Arvind Kejriwal visited a temple and will hold mega roadshows in the national capital later today. In his first public rem… [+2168 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Tech Desk",
                    "title": "How Apple plans to catch up Siri’s AI chatbot competitors - The Times of India",
                    "description": "TECH NEWS : Apple focusing on AI, enhancing Siri with generative AI. iPhones to feature in-built AI, leveraging two billion devices globally. Semiconductor team's",
                    "url": "https://timesofindia.indiatimes.com/technology/tech-news/how-apple-plans-to-catch-up-siris-ai-chatbot-competitors/articleshow/110019629.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-110019624,width-1070,height-580,imgsize-261100,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2024-05-11T03:15:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Entertainment Desk",
                    "title": "Genelia Deshmukh reviews Rajkummar Rao's stellar performance in 'Srikanth'; says the movie is 'all hearts - TOI Etimes",
                    "description": "Genelia Deshmukh praises Rajkummar Rao's outstanding performance in 'Srikanth,' emphasizing the film's emotional depth and impact. Her review applauds the director, writer, and cast for their contributions, particularly highlighting Rajkummar Rao's exceptiona…",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/genelia-deshmukh-reviews-rajkummar-raos-performance-in-srikanth/articleshow/110025609.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-110025726,width-1070,height-580,imgsize-79078,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2024-05-11T03:15:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Watch: Angry Israel Envoy Shreds UN Charter After Palestine Membership Vote - NDTV",
                    "description": "In a strong display of outrage, Israeli Ambassador Gilad Erdan shredded the UN charter at the United Nations General Assembly just before it passed a resolution supporting full membership of Palestine.",
                    "url": "https://www.ndtv.com/world-news/watch-angry-israel-envoy-gilad-erdan-shreds-un-charter-after-palestine-full-membership-vote-5637253",
                    "urlToImage": "https://c.ndtvimg.com/2024-05/rato95lg_gilad-erdan_625x300_11_May_24.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
                    "publishedAt": "2024-05-11T02:43:00Z",
                    "content": "Israeli envoy Gilad Erdan called the resolution a \"clear violation\" of the UN Charter\r\nNew York: In a strong display of outrage, Israeli Ambassador Gilad Erdan shredded the UN charter at the United N… [+3990 chars]"
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": null,
                    "title": "IPL 2024 Playoffs All Conditions Explained: How RCB Can Secure Top 4 Spot - NDTV Sports",
                    "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
                    "url": "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L2lwbC0yMDI0LXBsYXlvZmZzLWFsbC1jb25kaXRpb25zLWV4cGxhaW5lZC1ob3ctcmNiLWNhbi1zZWN1cmUtdG9wLTQtc3BvdC01NjMwMDc00gF3aHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaXBsLTIwMjQvaXBsLTIwMjQtcGxheW9mZnMtYWxsLWNvbmRpdGlvbnMtZXhwbGFpbmVkLWhvdy1yY2ItY2FuLXNlY3VyZS10b3AtNC1zcG90LTU2MzAwNzQvYW1wLzE",
                    "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
                    "publishedAt": "2024-05-11T02:27:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "AFP",
                    "title": "Balbirnie's 77 guides Ireland to 5-wicket win vs Pakistan, lead 1-0 in three-match T20I series - Hindustan Times",
                    "description": "The win gave Ireland a 1-0 lead, in their three-match T20I series against Babar Azam's Pakistan. | Crickit",
                    "url": "https://www.hindustantimes.com/cricket/balbirnies-77-guides-ireland-to-5-wicket-win-vs-pakistan-lead-1-0-in-three-match-t20i-series-101715393680630.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/1600x900/Britain-Cricket-T20-10_1715393901237_1715393940377.jpg",
                    "publishedAt": "2024-05-11T02:26:54Z",
                    "content": "Andrew Balbirnie's 77 helped guide Ireland to their first victory over Pakistan in 17 years as they won the opening Twenty20 international by five wickets in Dublin on Friday. The opener's innings wa… [+2200 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "'Narendra Modi is a king, not prime minister': Rahul Gandhi - Hindustan Times",
                    "description": "Rahul Gandhi also claimed that he has no interest in the politics of power. | Latest News India",
                    "url": "https://www.hindustantimes.com/india-news/narendra-modi-is-a-king-not-prime-minister-rahul-gandhi-101715393628842.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/1600x900/Congress-leader-Rahul-Gandhi-at-an-event-in-Luckno_1715393683470_1715393744796.jpg",
                    "publishedAt": "2024-05-11T02:23:12Z",
                    "content": "Rahul Gandhi on Friday said Congress made mistakes in the past and it will have to change its politics in the future. He also claimed that Narendra Modi is a king, not the prime minister.\r\nCongress l… [+1912 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Tuhin Das Mahapatra",
                    "title": "US says it's ‘reasonable to assess’ that Israel violated international humanitarian law using American weapons - Hindustan Times",
                    "description": "Biden administration has not definitively stated that Israel has breached international humanitarian law, but it's “reasonable to assess” that they may have",
                    "url": "https://www.hindustantimes.com/world-news/us-news/us-says-its-reasonable-to-assess-that-israel-violated-international-humanitarian-law-using-american-weapons-101715387384126.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/11/1600x900/ISRAEL-PALESTINIANS-LEBANON-3_1715389186305_1715389309371.JPG",
                    "publishedAt": "2024-05-11T01:11:07Z",
                    "content": "The Biden administration came out on Friday and said that it is reasonable to assess that the American weapons that Israel used in Gaza are inconsistent and abuse of international humanitarian law an… [+3618 chars]"
                }
    ]
  constructor() {
    super();
    console.log("hello")
  this.state={
    article:this.article,
    loading:false
  }
}


render() {
    return (
      <div className="row">
        {this.state.article.map((article, index) => (
          <div className='col-sm-4 my-3'>
            <div>This is news NewItem {index + 1}</div>
            <div className="card" style={{ width: '18rem' }}>
              <img src={article.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.title.slice(0,10)}</h5>
                <p className="card-text">{article.description.slice(0,88)}</p>
                <a href={article.url} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
}
