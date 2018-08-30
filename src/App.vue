<template>
  <div id="app">
    <div>
        <input type="text" placeholder="Termék neve" v-model="newItem.name" @keydown.enter="AddNewItem()">
    </div>
    <div>
        <input type="number" placeholder="Darabszám" v-model="newItem.count" @keydown.enter="AddNewItem()">
        <span> db </span>
    </div>
    <div>
        <input type="number" placeholder="Egységár" v-model="newItem.basePrice" @keydown.enter="AddNewItem()">
        <span> Ft </span>
    </div>
    <div>
        <button @click="AddNewItem()">Hozzáadás</button>
    </div>
        <!-- lista -->
        <ul id="itemList">
            <li v-for="item in itemCollection" v-bind:key="item">
                {{ item.name }}, {{ item.count }} x {{ item.basePrice }} Ft, {{ item.GetTotalPrice() }} Ft
            </li>
        </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartItem from "./components/CartItem";

@Component
export default class App extends Vue {
  private itemCollection: CartItem[] = [];
  private newItem: CartItem = new CartItem();

  private created(): void {
    this.itemCollection.push(new CartItem("tej", 2, 200));
    this.itemCollection.push(new CartItem("kenyér", 5, 200));
    this.itemCollection.push(new CartItem("gumicukor", 10, 500));
  }

  private AddNewItem(): void {
    // validálás
    if (
      !CartItem.CanBeConstructed(
        this.newItem.name,
        this.newItem.count,
        this.newItem.basePrice
      )
    ) {
      return;
    }

    // új elem beszúrása
    this.itemCollection.push(
      new CartItem(
        this.newItem.name,
        this.newItem.count,
        this.newItem.basePrice
      )
    );
    // ideiglenes objektum ürítése
    this.newItem = new CartItem();
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
input[type="text"],
input[type="number"],
button {
  margin: 5px;
}
</style>
