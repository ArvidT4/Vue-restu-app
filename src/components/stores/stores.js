import { ref, computed, isProxy, toRaw } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
//import {useRoute, useRouter} from "vue-router"



function sortItems(a, b) {
  if (a.number < b.number)
      return 1;
  if (a.number > b.number)
      return -1;
  return 0;
  }
  function sortLunch(a, b) {
    if (a.id > b.id)
        return 1;
    if (a.id < b.id)
        return -1;
    return 0;
    }

const getLocalStorage = (storageKey) => {
  const storageArray = localStorage.getItem(storageKey)

  return storageArray ? JSON.parse(storageArray) : false
}
const getLocalStorageString = (storageKey) => {
  const storageArray = localStorage.getItem(storageKey)

  return storageArray ? storageArray : ""
}

const getSessionStorage = (storageKey, storageType) => {
  const storageArray = sessionStorage.getItem(storageKey)

  if(storageType==50043){
    return storageArray ? storageArray : storageType
  }
  else{
    return storageArray ? JSON.parse(storageArray) : storageType
  }
  
}
const getCookie = () => {
  if(!$cookies.get('token')){ return "" }
  else{return JSON.stringify($cookies.get('token'))}
}


export const tokenStore = defineStore('tokenStore',{
  state:()=>({
    token:getCookie()
  }),
  actions:{
    async test(){
      const requestOptions = {
        method: "POST",
        body:  {test:"hej"}
      };
        fetch("http://localhost:4000/test", requestOptions)
            .then(response => response.json())
            .then(data =>{
                
              (console.log(data))
        });
    },


    async login(user){
      //console.log(user)
      const res = await axios({
        method: 'post',
        url: "http://localhost:4000/loginAdmin",
        data: {
            "username":user.username,
            "password":user.password,
            "email":user.email
        }
      });
      console.log(res)
      if(res.data.mes=="SUCCESS"){
        this.token=res.data.token
        //sessionStorage.setItem('token',this.token)
        $cookies.set('token',this.token, {httpOnly: true})
        //useRouter().push({name:'ValidateCode'})
        console.log(this.token)
        return true
      }
      else{
        console.log("nop")
        return false
      }
    },
   
    async validateCode(code){
      //console.log(user)
      const res = await axios({
        method: 'post',
        url: "http://localhost:4000/verifyCode",
        data: {
            "token":this.token,
            "code":code
        }
      });
      console.log(res)
      if(res.data.mes=="SUCCESS"){
        this.token=res.data.token
        //sessionStorage.setItem('token',this.token)
        console.log(this.token)
        $cookies.set('token',this.token)
       
        return true
      }
      else{
        console.log("nop")
        return false
      }
    }
  }
})

