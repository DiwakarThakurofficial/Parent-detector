const { SerialPort, ReadlineParser } = require('serialport');
const { exec } = require('child_process');
const path = require('path');

const COM_PORT = 'COM3'; //change to your COM PORT
const BAUD_RATE = 9600;

const port = new SerialPort({ path: COM_PORT, baudRate: BAUD_RATE });
const parser = new ReadlineParser();

port.pipe(parser);

parser.on("data", (line) => {
    exec('C://Users//pc//OneDrive//Documents//AutoHotkey//ParentDetector'); //change to your autohotkey location
    console.log(line);
});

console.log(`Example app is listen on port ${SerialPort9({ path: COM_PORT, baudRate: BAUD_RATE})}`)


