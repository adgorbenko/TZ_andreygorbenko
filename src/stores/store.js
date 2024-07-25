import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {

  state: () => {
    return {
      names: JSON.parse(localStorage.getItem("names")) || [],
      phones: JSON.parse(localStorage.getItem("phones")) || [],
      bosses: JSON.parse(localStorage.getItem("bosses")) || [],
      show_names: JSON.parse(localStorage.getItem("show_names")) || [],
      name: null,
      phone: null,
      boss: null,
      show: false,
    }
  },
  actions: {
    showInput() {this.show = true},
    closeInput() {this.show = false},
    persistToLocalStorage() {
      localStorage.setItem("names", JSON.stringify(this.names));
      localStorage.setItem("phones", JSON.stringify(this.phones));
      localStorage.setItem("bosses", JSON.stringify(this.bosses));
      localStorage.setItem("show_names", JSON.stringify(this.show_names));
    },
    showNames(x){
        for (let i = 0; i < this.names.length; i++) {
                if(this.bosses[i] === x) {this.show_names[i]=!this.show_names[i]}
        }
    },
    Check(x){
        for (let i = 0; i < this.names.length; i++) {
            if(this.bosses[i] === x) return true
        }
    },
    saveUser() {if(this.name && this.phone && !this.phones.includes(this.phone)){
      this.show = false
      this.names.push(this.name)
      this.phones.push(this.phone)
      this.bosses.push(this.names.indexOf(this.boss))
      this.show_names = new Array(1000).fill(false)

      this.name = null
      this.phone = null
      this.boss = null
      this.persistToLocalStorage();
    }
    },
  },
})