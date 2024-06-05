# Como utilizar:

### Após clonar o repositório, instale as dependências com:
`yarn` ou `npm i`

### Crie seu arquivo de variáveis ambientes (.env) seguindo o exemplo.

### 'Suba' seu banco de dados (postgres).

### Execute os comandos em sequência:
`yarn migration:run` ou `npm run migration:run`

`yarn build` ou `npm run build`

`yarn start` ou `npm run start`

### Agora você já deve estar apto a utilizar a API 😁

<br/>

# Endpoints:

## Autencicação:

### Registrar (/register) POST:
Payload:
 ```json
  {
	  "name": "Name",
	  "username": "Username",
	  "email": "Email",
	  "password": "Password"
  }
 ```

Response: 
```json
  {
    "status": "ok",
    "user": {
      "id": "User ID",
      "name": "Name",
      "username": "Username",
      "email": "Email"
    }
  } 
```
---

### Entrar (/login) POST:

Payload:
 ```json
  {
	  "email": "email",
	  "password": "Password"
  }
 ```

Response: 
```json
  {
    "token": "JWT Token",
    "user": {
      "id": 56301765,
      "name": "Name",
      "username": "Username",
      "email": "Email"
    }
  } 
```


## Chats:

### Criar chat (/chat/create) POST:
Payload:
 ```json
  {
	  "userSender": "User that created chat",
	  "userReceiver": "User who was added to the chat"
  }
 ```

Response: 
```json
  {
    "id": "Chat ID",
    "userSender": "User that created chat",
	  "userReceiver": "User who was added to the chat"
  }
```

---

### Listar chats (/chat/list/:username) GET:
Payload: `username in request param (:username)`

Response:
```json
  [ 
    {
      "id": "Chat ID",
      "user": {
        "id": "User ID",
        "name": "Name",
        "username": "Username",
        "email": "Email"
      }
    },
       {
      "id": "Chat ID",
      "user": {
        "id": "User ID",
        "name": "Name",
        "username": "Username",
        "email": "Email"
      }
    }
  ]
```

---

### Deletar um chat (/chat/delete/:chatId) DELETE:
Payload: `chatId in request param (:chatId)`

Response: 
```json
  {
    "message": "Delete successfully"
  }
```

## Usuários:

### Listar usuários (/users/:username) GET:
Payload: `username in request param (:username)`

Response:
```json
    [
     {
      "id": "User ID",
      "name": "Name",
      "username": "Username",
      "email": "Email"
     }, 
     {
      "id": "User ID",
      "name": "Name",
      "username": "Username",
      "email": "Email"
     },  
    ]
```

## Mensagens

### Listar mensagens do chat (/messages/list/:chatId) GET:
Payload: `chatId in request param (:chatId)`

Response:
```json
  {
    "messages": [
      {
        "id": "Message ID",
        "content": "Message content",
        "time": "When message send",
        "chatId": "Chat ID",
        "sender": "User that send it"
      },
      {
        "id": "Message ID",
        "content": "Message content",
        "time": "When message send",
        "chatId": "Chat ID",
        "sender": "User that send it"
      }
    ]
  }
```

### Pegar última mensagem enviada no chat (/messages/getlast/:chatId) GET:
Payload: `chatId in request param (:chatId)`

Response: 
```json
  [
	  {
        "id": "Message ID",
        "content": "Message content",
        "time": "When message send",
        "chatId": "Chat ID",
        "sender": "User that send it"
	  }
]
```

---

### Apagar todas mensagens do chat (/messages/delete/:chatId) DELETE;
Payload: `chatId in request param (:chatId)`

Response: 
```json
  {
    "message": "Delete successfully"
  }
```

---
<br/>

Sujeito à possíveis alterações, obrigado por sua atenção ❤️