export const dishStore = defineStore('dishes',{

  state: ()=>({
    dishes:getSessionStorage('dishes',[]),
    lunch:getSessionStorage('lunch',[]),
    inactiveDishes:getSessionStorage('inactiveDishes',[]),
    activeDishes:getSessionStorage('activeDishes',[]),
  }),
  actions: {
    async getDishes(){
        
        this.lunch=[]
        let res = await axios.get("http://localhost:4000/getDishes",{
            headers:{
                "id":"blop"
            }
        });
        //console.log(res.data)
        this.dishes=[]
        if(res.data!="not logged in"){
            res.data.forEach(element => {
                this.dishes.push(element)
                this.dishes.sort(sortItems)

            });
            this.getLunch()
            this.getInactives()
            this.getActives()
            //console.log(this.dishes);
            sessionStorage.setItem('dishes', JSON.stringify(this.dishes))
        }
    },
    async getInactives(){
      let arr = toRaw(this.dishes)
      //console.log("arr",arr)
      if(arr.length!=0){
        this.inactiveDishes=[]
        arr.forEach(el=>{
          if(!el.active){
            this.inactiveDishes.push(el)
          }
        })
        this.inactiveDishes.sort(sortItems)
        sessionStorage.setItem('inactiveDishes', JSON.stringify(this.inactiveDishes))
        
        //console.log("inactiveDishes",this.inactiveDishes)
      }
      else this.inactiveDishes="Loading..."
    },
    async getActives(){
      let arr = toRaw(this.dishes)
      //console.log("arr",arr)
      if(arr.length!=0){
        this.activeDishes=[]
        arr.forEach(el=>{
          if(el.active){
            this.activeDishes.push(el)
          }
        })
        this.activeDishes.sort(sortItems)
        sessionStorage.setItem('activeDishes', JSON.stringify(this.activeDishes))
        
        //console.log("activeDishes",this.activeDishes)
      }
      else this.activeDishes="Loading..."
    },
    async getLunch(){
      
      let arr = toRaw(this.dishes)
      if(arr.length!=0){
        this.lunch=[]
        arr.forEach(el=>{
          if(el.category_id==1){
            this.lunch.push(el)
          }
        })
        this.lunch.sort(sortLunch)
        sessionStorage.setItem('lunch', JSON.stringify(this.lunch))
        
        //console.log(this.lunch)
      }
      else this.lunch="Loading..."
    },
    getDish(id){
      return this.dishes.find((dish)=>dish.id==id)
    },
    async editDish(dish){
      const res = await axios({
        method: 'put',
        url: "http://localhost:4000/updateDish/"+dish.id,
        headers:{
          "id": "nothing"
        },
        data: {
          "title":dish.title,
          "description":dish.description,
          "gluten":dish.gluten,
          "lactos":dish.lactos,
          "veg":dish.veg,
          "active":dish.active,
          "price":dish.price,
          "category_id":dish.category_id,
          "number":dish.number
        }
      });
      //console.log("RESPONSE",res)
      this.dishes=res.data.dishes
      sessionStorage.setItem('dishes', JSON.stringify(this.dishes))
    },
  }


})

export const categoryStore = defineStore('categories',{

  state: ()=>({
    categories:getSessionStorage('categories',[])

  }),
  actions: {
    async getCategories(){
        this.categories=[]
        let res = await axios.get("http://localhost:4000/getCategories",{
            headers:{
                "id":"blop"
            }
        });
        //console.log(res.data)
        if(res.data!="not logged in"){
            res.data.forEach(element => {
                this.categories.push(element)
            });
            //console.log(this.categories);
            sessionStorage.setItem('categories', JSON.stringify(this.categories))
        }
    },
    getCategoryTitle(id){
      return this.categories.find((category)=>category.id==id)
    },
    removeOneCategory(id){
      return this.categories.filter((category)=>category.id!=id)
    }
  }
})

export const drinkStore = defineStore('drinks',{

  state: ()=>({
    drinks:getSessionStorage('drinks',[]),
    inactiveDrinks:getSessionStorage('inactiveDrinks',[]),
    activeDrinks:getSessionStorage('activeDrinks',[])

  }),
  actions: {
    async getDrinks(){
        this.drinks=[]
        let res = await axios.get("http://localhost:4000/getDrinks",{
            headers:{
                "id":"blop"
            }
        });
        //console.log(res.data)
        if(res.data!="not logged in"){
            res.data.forEach(element => {
                this.drinks.push(element)
            });
            this.getActives()
            this.getInactives()
            //console.log(this.drinks);
            sessionStorage.setItem('drinks', JSON.stringify(this.drinks))
        }
    },
    async getActives(){
      let arr = toRaw(this.drinks)
      //console.log("arr",arr)
      if(arr.length!=0){
        this.activeDrinks=[]
        arr.forEach(el=>{
          if(el.active){
            this.activeDrinks.push(el)
          }
        })
        this.activeDrinks.sort(sortItems)
        sessionStorage.setItem('activeDrinks', JSON.stringify(this.activeDrinks))
        
        //console.log("activeDrinks",this.activeDrinks)
      }
      else this.activeDrinks="Loading..."
    },
    async getInactives(){
      let arr = toRaw(this.drinks)
      //console.log("arr",arr)
      if(arr.length!=0){
        this.inactiveDrinks=[]
        arr.forEach(el=>{
          if(!el.active){
            this.inactiveDrinks.push(el)
          }
        })
        this.inactiveDrinks.sort(sortItems)
        sessionStorage.setItem('inactiveDrinks', JSON.stringify(this.inactiveDrinks))
        
        //console.log("inactiveDrinks",this.inactiveDrinks)
      }
      else this.inactiveDrinks="Loading..."
    },
    getDrink(id){
      return this.drinks.find((drink)=>drink.id==id)
    },
    async editDrink(drink){
      const res = await axios({
        method: 'put',
        url: "http://localhost:4000/updateDrink/"+drink.id,
        headers:{
          "id": "nothing"
        },
        data: {
          "title":drink.title,
          "description":drink.description,
          "alcohol":drink.alcohol,
          "active":drink.active,
          "price":drink.price,
          "volume":drink.volume
          
        }
      });
      console.log("RESPONSE",res)
      this.drinks=res.data.drinks
      sessionStorage.setItem('drinks', JSON.stringify(this.drinks))
    },
  }
})

