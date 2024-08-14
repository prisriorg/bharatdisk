function generateUniqueRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    const timestamp = Date.now().toString(36); // Adding a timestamp component for additional uniqueness
  
    // Generate a random string of the specified length
    for (let i = 0; i < length - timestamp.length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    result += timestamp; // Append the timestamp to ensure uniqueness
  
    // Check if the generated string is unique
    // if (generatedStrings.has(result)) {
    //   // If not unique, recursively generate a new one
    //   return generateUniqueRandomString(length);
    // }
  
    // generatedStrings.add(result);
     // Store the generated string
    return result;
  }
export default generateUniqueRandomString