



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Django Vite Boilerplate</h3>
  <p align="center">
    Integrate your vite project with django.
  </p>
</p>

### Integerate with
* React
* React-ts
* Vue
* Vue-ts
* Svelte
* Svelte-ts

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites for django

* Setup django environment
  ```sh
  python3 -m venv env
  source env/bin/activate
  pip3 install -r requirements.txt
  ```

### Example: Run react in dev mode with django

* Start django
  ```sh
  cp ./backend/.env.example ./backend/.env
  python3 ./backend/manage.py runserver
  ```

* Install react & copy react base temaple to django templates path.
  ```sh
  cp ./frontend/react/base.html ./backend/templates/base.html
  npm install --prefix ./frontend/react
  ```
* Run in dev mode
  ```sh
  npm run dev --prefix ./frontend/react
  ```

### Example: Run in prodcution mode

1. Change DEBUG mode to False in backend/.env

* Build react project
  ```sh
  npm run build --prefix ./frontend/react
  ```

* Build 
  ```sh
  python3 ./backend/manage.py collectstatic
  # Restart django
  python3 ./backend/manage.py runserver
  ```
