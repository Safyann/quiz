<div align="center">
  <h1>
    <img src="./public/logo.png" alt="Логотип приложения" width="100" height="80">
  </h1>
</div>

# Приложение

Это Frontend приложение. Оно создано с использованием фреймворка [React](https://react.dev/) для создания современных веб-приложений.

![Скриншоты приложения](./docs/screenshot.png)

## Оглавление

- [Техническая документация](#оглавление)

  - [Предварительные требования](#💻-предварительные-требования)
  - [Начало работы](#🚀-начало-работы)
  - [Переменные](#💡-переменные)
  - [Разработка](#💻-разработка)
  - [Сборка и развертывание](#🏗️-сборка-и-развертывание)

## 💻 Предварительные требования

Проверьте, что на вашем компьютере установлены следующие компоненты:

- Node.js (версия 20.x)
- yarn

## 🚀 Начало работы

1. Клонируйте этот репозиторий на ваш компьютер с помощью следующей команды:

```bash
$ git clone ...
```

2. Перейдите в директорию проекта:

```bash
$ cd ...
```

3. Установите зависимости:

```bash
$ yarn install
```

## 💡 Переменные

Перед началом разработки, вам может потребоваться установить некоторые переменные окружения.

В проекте используются следующие переменные:

| Переменная     | Описание         | Пример                         |
| -------------- | ---------------- | ------------------------------ |
| `VITE_API_URL` | URL backend API. | `http://localhost:5010/api/v1` |
| `VITE_PORT`    | Порт приложения  | `3000`                         |

### `VITE_API_URL`

Данная переменная определяет адрес, по которому приложение будет обращаться к backend-серверу. В данном случае, указан адрес `http://localhost:5010/api/v1`. Вы можете изменить значение переменной, если ваш backend находится по другому адресу.

Убедитесь, что вы правильно настроили значения этих переменных в соответствии с вашими потребностями и конфигурацией проекта.

## 💻 Разработка

Скопируйте dev переменные

```bash
$ cp .env.development .env
```

Для запуска приложения в режиме разработки используйте следующую команду:

```bash
$ yarn dev
```

## Линтинг

Для обеспечения качества кода и коммитов в проект добавлены линтеры:

- [ESLint](https://eslint.org/) — качество JavaScript/TypeScript кода;
- [Commitlint](https://commitlint.js.org/) — качество и консистентность коммитов. В качестве конфига используется стандартный конфиг [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional);
- [Husky](https://typicode.github.io/husky/) — линтинг кода перед коммитом.
- [Stylelint](https://stylelint.io/) — качество SCSS/CSS кода.

Чтобы запустить линтинг проекта, достаточно ввести команду:

```shell
yarn lint
```

## Форматирование

Для обеспечения качества кода и коммитов в проект добавлены линтеры:

- [Prettier](https://prettier.io/docs/en/) — форматер кода;

Чтобы запустить форматирование проекта, достаточно ввести команду:

```shell
yarn format
```

## 🏗️ Сборка и развертывание

Для сборки приложения для продакшн используйте следующую команду:

```bash
$ yarn build
```

Чтобы развернуть приложение, вам нужна будет VDS где будут установлены все зависимости и запустите порядок команд:

```bash
$ yarn install
$ yarn build
```

## 🗂️ Структура

```
📁 src                           # Размещаются файлы приложения
├── 📁 app                       # Инициализирующая логика приложения
|    ├── 📄index.tsx             # Энтрипоинт для подключения приложения (бывший App.tsx)
|    └── 📄index.css             # Глобальные стили приложения
├── 📁 entities                  #
├── 📁 features                  #
├── 📁 pages                     # Страницы вашего приложения
├── 📁 widgets                   #
└── 📁 shared                    # Переиспользуемые компоненты / хуки / функции
|  ├── 📁 api                    # Запросы к беку
|  ├── 📁 assets                 # Общие ресурсы (стили, иконки)
|  ├── 📁 config                 # Найстроки проекта
|  ├── 📁 consts                 # Постоянные переменные
|  ├── 📁 lib                    # Вспомогательные функции
|  ├── 📁 types                  # Типы и интерфейсы
|  ├── 📁 ui                     # UI компоненты
└── index.tsx                    # Подключение и рендеринг приложения
📄 package.json                  # Файл с метаданными и зависимостями проекта
📄 README.md                     # Файл с описанием проекта
📄 yarn.lock                     # Файл, автоматически создаваемый при установке пакетов с помощью Yarn
```
