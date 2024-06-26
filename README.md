# Приложение для управления пользователями

Это простое React-приложение для управления списком пользователей. Вы можете добавлять, редактировать и удалять пользователей, а список пользователей разбит на страницы.

## Возможности

- Получение пользователей из API
- Добавление новых пользователей
- Редактирование существующих пользователей
- Удаление пользователей
- Пагинация

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/yourusername/user-management-app.git
cd user-management-app
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm start
```

## Запуск тестов
Чтобы запустить тесты, используйте следующую команду:

```bash
npm test
```

## Структура проекта

```lua
my-app/
├── src/
│   ├── components/
│   │   ├── UserList.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   ├── Pagination.jsx
│   ├── hooks/
│   │   └── useUsers.js
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── UserListStyles.js
│   ├── tests/
│   │   ├── UserList.test.js
│   ├── App.js
│   ├── index.js
├── babel.config.js
├── jest.config.js
├── package.json
└── README.md
```

## Зависимости
- React
- Styled-components
- Axios
- Jest
- @testing-library/react
- Babel