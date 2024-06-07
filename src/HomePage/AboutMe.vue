<script lang="ts">
import { defineComponent } from 'vue'
import TitleNumber from '../components/TitleNumber.vue'
import CardExperience from '../components/CardExperience.vue'
import Carousel from 'primevue/carousel'
import { pictures } from '@/utilities/pictures'

export default {
  components: {
    TitleNumber,
    CardExperience,
    Carousel
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
      ],
      responsiveOptions: [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '745px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ],
    pictures

    }
  }
}
</script>

<template>
  <div id="about-me">
    <img :src="pictures.triangle" alt="triangle" class="triangle" />
    <img :src="pictures.triangle_o" alt="triangle" class="triangle_o" />
    <TitleNumber number="01" title="About me" />
    <p class="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea quas cumque, assumenda
      eligendi repudiandae magni i.
    </p>
    
    <Carousel :value="experiences" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <CardExperience
              :title="slotProps.data.title"
              :status="slotProps.data.status"
              :date="slotProps.data.date"
              :description="slotProps.data.description"
              class="card-experience"
            />
      </template>
  </Carousel>
  </div>
</template>

<style lang="scss" scoped>
  #about-me {
    background: linear-gradient(0, #f3f3f3 0%, #ffffff 100%);
    height: 500px;
    width: 100%;
    padding: 40px;
    color: var(--black);
    position: relative;
    z-index: 1;
    overflow: hidden;

    .triangle{
      position: absolute;
      z-index: -1;
      right: 0;
      top: -30px;
    }

    .triangle_o{
      position: absolute;
      z-index: -1;
      left: 40%;
      top: 0;
    }
    .description {
      font-size: 1.2em;
      font-weight: 400;
      width: 50%;
      margin-bottom: 20px;
    }
    .card-experience {
      margin: 0 20px; /* Adjust as needed */
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
  }
}
</style>
