<script lang="ts">
import { ref, computed, watch } from 'vue'
import { pictures } from '../utilities/pictures'

export default {
  data() {
    return {
      pictures
    }
  },
  computed: {
    waveStyle() {
      return {
        background: `url(${this.pictures.wave}) repeat-x`,
        backgroundSize: '200% 100%',
        animation: 'wave 20s infinite linear alternate-reverse'
      }
    }
  }
}
</script>

<template>
  <div id="home">
    <div class="job">
      <div class="position">
        <p class="full-stack">Full stack</p>
        <p class="dev">Developer</p>
      </div>
      <button class="contact-me">Contact me</button>
    </div>
    <div class="profile">
      <!-- <img :src="pictures.me" alt="" /> -->
      <div class="presentation">
        <p class="im">
          Hi! I’m <br />
          Mathieu Vidot
        </p>
        <p class="desc">
          A tireless developer that works against the clock to squeeze as much learning a day,
        </p>
      </div>
    </div>
    <div class="wave-top" :style="waveStyle"></div>
    <div class="wave-mid" :style="waveStyle"></div>
    <div class="wave-bottom" :style="waveStyle"></div>
  </div>
</template>

<style lang="scss">
#home {
  /* background: linear-gradient(178deg, rgba(255, 255, 255, 0.5) 0%, rgba(177, 177, 177, 0.5) 100%);*/
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: calc(100vh - 74px);
  overflow: hidden;
  display: flex;
  flex-direction: row;

  .job {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .position {
      p {
        font-size: 7rem;
        font-weight: 600;
        color: var(--black);
        line-height: 1.2em;

        &.dev {
          margin-left: 200px;
          background: linear-gradient(0deg, var(--black) 40%, var(--grey) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    button.contact-me {
      font-size: 1.5rem;
      padding: 10px 40px;
      border: none;
      border-radius: 70px;
      background: linear-gradient(90deg, var(--light-cyan) 0%, var(--light-purple) 100%) repeat-x;
      color: var(--white);
      margin-right: 150px;
      background-size: 200%;
      background-position: top;

      transition: 300ms background-position ease-in-out;
    }

    button.contact-me:hover {
      cursor: pointer;
      background-position: right;
    }
  }
  .profile {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--black);

    img {
      background-color: #d9d9d9a2;
      height: 400px;
      border-radius: 80%;
    }

    p.im {
      font-size: 3rem;
      font-weight: 600;

      text-align: left;
      line-height: 1em;
    }

    p.desc {
      font-size: 1.5rem;
      margin-top: 20px;
      text-align: left;
      line-height: 1em;
      width: 60%;
    }
  }

  .wave-top,
  .wave-mid,
  .wave-bottom {
    position: absolute;
    z-index: -1;
    top: -10%;
    width: 100%;
    height: 100vh;
  }

  .wave-top {
    transform: rotate(-5deg);
  }
  .wave-bottom {
    transform: rotate(5deg);
  }
}

@keyframes wave {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@media screen and (max-width: 1550px) {
  #home {
    .job {
      .position {
        p {
          font-size: 5rem;
        }
      }
      button.contact-me {
        font-size: 1rem;
        margin-right: 0px;
        margin-top: 20px;
      }
    }

    .profile {
      img {
        background-color: #d9d9d9a2;
        height: 300px;
        border-radius: 80%;
      }

      .presentation {
        p.im {
          font-size: 2.5rem;
          font-weight: 600;

          line-height: 1em;
        }

        p.desc {
          font-size: 1.5rem;
          width: 80%;
        }
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  #home {
    position: initial;
    flex-direction: column;

    .job {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10%;
      margin-top: 10%;

      .position {
        p {
          font-size: 5rem;
        }
      }
      button.contact-me {
        font-size: 1rem;
        margin-right: 0px;
        margin-top: 20px;
      }
    }

    .profile {
      width: 100%;

      img {
        background-color: #d9d9d9a2;
        height: 300px;
        border-radius: 80%;
      }

      .presentation {
        padding: 0 20px;
        p.im {
          margin-top: 20px;
          font-size: 2rem;
          font-weight: 600;

          text-align: center;
          line-height: 1em;
        }

        p.desc {
          font-size: 1.5rem;
          text-align: center;
          width: 100%;
        }
      }
    }

    .wave-top,
    .wave-mid,
    .wave-bottom {
      position: fixed;
      top: -28%;
    }
  }
}

@media screen and (max-width: 768px) {
  #home {
    position: initial;
    flex-direction: column;

    .job {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10%;
      margin-top: 10%;

      .position {
        p {
          font-size: 3rem;

          &.dev {
            margin-left: 60px;
          }
        }
      }
      button.contact-me {
        font-size: 1rem;
        margin-right: 0px;
        margin-top: 20px;
      }
    }

    .profile {
      width: 100%;

      img {
        background-color: #d9d9d9a2;
        height: 200px;
        border-radius: 80%;
      }

      .presentation {
        padding: 0 20px;
        p.im {
          margin-top: 20px;
          font-size: 2rem;
          font-weight: 600;

          text-align: center;
          line-height: 1em;
        }

        p.desc {
          font-size: 1.2rem;
          text-align: center;
          width: 100%;
        }
      }
    }

    .wave-top,
    .wave-mid,
    .wave-bottom {
      position: fixed;
      top: -28%;
    }
  }
}
</style>
