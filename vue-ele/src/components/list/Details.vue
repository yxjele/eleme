<template>
  <div class="details">
    <div class="header">
      <mt-header title="" class="header-mt">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
    </div>
    <div class="datails-img">
      <img src="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .header{
    height: .6rem;
    background: #c4bdcc;
  }
  .header-mt{
    background: #c4bdcc;
  }
</style>
