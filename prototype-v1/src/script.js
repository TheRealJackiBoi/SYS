import inquirer from 'inquirer'

const questions = [
  {
    type: 'input',
    name: 'email',
    message: "What's your email?",
  },
  {
    type: 'list',
    name: 'resource',
    message: 'Which resource would you like to use?',
    choices: ['Computer 1', 'Auditorium', 'Tv', 'Room 3.C.10'],
  },
  {
    "type": "list",
    "name": "day",
    "message": "What day would you like to book?",
    "choices": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ]
  },
  {
    "type": "list",
    "name": "time",
    "message": "What time would you like to book? 1 hour intervals",
    "choices": [
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00"
    ]
  
  }  
];

inquirer.prompt(questions).then(answers => {

  console.log('Your booking is:');
  console.log(JSON.stringify(answers, null, '  '));
  console.log('Thank you for using our service');
  console.log('You will receive an email confirmation soon');
});