const color = require('chalk')
const { program } = require('commander')
const yargs = require('yargs')
const clipboardy = require('clipboardy')

// Array to generate random password
const arr = [
  'a',
  'b',
  'C',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
const hasCaps = []
for (let i = 0; i < arr.length; i++) {
  hasCaps[i] = arr[i].toUpperCase()
}

// console.log(hasCaps)

const hasHashes = ['@', '%', '!', '&', '$', '^', '#']
const hasNos = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
//  Empty Var to store the password
let passGen = ''

// Vars
let command = yargs.argv.length
let command_1 = yargs.argv.hash
let command_2 = yargs.argv.Number
let command_3 = yargs.argv.Capital

// Some other condition checks
if (command_1) {
  passGen += hasHashes[Math.floor(Math.random() * hasHashes.length)]
}
if (command_2) {
  passGen += hasNos[Math.floor(Math.random() * hasNos.length)]
}

if (command_3) {
  passGen += hasCaps[Math.floor(Math.random() * hasCaps.length)]
}
// Main Logic
for (let i = 0; i < command; i++) {
  passGen += arr[Math.floor(Math.random() * arr.length)]
}

// Condition
if (process.argv[2] === 'generate') {
  console.log(color.green.inverse(`Pass Generated Successfully`))
  console.log(color.cyan(`Your Secured Password: ` + color.yellow(passGen)))
  clipboardy.writeSync(passGen)
  console.log(color.red.inverse(`Copied to Clipboard.`))
}
