<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';

export default defineComponent({
  name: 'CardExperience',
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    }
  }
});
</script>
<template>
  <Card>
    <template #content>
      <div class="content">
        <svg width="68" height="46" viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="68" height="46" rx="12" fill="url(#paint0_linear_612_33)" fill-opacity="0.61"/>
          <defs>
            <linearGradient id="paint0_linear_612_33" x1="63.2" y1="-1.11362e-07" x2="-2.97556" y2="32.6881" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D28BFC"/>
              <stop offset="1" stop-color="#7FF4D8"/>
            </linearGradient>
          </defs>
        </svg>

        <div>
          <div class="header">
            <div class="left">
              <p class="title">{{ title }}</p>
              <p class="status">{{ status }}</p>
            </div>
            <div class="right">
              <p class="date">{{ date }}</p>
            </div>
          </div>
          <p class="description">
            {{ description }}
          </p>
        </div>
      </div>
    </template>
</Card>
  
</template>

<style scoped lang="scss">
.content{
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;

    .title{
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}
@media screen and (max-width: 600px) {
  .content{
    svg{
      display: none;
    }
    .header{
      .title{
        font-size: 1rem;
      }
      .date, .status{
        font-size: 0.8rem;
      }
    }
    .description{
        font-size: 0.8rem;
      }
  }
}
</style>
