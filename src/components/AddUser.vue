<script setup>
import { useStore } from '@/stores/store'
const s = useStore()
</script>

<template>
<div v-if="s.show" class="main">
  <button @click="s.closeInput" class="delete">X</button>
  <div class="text">Введите данные </div>
  <div class="data">
    <div class="name">Имя <a class="req">*</a></div>
    <input v-model="s.name" type="text">
    <div class="name">Телефон <a class="req">*</a></div>
    <input v-model="s.phone" type="tel">
    <div class="name">Начальник</div>
    <select v-model="s.boss">
  <option v-for="i in s.names">{{i}}</option>
</select>
  </div>
   <button @click="s.saveUser()" class="add">Сохранить</button>
</div>
</template>

<style scoped>
@import "@/assets/main.css";

select{
border: 1px solid lightgrey;
fontsize: 15px;
height:25px;
border-radius: 2px;
padding-left:5px;
background: white;
}

input {
border: 1px solid lightgrey;
fontsize: 15px;
height:15px;
border-radius: 2px;
padding:3px;
padding-left:5px;
}

.data {
display: grid;
grid-template-columns: 1fr 1fr;
gap:10px;
padding: 10px;
}

.delete {
right: 15px;
top:15px;
position:absolute;
color:lightgrey;
border:lightgrey 1px solid;
background: white;
width: 30px;
height: 30px;
border-radius:5px;
font-size:20px;
}

.text {
  color: cadetblue;
  margin:10px;
}

.name {
color:grey;
}

.req {
color:orangered;
}

</style>
