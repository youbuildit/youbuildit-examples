# JavaScript CLI Template

A basic template for building command-line tools with Node.js for You Build It challenges.

## Features

- ✅ Command-line argument parsing with [Commander.js](https://github.com/tj/commander.js/)
- ✅ Testing setup with [Jest](https://jestjs.io/)
- ✅ Linting with [ESLint](https://eslint.org/)
- ✅ Executable binary setup
- ✅ Basic project structure

## Getting Started

1. **Copy this template:**
   ```bash
   cp -r templates/javascript/basic-cli ./my-challenge
   cd my-challenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update package.json:**
   - Change the `name` field
   - Update `description`
   - Set your `author` information

4. **Make the script executable:**
   ```bash
   chmod +x src/index.js
   ```

## Usage

### Development
```bash
# Run directly
npm start

# Run with arguments
npm start -- file1.txt file2.txt

# Run with options
npm start -- --verbose file.txt
```

### Testing
```bash
# Run tests
npm test

# Watch mode
npm test:watch
```

### Linting
```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Install as CLI tool (optional)
```bash
# Install globally
npm install -g .

# Now you can use it directly
challenge file1.txt --verbose
```

## Project Structure

```
├── package.json          # Project configuration
├── src/
│   └── index.js          # Main CLI script
├── tests/
│   └── index.test.js     # Basic tests
└── README.md             # This file
```

## Customization

### Adding new options
Edit `src/index.js` and add new options using Commander.js:

```javascript
program
  .option('-n, --number <value>', 'a number option')
  .option('-f, --flag', 'a boolean flag')
```

### Adding new commands
For more complex CLIs with subcommands:

```javascript
program
  .command('process')
  .description('process files')
  .argument('<file>', 'file to process')
  .action((file) => {
    console.log(`Processing ${file}`);
  });
```

### Error handling
Add proper error handling for file operations:

```javascript
const fs = require('fs');

try {
  const content = fs.readFileSync(filename, 'utf8');
  // Process content
} catch (error) {
  console.error(`Error reading file: ${error.message}`);
  process.exit(1);
}
```

## Common Challenge Patterns

### File Processing
```javascript
const fs = require('fs');
const path = require('path');

function processFile(filename) {
  try {
    const content = fs.readFileSync(filename, 'utf8');
    // Your processing logic here
    return content;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
```

### Stream Processing
```javascript
const fs = require('fs');
const readline = require('readline');

async function processFileLineByLine(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    // Process each line
    console.log(line);
  }
}
```

## Next Steps

1. Replace the placeholder logic in `src/index.js` with your challenge implementation
2. Add specific tests for your challenge requirements
3. Update this README with challenge-specific information
4. Consider adding configuration files (.eslintrc.js, jest.config.js) for more complex projects

Happy coding! 🚀