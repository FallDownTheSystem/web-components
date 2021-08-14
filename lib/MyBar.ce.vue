<template>
	<div>
		<div class="mb-2">
			<p>This is another custom component, {{ x }}</p>
		</div>
		<button class="p-2 bg-green-600 text-white rounded-full" @click="x = x + '!'">
			<i-heroicons-outline:check-circle />
		</button>
		<NestedComponent />
	</div>
</template>

<script lang="ts">
export default defineComponent({
	inheritAttrs: false,
});
</script>
<script setup lang="ts">
let x = $ref('yo');
</script>

<style scoped>
@import 'main.css';
</style>
