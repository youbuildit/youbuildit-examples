#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('challenge')
  .description('CLI implementation for You Build It challenge')
  .version('1.0.0');

program
  .argument('[files...]', 'files to process')
  .option('-v, --verbose', 'verbose output')
  .action((files, options) => {
    if (options.verbose) {
      console.log('Verbose mode enabled');
      console.log('Processing files:', files);
    }
    
    // TODO: Implement your challenge logic here
    console.log('Hello from You Build It challenge!');
    
    if (files.length === 0) {
      console.log('No files provided');
      return;
    }
    
    files.forEach(file => {
      console.log(`Processing: ${file}`);
      // Add your file processing logic here
    });
  });

program.parse();