/* eslint-disable*/
<template>
  <div class="story">
    <div class="container">
      <div class="article">
        <div class="article-heading">
          <h3>All Stories</h3>
          <hr />
        </div>
      </div>
      <div class="all-stories">
        <!-- show success message if story is added successfully -->
        <div class="alert alert-success" v-if="successMsg">Post added successfully!</div>

        <!-- show error message if a username exist -->
        <div
          class="alert alert-danger"
          v-if="errorMsg"
        >This Username cannot post more than one story</div>
        <StoryList v-bind:stories="stories" />
        <AddStory v-on:add-story="addNewStory" />-->
      </div>
    </div>
  </div>
</template>


<script>
// import components needed
import StoryList from "../components/StoryList";
import AddStory from "../components/AddStory";

export default {
  name: "Stories",
  components: {
    StoryList,
    AddStory
  },

  data() {
    return {
      // error message and successage is false
      successMsg: false,
      errorMsg: false,

      // list of stories
      stories: [
        {
          firstname: "Elizabeth",
          lastname: "Sampson",
          username: "bethsam",
          like: 103,
          toggleLike: false,
          gender: "Female",
          readMore: false,
          className: "is-black",
          headline: "The Love From 'Hello'",
          message:
            "Well, I was seventeen at the time. Me and my friends prepared for the normal night out on the town. we were all from strict Christian families so we wore skirts until we got to town then we would change. We were never in-modest but we did wear pants. Anyhow we went to the mall as always and then decided to try and catch up with some of their friends at a local motorcycle hangout... the corner at an Exxon gas station. We lived in a Marine corp town so there were always guys there. We got there around seven or so and my best friend Cindy immediately noticed two guys she knew coming out of the store so she dragged me over. All within like two minutes I swear she had paired me with this extremely muscular hot guy and i was being popped on the back of the first sport bike I had ever ridden. I was basically in a daze. This guy from the tip of his sweet brown curls to the bottom of his black booted feet was in short the most perfect man I could have conjured. He was everything I looked for in one package. Sitting there with my arms wrapped tight I was enthralled not to mention my body felt like fire against him. About a mile down the road we came to a stoplight and he popped up his visor to ask my name and tell me he was Chris. He said he was dumbfounded at the station so hadn't even asked. I said Beth... Which confused him because my Friends called me Britt but he called me Angel almost from the first. When We got back from our ride, we sat in the parking lot literally just staring at each other for two hours. The only words we said were those to confirm we would see each other again. We kissed during that time but it was more just a meeting of souls...our lips just barely touched. We became soul mates in that second while we just stared. I never believed in love at first sight but after meeting Chris... well, I knew the moment I looked in his eyes that he was the one I wanted to spend the rest of my life with. It was a soft immature love but now... a year later. My love has grown into the strongest emotion I could imagine and it grows every day. The best thing of all though is that he feels the same way and pledged his life to me. God gave me the most extraordinary and perfect gift that night."
        },

        {
          firstname: "Seth",
          lastname: "Rajd",
          username: "setraja",
          like: 319,
          toggleLike: false,
          gender: "Male",
          readMore: false,
          className: "is-black",
          headline: "My Love Is My Pride",
          message:
            "Well, First of all, I want to tell you something about myself.... hmmm!!!.. I'm 19 right now, male and doing my Bachelors in Computer sciences. well, at first, we had two campus & after completing my ADP,  a degree equivalent to A LEVELS.., we have been shifted to the other campus! and there I saw this girl who was like totally different from everyone else..., very cute, innocent & also wears black gown like most Muslim girls. I always tried to tell her about my feelings but whenever I saw her coming, the blood in my veins rushes & my tongue never supported me. But I always stare at her beautiful face, and always praying for God to help me out....!!! Days passes and then one day I came to know that one of friend is like a brother to her. She only talks with him and no one else. Then I told him my feelings towards her and how much I love her. At first, he refused and said she's too different from others and will not agree. we had a long conversation, and he agreed, but told me that if you really love her, then just go and tell her. If your love is true, then you won't get hurt. I did as I was instructed. I went to her and was really confused and scared...I asked her, 'Excuse me ma'... she replied 'YES'. I said well,...hmmm.., aahhmmm, actually would you be my friend? she nodded, 'No! Sorry'. Then i got a bit of confident & I asked, 'Well...am I doing wrong?. she said 'Listen... I came here to study, so please allow me to study, I don't want to get into these stuffs cos theirs no use of it, and at the end, we get hurt.' She stood up and walked away. I stood there for a while disappointed and after some minutes... I went home. The whole night I was thinking about all she said and how unfriendly the words were coming out. I felt ashamed and decided to hide whenever i see her. I thought she'll be saying to herself,'He is a loser and always following her or what'. I ended up staring at her from a far  distance were she won't spot me. As time passes by, She told my friend that one of his friends ( that's me) was so insensitive and rude. But my friend explained to her how much I cared and that he convinced me to approach her. She got angry at him , but after a long convincing, She decided to let it go. she said her aim was to help her parents and siblings and make them proud.  She doesn't want to be in any relationship. My friend told me about their conversation and decided to focus on my studies and improve my studies. My dad said, 'First deserved comes desire'. Those words stuck in my head and I became a good student. Days, Weeks, Months went by and we met again in school restaurant. We had a brief conversation, and That's it!!. I got her number and we speak every night. From there, we fell In-love with each other and till date, we are still together. "
        },

        {
          firstname: "Juliet",
          lastname: "Champbel",
          username: "julicamp",
          like: 51,
          toggleLike: false,
          gender: "Female",
          readMore: false,
          className: "is-black",
          headline: "The Beautiful Day In February",
          message:
            "I went to pick up my best friend on a Friday morning, 2001. It was supposed to be an ordinary run of the mill kind of day. we are going to the farmer's market, to the movies, and just to hang out. She called me and asked if we could also pick up her boyfriend to spend the day. I said sure. We go and pick him up his nephew. I said , 'sure, why not make this a better day?' Little did I know. We pulled up to his apartment complex and he came out of the door. I saw the handsomest angel sent from God Himself. He came down and got in the car. I was driving, and every now and then, I would look in the rear view  mirror and I saw him looking at me. He made me feel nervous at first, but as the day went on, I kind of relaxed. We drove up to this point where if you stand on the hill, you can see forever. My  friend and her man went down the hill, and his nephew followed them down. My best friend told him to go back up the hill and come talk to me. He was nervous, because he said 'I don't know what to talk about.' She said, 'say whatever comes to your mind.' I can remember the first question I ever asked him. ' When's your birthday?' ( I had to break the ice somehow.) Our birthdays are 5yrs. and 10 days apart, which makes us the same sign. Scorpio. He started to talk about bees, the plants, and the birds. He calls me his 'Nature Girl', because that's where we met, in the middle of nature. We talked for hours on end, until the sun was practically setting. We exchanged numbers, and he called me exactly 20 minutes later. (That's how long it took me to get home after dropping everybody off). We talked almost all night long, and before the conversation was over, he told me that he loved me, and I told him I felt the same way. Needless to say, that was the beginning of our forever. We have been together now for 2 years, 5 months, and 9 days. We are getting married in November. Baby, I love you, and I am so happy that we came to pick you up on that beautiful day in April."
        },

        {
          firstname: "Johnnie",
          lastname: "McQuarley",
          username: "mcjohy",
          like: 104,
          toggleLike: false,
          gender: "Male",
          readMore: false,
          className: "is-black",
          headline: "An Angel Does Entreat My Eyes",
          message:
            "I was walking around the city of Birmingham one day and I stopped and looked upon a beautiful diamond ring. I really don't know why I stayed to even look, It wasn't like I had someone to give it to. Yet, I did stay to stare at it. As I turned to walk away that when I bumped into someone. It seemed accidentally knocked some books to the ground. I went down to pick them up and boom, our heads met hard. I told whoever let me get them. So I went down again and Got the books and I gave them to what I thought was an Angel. She was the most beautiful woman I had ever seen in my entire life. I thought I was dreaming. She looked as shocked as I was and we just stood there for about ten seconds and we leaned toward each other and we kissed each other's lips. I dropped her books and we kissed for quite some while. I said my name was Johnnie, and she said her name was Destiny. I replied you sure are. We kissed again and from that day forward, we were always together. Even got married a week later. We knew what we wanted and what I wanted was her, and I got her too."
        },

        {
          firstname: "Jane",
          lastname: "Anderson",
          username: "janeann",
          like: 78,
          toggleLike: false,
          gender: "Female",
          readMore: false,
          className: "is-black",
          headline: "My Together, My Forever",
          message:
            "I met him at a Valentine Party at his church! It was love at first sight! He had me from hello. I started going to his church , hoping to run into him. After a while he started coming over to my house with his friend. I tried so hard to get to him, but it was like he didn't like me. we saw each other everyday of the week, after he graduated, he went off to the navy! I wrote him almost everyday at boot camp. He wrote back to me too. After two years of him coming home, and going back, I was about to give up and go out about it and then asked me out (after two years of waiting for him!). He told me he was shy and he didn't know how to deal with it, that he liked me! We have now been going out for one year and 7 months and plan on getting married  on Oct 12, 2002! We are amazed at each others love! We are amazed at each others so much and can't wait to spend the rest of our lives together!"
        },

        {
          firstname: "Adangozi",
          lastname: "Okereke",
          username: "adango22",
          like: 143,
          toggleLike: false,
          gender: "Female",
          readMore: false,
          className: "is-black",
          headline: "The Day I met my Perfect Match",
          message:
            "On a faithful Tuesday Evening, Valentine's day and mom asked me to got to church with her and I said yea I will go. We got to church at around 7pm, and at 7:30, I saw something that caught my attention. This person had the most beautiful eyes I had ever seen. During the service, I kept on looking at him and he never noticed. After Church service, I waited in the back and he was coming, I was nervous but was determined to meet him. I stood there with my cousin and he comes up, and I stopped him and reached out my hand and said God bless you. We stared so long at each other and I   walked away. I knew he was still looking at me. so, I told me cousin to give him my number. He ran up to me and we talked for a while...We immediately fell In-love with each other. We are still together and I thank God for that to meet him."
        }
      ]
    };
  },
  methods: {
    // add new story to stories array
    addNewStory(newStory) {
      var allStories = this.stories;

      // check if this username has already posted a story, and show error message
      if (
        allStories.filter(stor => stor.username === newStory.username).length >
        0
      ) {
        // show error message
        this.errorMsg = true;
        // hide success message
        this.successMsg = false;

        // remove error message after 8seconds
        setTimeout(() => (this.errorMsg = false), 8000);
        return false;
      } else {
        // if username is unique and no errors, push new story to stories array
        allStories.unshift({
          firstname: newStory.firstname,
          lastname: newStory.lastname,
          username: newStory.username,
          like: newStory.like,
          readMore: newStory.readMore,
          gender: newStory.gender,
          headline: newStory.headline,
          message: newStory.message
        });

        // show success message
        this.successMsg = true;
        // hide success message
        this.errorMsg = false;

        // remove success message after 8seconds
        setTimeout(() => (this.successMsg = false), 8000);
        return true;
      }
    }
  }
};
</script>