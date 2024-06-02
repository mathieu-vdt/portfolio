<script lang="ts">
import { defineComponent } from 'vue'
import TitleNumber from '../components/TitleNumber.vue'
import CardExperience from '../components/CardExperience.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    TitleNumber,
    CardExperience,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      experiences: [
        {
          title: 'Full stack Developer',
          status: 'on block release',
          date: '2022 - 2024',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
          title: 'Full stack Developer',
          status: 'on block release',
          date: '2022 - 2024',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
          title: 'stack',
          status: 'on block release',
          date: '2022 - 2024',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
          title: 'Full stack',
          status: 'on block release',
          date: '2022 - 2024',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="about-me">
    <TitleNumber number="01" title="About me" />
    <p class="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea quas cumque, assumenda
      eligendi repudiandae magni i.
    </p>
    <div class="cards">
      <Swiper
        class="mySwiper"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          881: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1291: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }"
      >
        <SwiperSlide
          v-for="(experience, index) in experiences"
          :key="index"
          :class="{ 'first-slide': index === 0 }"
        >
          <CardExperience
            :title="experience.title"
            :status="experience.status"
            :date="experience.date"
            :description="experience.description"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss">
#about-me {
  background: linear-gradient(0, #f3f3f3 0%, #ffffff 100%);
  height: 500px;
  width: 100%;
  padding: 40px;
  color: var(--black);

  .description {
    font-size: 1.2em;
    font-weight: 400;
    width: 50%;
    margin-bottom: 20px;
  }

  .cards {
    // display: flex;
    // column-gap: 20px;
    // overflow-x: auto;
    .mySwiper {
      .swiper-slide {
        width: auto;

        &.first-slide {
          margin-left: 70px; // Ajustez cette valeur selon vos besoins
        }
      }

      .swiper-button-next {
        padding-bottom: 40px;
      }
      .swiper-button-prev {
        padding-bottom: 40px;
      }

      .swiper-pagination {
        position: relative;
        padding-top: 20px;
      }

      .swiper-pagination-bullet {
        margin: 0 4px; // Ajustez l'espacement entre les indicateurs si nécessaire
      }
    }
  }
}

@media screen and (max-width: 900px) {
  #about-me {
    .description {
      width: 80%;
    }
  }
}

@media screen and (max-width: 600px) {
  #about-me {
    padding: 20px;
    .description {
      width: 100%;
    }

    .mySwiper {
      .swiper-slide {
        width: auto;

        &.first-slide {
          margin-left: 0px; // Ajustez cette valeur selon vos besoins
        }
      }
    }
  }
}
</style>
