db = db.getSiblingDB("animal_db");
db.animal_tb.drop();

db.animal_tb.insertMany([
    {
        "id": 1,
        "name": "Shayan Faisal",
        "type": "CS A"
    },
    {
        "id": 2,
        "name": "Naik Ur Rehman",
        "type": "CS A"
    },
    {
        "id": 3,
        "name": "Sir Hammad Majeed",
        "type": "Instrucotr"
    },
]);
