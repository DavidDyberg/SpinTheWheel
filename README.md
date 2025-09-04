# Sales reward spinner

### Assignment
The salesperson should be able to view the number of available spins, perform a spin, and see the history of previous spins.

There must be an endpoint on the backend as described below, to simulate an incoming order.
This endpoint is responsible for assigning a spin to the corresponding user.
```
POST /order {
  order_id: string,
  user_id: string,
  created_at: string
}
```
The technical requirement is to use TypeScript and Node.js.
For the frontend, you may use any framework you prefer or vanilla JavaScript.
On the backend, you're free to use any framework and any database.

### Solution
We are going with a set of five rewards, which the company will be able to dynamically be able to choose rewards. We have set different probabilities for each slot.  
![probability vs outcome table](image-1.png)  
So when the user spins the wheel the code randomly chooses a number, the reward in the slot that the number belongs to will be saved into the users rewards list. 

## Tech
Fastify, Typescript, Node.js, MongoDB

## ER diagram 
![er diagram](image-3.png)


## Endpoints

GET '/users'  
_returns all users_  
  
GET '/users/:user_id  
_returns a user_  
  
POST '/user?user_id=_user_id'
_creates order and increments users spins with 1_  
  
GET '/users/:user_id/rewards  
_returns all rewards for a user_  
  
GET 'users/:user_id/spin  
_creates a new reward with the users id attached and users spins decrements with 1_  


### Response examples
- ```message```: A message with users data
    + ```id```: employees id
    + ```name```: employees name
    + ```spins```: employees total of unused spins
    + ```created_at```: date of creation
      
- ```message```: A message with rewards data
    + ```user_id```: users id
    + ```user_name```: users name
    + ```rewards_count```: count of rewards for user
    + ```rewards```: array of rewards
        + ```id```: rewards id
        + ```user_id```: users id
        + ```title```: name of reward
        + ```user_id```: id of the employee who received the reward
        + ```delivered```: True/false if reward has been delivered to employee
        + ```created_at```: date of creation

### Examples
POST '/user?user_id=_user_id'  
```
{
    message: "New order succesful. Order 68b56cea9ea3bfbe378428f9 has granted Jonas with 1 spin!",
}
```  
  
GET '/users/:user_id/spin
```
{
	"message": "You won a Bali resa!"
}

```  
GET '/users/:user_id/rewards  
```
{
	"user_id": "68b56cea9ea3bfbe378428f9",
	"user_name": "Jonas",
	"rewards_count": 1,
	"rewards": [
		{
			"_id": "68b813ec7b573ede07f377b2",
			"user_id": "68b56cea9ea3bfbe378428f9",
			"title": "Test Reward - Free Coffee",
			"delivered": false,
			"created_at": "2024-01-15T10:30:00.000Z"
		}
	]
}  
``` 

## Status codes
```200 OK```: Request succesful  
```201 Created```: Order created  
```400 Bad request```: Malformed or missing parameters  
```404 Not found```: Page not found  
```500 Internal Server Error```: User or order not found  


## Team
<img src="https://avatars.githubusercontent.com/u/117070056?v=4" width="50" height="50">   <img src="https://avatars.githubusercontent.com/u/180587803?v=4" width="50" height="50">  <img src="https://avatars.githubusercontent.com/u/180266163?v=4" width="50" height="50">   
[David](https://github.com/DavidDyberg), [Ida](https://github.com/Chokladglasyr) and [Elias](https://github.com/Elias-Larsson)