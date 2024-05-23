<script lang="ts">
import { defineComponent } from 'vue'
import TitleNumber from '../components/TitleNumber.vue';
import CardExperience from '../components/CardExperience.vue';

export default {
  components: {
    TitleNumber,
    CardExperience
  }
}
</script>

<template>
  <div id="about-me">
    <TitleNumber />
    <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ea quas cumque, assumenda eligendi repudiandae magni i.</p>
    <CardExperience />
  </div>
</template>

<style lang="scss">
#about-me {
  background: linear-gradient(0, #f3f3f3 0%, #ffffff 100%);
  height: 500px;
  width: 100%;
  padding: 40px;
  color: var(--black);

  .description{
    font-size: 1.2em;
    font-weight: 400;
    width: 50%;
  
  }
}

@media screen and (max-width: 600px) {
  #about-me {

  .description{
    width: 100%;
  
  }
}
}
</style>
