let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },{
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },
      {
      "color": "green",
      "type": "cabrio",
      "registration": new Date('2016-05-02'),
      "capacity": 2
      },{
        "color": "orange",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },{
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },{
        "color": "white",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },{
        "color": "green",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },{
        "color": "red",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      },{
        "color": "blue",
        "type": "cabrio",
        "registration": new Date('2016-05-02'),
        "capacity": 2
      }
    ]
console.log('--------------')

//#2

function carFilter(cars){
    let redCars = cars.filter(car => car.color === "red");//#4
        return redCars;
}
console.log(carFilter(cars))//#3

console.log('--------------')

//#5
let redCars = cars.filter(car => car.color === "red" || car.color === "green");
console.log(redCars)