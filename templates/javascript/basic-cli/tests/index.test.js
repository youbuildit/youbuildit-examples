const { execSync } = require('child_process');
const path = require('path');

describe('Challenge CLI', () => {
  const cliPath = path.join(__dirname, '../src/index.js');
  
  test('should run without arguments', () => {
    const output = execSync(`node ${cliPath}`, { encoding: 'utf-8' });
    expect(output).toContain('Hello from You Build It challenge!');
    expect(output).toContain('No files provided');
  });
  
  test('should process files when provided', () => {
    const output = execSync(`node ${cliPath} file1.txt file2.txt`, { encoding: 'utf-8' });
    expect(output).toContain('Hello from You Build It challenge!');
    expect(output).toContain('Processing: file1.txt');
    expect(output).toContain('Processing: file2.txt');
  });
  
  test('should support verbose flag', () => {
    const output = execSync(`node ${cliPath} --verbose test.txt`, { encoding: 'utf-8' });
    expect(output).toContain('Verbose mode enabled');
    expect(output).toContain('Processing files:');
  });
  
  // TODO: Add more specific tests for your challenge implementation
});