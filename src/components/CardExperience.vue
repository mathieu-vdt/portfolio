<script>
export default {
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
}
</script>
<template>
  <div class="card">
    <div class="left">
      <svg
        width="38"
        height="26"
        viewBox="0 0 38 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="38"
          height="26"
          rx="12"
          fill="url(#paint0_linear_612_33)"
          fill-opacity="0.61"
        />
        <defs>
          <linearGradient
            id="paint0_linear_612_33"
            x1="33.2"
            y1="-1.11362e-07"
            x2="-2.97556"
            y2="32.6881"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D28BFC" />
            <stop offset="1" stop-color="#7FF4D8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="right">
      <div class="card-header">
        <!-- <img src="@/assets/gradient.png" alt="gradient" class="card-image" /> -->
        <div class="card-title">
          <h2>{{ title }}</h2>
          <p>{{ status }}</p>
        </div>
        <div class="card-date">
          <p>{{ date }}</p>
        </div>
      </div>
      <div class="card-body">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  font-family: Arial, sans-serif;

  .left {
    padding-top: 4px;
  }

  .right {
    width: inherit;
    margin-left: 15px;
    .card-header {
      display: flex;
      align-items: start;
      justify-content: space-between;
    }

    .card-image {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    .card-title {
      flex: 1;

      p {
        margin: 0;
        font-size: 12px;
        color: gray;
      }
      h2 {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
      }
    }

    .card-date {
      font-size: 12px;
      color: gray;

      p {
        padding-top: 4px;
      }
    }

    .card-body {
      margin-top: 15px;
      p {
        margin: 0;
        font-size: 14px;
      }
    }
  }
}
</style>
