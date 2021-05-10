class Mkulima{
    constructor(product,vendor,farm){
    this.product=[];
    this.farm=[];
    this.orders=[];
    this.price=[];
    
}
addFarm(farmId,farmName,phoneNumber,address,farmer){
    var human={
        farmId:farmId,
        farmName:farmName,
        farmer:farmer,
        phoneNumber:phoneNumber,
        address:address,

    }
    this.farm.push(human);
    return this.farm
}
removefarm(farmId){
    let newTitle=this.farm.find(newTitle=>newTitle.farmId==farmId)
    return delete this.farm[newTitle]
}
updateFarm(farmId,farmName,farmer,phoneNumber,address){
    let myFarm=this.farm.find(myFarm=>myFarm.newTitle.farmId==farmId)
    myfarm={
        farmId:farmId,
        farmName:farmName,
        farmer:farmer,
        phoneNumber:phoneNumber,
        address:address,
    }
    return myFarm
}
updateProduct(productId,farmName,price){
    var update=this.product.find(update=>update.productId)
    var update={
        productId:productId,
        farmName:farmName,
        price:price

    }
    return update
}
getFarm(farmId){
    let farms=this.farm.find(farms=>farms==farmId)
    return farms
}
printProduct(){
    for(let items of this.price){
        console.log(items.farmName+","+items.price)
    }
    calculateOrderPrice(productId,quantity)
    var cost=productId*quantity
    return cost
}
}
let humanBeing=new Mkulima(([],[],[]))
console.log(humanBeing.addFarm(657890,"Solio","Aluel",78651609,54434))
console.log(humanBeing.addFarm(45321,"Tebeera","Iman",798008326,67899))
console.log(humanBeing.addFarm(787647,"mbeere","Sophy",787632140,54322))
console.log(humanBeing.removefarm(32134,"pekera","Mercy",769166468,243215))
console.log(humanBeing.updateFarm(53446,"Misoi","Aturo",798008320,334567))
console.log(humanBeing.getFarm(43445,"Jungle","JMD",768651610,098877))
console.log(humanBeing.addProduct(76477,"Fortnum","Acholi",789123456,32133))
console.log(humanBeing.removeProduct(5346,"Sera","Jidada",765234512,10984))
console.log(humanBeing.updateProduct(56374,"Deng","John",768762345,233455))
console.log(humanBeing.getProduct(54342,"Chol","Anai",765680916,23457,))
humanBeing.printProduct()
console.log(humanBeing.farm(6747858))



