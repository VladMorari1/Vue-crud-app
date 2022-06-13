<template>
  <div class="recipe">
    <router-link :to="`/recipe/${recipe.slug}`">
      &lt; Back
    </router-link>
    <div class="editBlock">
      <span class="spanRow">Title</span>
      <input type="text" :value="recipe.title">
    </div>
    <div class="editBlock">
      <span class="spanRow">Description</span>
      <input type="text" :value="recipe.description">
    </div>
    <h1>Need to finish edit part</h1>
  </div>
</template>

<script>
export default {
  name: 'RecipeEdit',
  computed: {
    recipe() {
      return this.$store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug)
    },

  }
}
</script>
<style>
.editBlock {
  margin-top: 12px;
  padding: 6px;
  border: 1px solid #20364f;
  border-radius: 6px;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 60px;
}
</style>