#!/usr/bin/env node

//  ____                                     _      ____ _     ___ 
// |  _ \ ___  _ __  _ __   __ _ _ __   __ _| |_   / ___| |   |_ _|
// | |_) / _ \| '_ \| '_ \ / _` | '_ \ / _` | __| | |   | |    | | 
// |  _ < (_) | | | | | | | (_| | |_) | (_| | |_  | |___| |___ | | 
// |_| \_\___/|_| |_|_| |_|\__,_| .__/ \__,_|\__|  \____|_____|___|
//                              |_|                                

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


async function welcome() {
  const rainbowTitle = chalkAnimation.karaoke(
    'Ronnapat Srivoravilai but\'s in command line'
  );

  
  await sleep();
  rainbowTitle.stop();
  
  console.log(`
  ${chalk.bgBlue('How to use this command line?')} 
  Select what you want to know about me
  and it will popup the information that you want to know
  If you want to ${chalk.bgRed('Exit')} choose exit one
  `);
  console.log(gradient('cyan', 'blue')('\nVisit my website at https://ronnapat.com'));
}


async function askName() {

    console.log('First let tell me your name')

  const answers = await inquirer.prompt({
    name: 'user_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Users';
    },
  });

  playerName = answers.player_name;
}

async function exit() {
    console.log(figlet.textSync('Thanks for looking around', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true
    }));
    console.log(`\nIf you have any idea or find bug you can report on https://github.com/ronnapatp/aboutme-cli`)
    process.exit(1);
}


async function name() {
    console.log(`\nMy name is Ronnapat Srivoravilai\nThanks for the question\n`)
    
    await sleep2();

    console.clear();

    await choose();
}

async function bd() {
    console.log(`\nMy day of birth is  ${chalk.blue('24 May 2009')}\nThanks for the question\n`)

    await sleep2();

    console.clear();

    await choose();
}

async function school() {
    console.log(`\nMy school is ${chalk.red('satit chula')}\nThanks for the question\n`)

    await sleep2();

    console.clear();

    await choose();
}

async function skill() {
    console.log(`\nMy skill is ${chalk.yellow('Javascript')} ${chalk.blue('Typescript')} ${chalk.yellow('Python')} ${chalk.red(' HTML')} ${chalk.blue('CSS')}\nThanks for the question\n`)

    await sleep2();

    console.clear();

    await choose();
}

async function contact() {
    console.log(`\nYou can contact my by ${chalk.blue('https://ronnapt.com/contact')} or ${ chalk.blue('me@ronnapat.com')}\nThanks for the question\n`)

    await sleep2();

    console.clear();

    await choose();
}

async function choose() {
    const question = await inquirer.prompt({
        name: 'ask',
        type: 'list',
        message: 'What you want to know about me? \n',
        choices: [
          'Name',
          'Day of birth',
          'School',
          'Skill',
          'Contact',
          'Exit'
        ],
    });

    if (question.ask === 'Name'){
        await name();
    } else if (question.ask === 'Day of birth'){
        await bd();
    } else if (question.ask === 'School'){
        await school();
    } else if (question.ask === 'Skill'){
        await skill();
    } else if (question.ask === 'Exit'){
        await exit();
    } else if (question.ask === 'Contact'){
        await contact();
    }
}

await welcome();
await askName();
await choose();