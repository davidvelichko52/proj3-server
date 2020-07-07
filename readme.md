

# Models:
#### Faves model
- user id
- post id

#### Post model 
##### comment
- content
##### post
- pic
- content 
- caption 
- comments
-user

#### User model
- email 
- phone
- bday
- password
- pic
- admin

# Routes 

**in controllers/auth.js**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| POST  | `/auth/login` | find and validate user; send token |
| POST  | `/auth/signup` | create user; generate token |



**in controllers/faves.js /**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| POST  | `/faves` | adding to faves |
| get  | `/user/:userId` | getting fom faves |
| delete  | `/:id` | deleting from faves |


**in controllers/posts.js /**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| get  | `/` | get posts |
| post  | `/new` | adding new post |
| get  | `more/:id` | get individual post |
| post  | `/more/:id` | adding a comment |
| get | `/editd` | getting for edit page |
| put | `/edit/:id` | updating post |
| delete | `/:id` | deleting post |

**in controllers/profile.js /**

| Method | path | purpose |
| ----| ------------------------- | --------------- |
| get  | `/` | get profile |
| put  | `/:id` | edditing profile  |
| delete  | `:id` | deleting profile |

## Directions For Use

### 1. Clone the repository, but with a diffrent name

Run on the terminal

```sh
git clone <repo_link> <new_name>
```
**For example**

```sh
git clone git@github.com:davidvelichko52/node-auth-boiler-1.git shiny-new-project
```

### 2. Install the modules from package.json

```sh
npm i
```
