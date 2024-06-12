<template>
  <div>
    <h1>{{ champion_id }}</h1>
    <h1>{{ skin_id }}</h1>
    <h1>{{ currency }}</h1>
    <h1>{{ current_rank }}</h1>
  
    <br>
    <button @click="myBtn">Start Checking</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      champion_id : None,
      skin_id : None,
      currency : None,
      current_rank:None 

    };
  },
  methods: {
    myBtn() {
      pywebview.api.start_app()
    }
  },
  mounted() {
    document.addEventListener("account_ready", (event) => {
      let eventData = event.detail
      console.log(event.detail,eventData)

      this.champion_id = eventData.champion_id;
      this.skin_id = eventData.skin_id;
      this.currency = eventData.currency;
      this.current_rank = eventData.current_rank;
    });
  }
};
</script>

<style scoped></style>