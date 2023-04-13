<script setup>
import Frame from '@/components/includes/Frame.vue'
import Button from '@/components/includes/Button.vue'
import Content from '@/components/structure/Content.vue'
import Footer from '@/components/structure/Footer.vue'
import { reactive, onMounted, watch } from 'vue'

let cards = reactive([])

function addCard() {
  let newNumber = Math.floor(Math.random() * (cards.length + 1) * 10)
  while (cards.includes(newNumber)) {
    newNumber = Math.floor(Math.random() * cards.length * 10) + 1
  }
  cards.push(newNumber)
}

function deleteCard(cardIndex) {
  cards.splice(cardIndex, 1)
}

function sortCards() {
  if (!cards.length) return
  cards = cards.sort((a, b) => a - b)
}

onMounted(() => {
  const savedCards = JSON.parse(localStorage.getItem('cards'))
  if (savedCards) {
    cards.push(...savedCards)
  }
})

watch(cards, (newVal) => {
  localStorage.setItem('cards', JSON.stringify(newVal))
})
</script>
<template>
  <Content>
    <Frame as="header" class="sticky top-0 rounded-b-2xl">
      <div class="flex flex-wrap gap-x-4 gap-y-2 px-4 w-full">
        <Button @click="addCard" buttonName="Add Card"></Button>
        <Button @click="sortCards" buttonName="sort Cards"></Button>
      </div>
    </Frame>
    <div class="flex relative flex-row gap-x-3 h-[70vh]">
      <Frame v-if="cards.length" as="div" class="w-full p-4 overflow-y-auto rounded-2xl grid grid-cols-250-auto gap-10">
        <div v-for="card of cards">
          <Frame as="div" class="rounded-2xl relative w-full bg-opacity-0 min-w-[200px] aspect-square">
            {{ card }}
            <Button @click="deleteCard(card)" deletButton class="absolute top-3 right-3" />
          </Frame>
        </div>
      </Frame>
      <div v-else class="m-auto">
        <p class="font-merriweather text-center text-7xl lg:text-9xl text-slate-700">there are no cards</p>
      </div>
      <Frame class="max-w-[20px] group absolute md:static h-full right-0 bg-cyan-300/10 -mr-4 hover:max-w-xs transform duration-200 ease-in-out rounded-l-xl border">
        <div class="opacity-0 duration-75 space-y-4 px-4 group-hover:opacity-100 flex-col">
          <p class="hover:text-cyan-600">press the "add card" button to add the new card</p>
          <p class="hover:text-cyan-600">Use the "sort cards" button to sort the Cards by the increase.</p>
          <p class="hover:text-cyan-600">top right to delete them</p>
        </div>
      </Frame>
    </div>
    <Footer />
  </Content>
</template>
