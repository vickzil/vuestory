/* eslint-disable*/
<template>
  <div>
    <!-- Loop through the stories array -->
    <div class="card" v-for="story in stories" :key="story.username">
      <div class="card-body">
        <div class="story-header">
          <p class="avatar-p">
            <span class="avatar">
              <!-- get the first letter in firstname -->
              {{ story.firstname.match(/\b(\w)/g).join("") }}
              <!-- get the first letter in lastname -->
              {{ story.lastname.match(/\b(\w)/g).join("") }}
            </span>
          </p>

          <div class="card-title-gender ml-4">
            <p class="card-subtitle">By- {{ story.firstname }} {{ story.lastname }}</p>
            <span class="card-gender">{{ story.gender }}</span>
          </div>
        </div>
        <h4 class="card-title">{{ story.headline }}</h4>
        <!-- readmore link which shows just 400 charcters -->
        <p class="card-text">
          {{ story.message.slice(0, 400) }} ...
          <span
            @click="readMoreActivated(story)"
            class="card-link"
          >Read More</span>
        </p>
        <!-- if readmore is activated, show the full story -->
        <!-- <p v-if="story.readMore" v-html="story.message" class="card-text"></p> -->

        <!-- like button whwn click adds or reduces number of likes person user, also adds blue or removes blue color to the like button -->
        <p class="likes">
          <i
            class="material-icons"
            :class="story.className"
            @click="addLike(story)"
            id="like"
          >thumb_up</i>
          <span class="like-number">{{ story.like }} {{ story.like > 1 ? "Likes" : "like" }}</span>
        </p>
      </div>
    </div>
    <!-- show read more -->
    <transition name="fadeevent">
      <div class="readMoreModal" v-if="readMore">
        <div class="card">
          <div class="card-body">
            <div class="readmoreclose" @click="closeReadMore">&times;</div>
            <div class="story-header">
              <p class="avatar-p">
                <span class="avatar">
                  <!-- get the first letter in firstname -->
                  {{ currentStory.firstname.match(/\b(\w)/g).join("") }}
                  <!-- get the first letter in lastname -->
                  {{ currentStory.lastname.match(/\b(\w)/g).join("") }}
                </span>
              </p>

              <div class="card-title-gender ml-4">
                <p
                  class="card-subtitle"
                >By- {{ currentStory.firstname }} {{ currentStory.lastname }}</p>
                <span class="card-gender">
                  {{ currentStory.gender }}
                  <span class="forlike" :class="currentStory.className">
                    {{ currentStory.like }}
                    {{ currentStory.like > 1 ? "Likes" : "like" }}
                  </span>
                </span>
              </div>
            </div>
            <h4 class="card-title">{{ currentStory.headline }}</h4>
            <p class="card-text">{{ currentStory.message }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "StoryList",
  props: ["stories"],
  data() {
    return {
      likes: 0,
      className: "is-black",
      successMsg: false,
      readMore: false,
      currentStory: {}
    };
  },

  methods: {
    // add like button, which toggles the class name and number of likes
    addLike(story) {
      story.toggleLike = !story.toggleLike;
      if (story.toggleLike == true) {
        story.like = story.like + 1;
        story.className = "is-blue";
      } else {
        story.like = story.like - 1;
        story.className = "is-black";
      }
    },

    // read more button
    readMoreActivated(story) {
      this.readMore = true;

      // assign the clicked story to the current story popup modal
      this.currentStory = story;

      // add text color blue if the number of likes of target story is greater than 0ne like else add black color
      if (this.currentStory.length > 0) {
        if (this.currentStory.like > 0) {
          this.currentStory.className = "is-blue";
        } else {
          this.currentStory.className = "is-black";
        }
      }
    },
    // clear active story
    closeReadMore() {
      this.readMore = false;
      this.currentStory = {};
    }
  }
};
</script>
<style scoped>
.readMoreModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.89);
  transition: 800ms ease;
}

.readMoreModal::-webkit-scrollbar {
  width: 0px;
  background: #777;
}

.readMoreModal .card {
  width: 900px;
  margin: 1.75rem auto;
  position: relative;
}

.readmoreclose {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 48px;
  color: #223;
  cursor: pointer;
}

.fadeevent-enter-active,
.fadeevent-leave-active {
  transition: opacity 0.35 ease-out;
}

.fadeevent-enter,
.fadeevent-leave-to {
  opacity: 0;
}

.forlike {
  margin-left: 30px;
}

@media screen and (max-width: 905px) {
  .readMoreModal .card {
    width: 750px;
  }
}

@media screen and (max-width: 767px) {
  .readMoreModal .card {
    width: 600px;
  }

  .readmoreclose {
    font-size: 38px;
  }
}

@media screen and (max-width: 625px) {
  .readMoreModal .card {
    width: 100%;
  }
  .readmoreclose {
    font-size: 34px;
  }
}
</style>
