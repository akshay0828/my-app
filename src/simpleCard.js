import img1 from "./img1.jpg"

function Welcome(props) {
 

    return(
        
        <div class="card">
        
            <div ></div>
            <img src={props.img}width="150" height="150" align="left"/><h5>{props.title} </h5><p class="des">{props.description} <a href={props.url}>link</a> </p> <p class="des1" >{props.author}</p> 
        </div>
    );

  }
  
  function App() {
    return (
      <div>
        <Welcome title="Russia withdraws troops after Ukraine encircles key city" description="Russia's Tass and RIA news agencies, citing the Russian defense ministry, made the announcement." author="Kyiv | Updated: October 1, 2022 9:35:20 pm" img={'https://images.indianexpress.com/2022/10/russia-lyman.jpg'} url="https://indianexpress.com/article/world/russia-troops-left-east-ukraine-lyman-ria-8184805/" />
        <Welcome title="PM to launch 5G services in India today, and all the latest news" description="Prime Minister Narendra Modi will on Saturday launch India's 5G services in select cities." author="Published on Oct 01, 2022 09:31 AM IST" img={'https://telecomtalk.info/wp-content/uploads/2022/09/5g-is-launching-in-india-today-what.jpg'} url="https://www.hindustantimes.com/india-news/morning-brief-pm-to-launch-5g-services-in-india-today-and-all-the-latest-news-101664592185607.html" />
        <Welcome title="Elated Suriya receives National Award for Best Actor" description="Suriya received the National Award for Best Actor for his work in Soorarai Pottru. He described this big." author="Published on :September 30, 2022 23:13 IST" img={'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/SuriyaNationalAward.jpeg?1xWVQA8y3ZiMq7M4v.CZ5XanUFt4bqEK&size=770:433'} url="https://www.indiatoday.in/movies/regional-cinema/story/elated-suriya-receives-national-award-for-best-actor-says-a-moment-i-will-never-forget-2006908-2022-09-30" />
        <Welcome title="Lights, Elephants & Celebrations: Why You Must Visit Mysuru Dasara During Navratri" description="A nine day extravagnaza with a unique way of celebration." author="Published: September 30, 2022 5:37 PM IST" img={'https://static.india.com/wp-content/uploads/2022/09/mysuru-palace.jpg?impolicy=Medium_Widthonly&w=700&h=467%20widht='} url="https://www.india.com/travel/articles/navratri-navratri-2022-lights-elephants-celebrations-why-you-must-visit-mysuru-dasara-during-navratri-mysore-dasara-2022-durga-puja-5661385/" />
      </div>
    );
  }
  export default App