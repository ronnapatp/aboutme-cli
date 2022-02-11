#!/usr/bin/env node

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
    console.log(`\nThanks for looking around \n\nIf you have any idea or find bug you can report on https://github.com/ronnapatp`)
    process.exit(1);
}


async function name() {
    const spinner = createSpinner('Finding answer').start();
    await sleep2

    spinner.success({ text: `\nMy name is Ronnapat Srivoravilai\nThanks for the question\n`})

    await choose();
}

async function bd() {
    const spinner = createSpinner('Finding answer').start();
    await sleep2

    spinner.success({ text: `\nMy day of birth is 24 May 2009\nThanks for the question\n`})

    await choose();
}

async function school() {
    const spinner = createSpinner('Finding answer').start();
    await sleep2

    spinner.success({ text: `\nMy school is satit chula\nThanks for the question\n`})

    await choose();
}

async function skill() {
    const spinner = createSpinner('Finding answer').start();
    await sleep2

    spinner.success({ text: `\nMy skill is Javascript Typescript Python HTML CSS\nThanks for the question\n`})

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
    }
}

await welcome();
await askName();
await choose();