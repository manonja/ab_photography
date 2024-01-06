#!/bin/zsh

# Check if the required arguments are provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 [directory] [prefix]"
    exit 1
fi

# Assign arguments to variables
directory=$1
prefix=$2

# Change to the specified directory
cd "$directory" || exit

# Counter for the sequence number
counter=1

# Loop through all jpg files in the specified directory, sorted alphabetically
for file in *.jpg(N); do
    # Format the new filename with the prefix and the counter, keeping the file extension
    new_name="abossenbroek-${prefix}-$(printf "%05d.jpg" $counter)"

    # Rename the file
    mv -- "$file" "$new_name"

    # Increment the counter
    ((counter++))
done

echo "Renaming complete."

