[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12026805&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

Object: My car.
This object has these properties:
- brand: {
name: "Xpeng", (string) The manufacturer of the car
model: "G3" (string) The car model
},
- type: "electrical", (string) The car type
- rangekm: 440, (number) The cars range in kilometeres
- battery: [
{percentage: 0}, (number) Battery 0%
{percentage: 25}, (number) Battery 25%
{percentage: 50}, (number) Battery 50%
{percentage: 75}, (number) Battery 75%
{percentage: 100}], (number) Battery 100%
- currentstatus: "Not charging", (string) The car charging status
- color: "black", (string) The color of the car
- charging: false, (boolean) Is the car charging or not

You can start and stop charging the car. Pressing the "Charge car" button will start the charging. Pressing the "Stop charging" button will stop the charging.
The current status is logged in the console and you will see the staus on the screen. Both in text, and by the color of the buttons and the charging bolt symbol.
If you change the car.charging boolean in one or both functions you will recieve errors on screen and in the console.

Side note: I wanted the battery procentage to be logged in the console while charging with a delay. I did manage to get that working, but not to make the charging delay function stop if you pressed stop charging button. I also tried to get my .current-status to update in HTML simultaneously(to the percentage shown in the console) but I am not there yet. I kept most of the code, but commented it out, as I want to go back to it when I am more experienced.
