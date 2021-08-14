<template>
	<div class="grid place-items-center place-content-center h-screen bg-gray-800 text-white">
		<my-foo class="border border-dashed border-gray-500 p-4"></my-foo>
		<div class="mt-5">This is not a custom component!</div>
	</div>
</template>

<script setup lang="ts">
import { register } from '../lib/main';
register();
</script>
