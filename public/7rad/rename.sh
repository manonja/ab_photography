#!/bin/zsh

# Counter for the sequence number
counter=1

# Loop through all jpg files in the current directory, sorted alphabetically
for file in *.jpg(N); do
    # Format the new filename with the counter, keeping the file extension
    new_name=$(printf "abossenbroek-7rad-%05d.jpg" $counter)

    # Rename the file
    mv -- "$file" "$new_name"

    # Increment the counter
    ((counter++))
done

echo "Renaming complete."

