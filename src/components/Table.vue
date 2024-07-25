<script setup>
import { useStore } from '@/stores/store'
const s = useStore()
</script>

<template>
<div v-if="!s.show" class="main">
<button v-if="!s.show" @click="s.showInput" class="add">Добавить</button>
<table class="table">
  <thead>
	<tr>
	  <th>Имя</th>
	  <th>Телефон</th>
	</tr>
  </thead>
  <tbody>
	<tr v-for="i in s.names.length">
	  <td v-if="(s.bosses[i-1] < 0) || (s.show_names[i-1] === true)" @click="s.showNames(i-1)"> <a v-if="s.Check(i-1)">+</a> {{s.names[i-1]}} </td>
	  <td v-if="(s.bosses[i-1] < 0) || (s.show_names[i-1] === true)">{{s.phones[i-1]}}</td>
	</tr>
  </tbody>
</table>
</div>
</template>

<style scoped>
@import "@/assets/main.css";

.table {
    margin-top:20px;
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;
}

.table th {
    text-align:left;
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}

.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}

</style>
