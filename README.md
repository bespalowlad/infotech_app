# infotech_app
Приложение для демонстрации двух интерактивных экранов из игры Mortal Combat.

`/ или /home`: при загрузке странице, показывается экран выбора бойца (:arrow_left: :arrow_up_down: :arrow_right:).
При нажатии enter (:arrow_heading_down:) - переход на второй экран

`/scene`: После подтверждения выбранного героя, страница сцены показывается 10 сек. Затем осуществляется переход на начальную страницу. 6 иконок внизу страницы является интерактивными, меняются по нажатию QWERTY

> :warning: на вторую страницу возможен переход только в том случае, если выбран герой

![alt text](https://github.com/bespalowlad/infotech_app/blob/main/screenshots/Screenshot.png)

# Стек
###### Client
- React (Create-React-App)
- Context
- Axios
- Classnames

###### Server
- Express
- Mongoose
- Config.js
- Cors

# Быстрый страт
```
$ git clone https://github.com/bespalowlad/infotech_app
$ cd server
$ yarn install
$ yarn run server
$ cd client
$ yarn install
$ yarn run start
```