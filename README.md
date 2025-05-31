That's a basic RESTfull API on express written in TypeScript for a todo List

## Endpoints

### GET /items

Will return you all in memory items from the todo list in the an ARRAY of

Objects with structure :

```json 
{
  "name": "API with Basic Validation and Error Handling",
  "task": "create API with Basic Validation and Error Handling",
  "finished": false,
  "id": 1748681171965
}
```

### POST item

On this route you can post a new TODO task
in such JSON format:

```json 
{
    "name": "The task name goes there",
    "task": "The task descrption goes there",
    "finished": true
}
```

the ```"finished": true``` is optional if you dont provide anythink it sets it to false by default.