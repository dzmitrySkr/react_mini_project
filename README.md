# NewApp

React-приложение, собранное с использованием **Webpack 5**, **Babel** и **React Router**.
Деплой: https://iproject2.netlify.app/

---

##  Стек технологий
- React
- React Router DOM
- Redux Toolkit
- Webpack 5
- Babel
- Chart.js
- Google Maps API

---

##  Структура проекта
```
src/
 ├─ app/
 ├─ components/
 ├─ store/
 ├─ images/
 ├─ index.jsx
 └─ App.jsx
public/
 └─ index.html
webpack.config.js
package.json
```
---

## ⚙️ Установка и запуск

### 1️ Клонирование репозитория
```bash
git clone <URL_репозитория>
cd newapp
```

### 2️ Установка зависимостей
```bash
npm install
```

### 3️ Запуск в режиме разработки
```bash
npm start
```

Приложение будет доступно по адресу:  
http://localhost:8080

---

##  Production-сборка
```bash
npm run build
```

После сборки появится папка:
```
dist/
```

---

##  Деплой на Netlify

### Настройки проекта
- Base directory: *(пусто)*
- Build command: `npm run build`
- Publish directory: `dist`

### netlify.toml
Приложение будет доступно по адресу:
https://iproject2.netlify.app/

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

##  Переменные окружения
```env
REACT_APP_GOOGLE_MAPS_KEY=your_api_key_here
```

Добавь переменную:
- локально — в `.env`
- на Netlify — Site settings → Environment variables

---

##  Возможные проблемы

### Module not found
Проверь:
- совпадение путей импортов
- регистр имён файлов (Linux чувствителен к регистру)

---

##  Скрипты
- `npm start` — запуск dev-сервера
- `npm run build` — production-сборка

---

## 📄 Лицензия
ISC
