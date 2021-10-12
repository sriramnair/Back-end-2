
//const { getAllMovies } = require('../../back-end-2-demo/server/controller')
const houses = require('./db.json')
let globalID = 4

module.exports = {
    getAllHouses : (req, res) => {
        res.status(200).send(houses)
   },
    deleteHouse : (req, res) => {
        const{id} = req.params
        let index = houses.findIndex((elem) => elem.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
   },

   createHouse : (req, res) => {
    
    const {address, price, imageURL} = req.body
    console.log(req.body)

    const NewHouse = {
        address,
        price: +price,
        imageURL,
        id: globalID 
    }

    houses.push(NewHouse)
    console.log(houses)
    res.status(200).send(houses)
    globalID++
   },

   updateHouse : (req, res) => {
       const {id} = req.params
       const {type} = req.body

       let index = houses.findIndex((elem) => +elem.id === +id)

      if (type === 'plus'){
           houses[index].price += 10000
           res.status(200).send(houses)

       }else if(houses[index].price < 10000 && type === 'minus'){
        res.status(400).send('The price can not go below 0')

       }else if (type === 'minus'){
        houses[index].price -= 10000
        res.status(200).send(houses)
    } 
   }
  

}