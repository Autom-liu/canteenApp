<template>
  <div id="app">
		<img src="@/assets/images/logo.jpg" alt="" width="100%" />
		<keep-alive>
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