export const infoStore = defineStore('info',{

  state: ()=>({
    info:getSessionStorage('info',[]),
    address:getSessionStorage('address',[]),
    name:"",
    lunchTime:""
  }),
  actions: {
    async getInfo(){
        

        let res = await axios.get("http://localhost:4000/getInfo",{
            headers:{
                "id":"blop"
            }
        });
        //console.log(res.data)
        if(res.data!="not logged in"){
          let arr = toRaw(res.data)
          this.info=[]
          //console.log(arr)
            arr.info.forEach(element => {
                this.info.push(element)
            });
            this.getAddress()
            this.getName()
            this.getLunchTime()
            //console.log(this.info[0]);
            sessionStorage.setItem('info', JSON.stringify(this.info))
        }
    },
    async getName(){
      let arr = toRaw(this.info)
      if(arr.length!=0){
        this.name = arr[0].name
        //console.log(this.name)
      }
      else this.name="Loading..."
    },
    async getAddress(){
      this.address.push(JSON.parse(this.info[0].address))
      sessionStorage.setItem('address',JSON.stringify(this.address))
      //console.log(this.address)
    },
    async getLunchTime(){
      let arr = toRaw(this.info)
      if(arr.length!=0){
        this.lunchTime = arr[0].lunch_time
        //console.log(this.lunchTime)
      }
      else this.name="Loading..."
    }
  }
})


export const menuBool = defineStore('menuBool',{
  state: ()=>({
    menu: getLocalStorage('menu'),
    menuClicked:getLocalStorageString('menuClicked'),
    drinkClicked:getLocalStorageString('drinkClicked')
  }),
  actions:{
    menuUpdate(value){
      this.menu=value
      localStorage.setItem('menu',JSON.parse(value))
      if(value){
        this.menuClicked="bg-green-400"
        this.drinkClicked=""
        localStorage.setItem('menuClicked',this.menuClicked)
        localStorage.setItem('drinkClicked',this.drinkClicked)
      }
      else {
        this.drinkClicked="bg-red-500"
        this.menuClicked=""
        localStorage.setItem('menuClicked',this.menuClicked)
        localStorage.setItem('drinkClicked',this.drinkClicked)
      }
      console.log(this.menu)
    }
  }
})

export const pictureStorage = defineStore('pictures',{

  state: ()=>({
    pictures:getSessionStorage('pictures',[])

  }),
  actions: {
    async getPictures(){
        this.pictures=[]
        let res = await axios.get("http://localhost:4000/slideShowPictures",{
            headers:{
                "id":"blop"
            }
        });
        //console.log(res.data)
        if(res.data!="not logged in"){
          let frog=0
            res.data.forEach(element => {
                element.count = frog
                frog++;
                this.pictures.push(element)
            });
            frog=0
            //console.log(this.pictures);
            sessionStorage.setItem('pictures', JSON.stringify(this.pictures))
        }
    }
  }
})