#!/usr/bin/env python3
"""
You Build It Challenge - Python CLI Template
"""

import argparse
import sys
from pathlib import Path


def process_file(filepath: str, verbose: bool = False) -> None:
    """Process a single file."""
    try:
        path = Path(filepath)
        if not path.exists():
            print(f"Error: File '{filepath}' not found", file=sys.stderr)
            return
            
        if verbose:
            print(f"Processing file: {filepath}")
            
        # TODO: Implement your challenge logic here
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            print(f"File content length: {len(content)} characters")
            
    except Exception as e:
        print(f"Error processing file '{filepath}': {e}", file=sys.stderr)


def main() -> None:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description='CLI implementation for You Build It challenge'
    )
    
    parser.add_argument(
        'files',
        nargs='*',
        help='files to process'
    )
    
    parser.add_argument(
        '-v', '--verbose',
        action='store_true',
        help='enable verbose output'
    )
    
    parser.add_argument(
        '--version',
        action='version',
        version='%(prog)s 1.0.0'
    )
    
    args = parser.parse_args()
    
    if args.verbose:
        print("Verbose mode enabled")
    
    print("Hello from You Build It challenge!")
    
    if not args.files:
        print("No files provided")
        return
    
    for file in args.files:
        process_file(file, args.verbose)


if __name__ == '__main__':
    main()