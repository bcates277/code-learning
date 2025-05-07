#!/bin/bash
set -e

# Welcome message
echo "Welcome to my script!"

# Read the first line of the changelog
firstline=$(head -n 1 source/changelog.md)

# Split the first line into an array
read -a splitfirstline <<< "$firstline"

# Extract the version number from the array
version=${splitfirstline[1]}

# Display the version being built
echo "You are building version $version"

# Ask the user for confirmation
echo "Would you like to continue? 1 = yes, 0 = no"
read versioncontinue

# Validate user input
if [[ $versioncontinue != 1 && $versioncontinue != 0 ]]; then
  echo "Invalid input. Please enter 1 for yes or 0 for no."
  exit 1
fi

# Proceed if the user confirms
if [ $versioncontinue -eq 1 ]; then
  echo "OK"

  # Copy files from source to build
  for filename in source/*; do
    if [ "$filename" == "source/secretinfo.md" ]; then
      echo "Not copying $filename"
    else
      echo "Copying $filename"
      cp "$filename" build/ || { echo "Failed to copy $filename"; exit 1; }
    fi
  done

  # List the contents of the build directory
  sleep 1
  cd build/
  echo "Build version $version contains:"
  ls -1
else
  echo "Please come back when you are ready"
fi