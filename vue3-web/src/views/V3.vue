<template>
	<div class="container">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import axios from "axios";

	const msg = ref("");

	const getMessage = async () => {
		try {
			let { data: res } = await axios.get(
				"http://localhost:3001/vue3/getMsg"
			);
			if (res.code === 200) {
				msg.value = res.data;
			} else {
				alert(res.message);
			}
		} catch {
			alert("接口异常");
		}
	};
	getMessage();
</script>

<style scoped></style>
