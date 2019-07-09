# Disaster Cure
Name: Raju Dangol

CollegeID: 160362

StudentID: 9637320

Batch: Jan19D

Disaster Cure will be a web application to effectively deal with issues that arise after the occurrence of natural disasters. Natural disasters can’t be stopped. Disaster Cure aims to organize and counter the after effects of a disaster. Even if the disasters can’t be stopped their effects can be limited. As for the support in terms of website use, help will be provided to people who can’t properly use the application with the help of proper redirection. User queries will be answered and the reports for bugs will be dealt as quickly as possible. The web application will run on almost any browsers but modern and latest versions will be preferred over others.

## List of Main Features

• Disaster Information
  The web application will have information on the latest disasters as well as the biggest disasters. It will have information on how many    were affected, the cause of the disaster, how was the treatment etc. People will be able to view the information from different            perspectives.
  
• Facility to ask help for the effected
  The people affected from the disaster can ask post the situation of the place affected. They can post for the help and facilities they     are lacking. Basically, it provides, better communication between affected people and the parties involved. It also provides               transparency among people and responsible organizations so that there is no opportunity for mistake.
  
• Collaboration among helpers
  The disaster affected people require and expect help. Some helpers and nonprofit organizations conduct programs to help the affected.     These people will need a medium to communicate with other such people who want to help as well. Disaster Cure will provide them the       platform to communicate and collaborate.
  
• Collaboration among the effected
  Collaboration among the affected people is also equally important. Until external help arrives, they can help each other. Some may have   the required food which others lack. Some may have shelter that others don’t have. If these things can be shared and viewed it will be a    lot easier to control the after effects.

## API Documentation
Some of the crucial api endpoints and thier sample response are provided below:

## LOGIN
```
http://localhost:3000/auth/login?email=ab_de@gmail.com&password=password
```
## Response
```
{
    "success": true,
    "message": "Authentication successful!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiX2RlQGdtYWlsLmNvbSIsImlhdCI6MTU2MjY1MjcyOSwiZXhwIjoxNTYyNzM5MTI5fQ.RvddJu3wvoZbPbn8T3G-YH_Si0Q0MKR2FCqoHyTn7tY",
    "user": [
        {
            "_id": "5d20d33686db7e3c40a4bb1d",
            "firstName": "TestName",
            "lastName": "TestLastName",
            "password": "password",
            "email": "ab_de@gmail.com",
            "age": 40,
            "createdAt": "2019-07-06T16:58:30.724Z",
            "updatedAt": "2019-07-09T03:06:32.025Z",
            "__v": 0,
            "photo": "photo1562641592000.jpg"
        }
    ]
}
```

## REGISTER
```
http://localhost:3000/auth/register
```

## Body

```
{
	"firstName": "Chris",
	"lastName": "Cornell",
	"password": "chris1",
	"email": "chris_cornell@gmail.com",
	"age": 45
}
```

## Response
```
{
    "success": true,
    "message": "Registration successful!",
    "user": {
        "_id": "5d243c8f8ff0e93880816387",
        "firstName": "Chris",
        "lastName": "Cornell",
        "password": "chris1",
        "email": "chris_cornell@gmail.com",
        "age": 45,
        "createdAt": "2019-07-09T07:04:47.430Z",
        "updatedAt": "2019-07-09T07:04:47.430Z",
        "__v": 0
    }
}
```

## GET ALL DISASTERS
```
http://localhost:3000/disasters
```
## Response
```
[
    {
        "images": [
            "Indonesia-1.jpg",
            "Indonesia-1.jpg"
        ],
        "_id": "5d10feac28ef152f2c32db43",
        "title": "AIndonesia earthquakes and tsunami",
        "description": "More than 400 people are reported dead after a tsunami struck western Java and southern Sumatra islands during the evening of Dec. 22. Indonesia’s geological and weather service says the tsunami was likely caused by undersea landslides in the Sunda Strait following an eruption by the Anak Krakatoa volcano. World Vision, which is simultaneously responding to earthquakes on Lombok island and Central Sulawesi, is assisting children and families in some of the worst-affected areas of Serang and Pandeglang districts on the west coast of Java’s Banten province.",
        "injury_count": 300,
        "death_count": 110,
        "location": "Indonesia",
        "latitude": 27.233,
        "longitude": 85.33,
        "createdAt": "2019-06-24T16:47:40.817Z",
        "updatedAt": "2019-06-24T16:47:40.817Z",
        "occurance_date": "2019-05-24T16:47:40.817Z",
        "__v": 0
    }
]
```

## UPDATE HELP
```
http://localhost:3000/helps/update
```

## Body
```
{
	"id": "5d21a094ad076744dc1a8d76",
  "helped_units" : "1"
}
```
## Response
```
{
    "_id": "5d237b29f01f4a369c062d26",
    "request_id": "5d08cd4066445d3bdc8e4546",
    "helped_units": 1,
    "helped_by": "5d08cc1566445d3bdc8e4541",
    "help_date": "2019-06-18T11:33:41.857Z",
    "help_title": "Help Title 1",
    "pending": false,
    "help_worth": 10,
    "createdAt": "2019-07-08T17:19:37.076Z",
    "updatedAt": "2019-07-09T07:09:53.102Z",
    "__v": 0
}
```

## DELETE HELP
```
http://localhost:3000/helps/delete
```

## Body
```
{
	"id": "5d21a094ad076744dc1a8d76"
}
```
## Response
```
{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}
```
