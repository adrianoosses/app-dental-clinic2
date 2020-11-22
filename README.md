# DENTAL CLINIC APP
Front of app aimed at management of dental appointments by admins or clients.
## TABLE OF CONTENTS
1. [ SET UP ](#inst) :point_left:
2. [ DATABASE ](#be) :point_left:
3. [ RUN ](#run) :point_left:
4. [ TECHNOLOGIES USED ](#tech) :point_left:
5. [ AUTHOR ](#author) :point_left:

<a name="inst"></a>
## SET UP

### Project set up
- Option 1: Heroku: https://app-dental-clinic-front.herokuapp.com/ <br>
- Option 2: GitHub Pages: https://adrianoosses.github.io/app-dental-clinic2/ <br>
- Option 3: Download the project from this GitHub.

<a name="be"></a>
## BACKEND
https://github.com/adrianoosses/appDentalClinic.git

<a name="run"></a>
## RUN
### Run server
Execute in terminal:
```
npm run start
```
### Test
App allows an user makes actions. This user can be admin doctor or patient. In some cases, user have to log in before (auth) or being admin. These actions are endpoint, and they are summarized below: 
### Buttons
| TEXT| DESCRIPTION|EXAMPLE| ADMIN |
| ----- | ---- | ---- | ---- | 
| Login | Log in an user writing email and password | email: filemon@tia.com, password: 12345678 | |
| Register | Sign up new user | history id = 1 | |
| Get appointments | Show all appointments of all users |  | x |
| Get my appointments | Show all appointments of one user |  | |
| Home| Return to main page |  | |
| Logout | log out from application | | |


<a name="tech"></a>
## TECHNOLOGIES USED
- JS/ES6
- React
- JWT

<a name="author"></a>
## AUTHOR
Adriano Osses

