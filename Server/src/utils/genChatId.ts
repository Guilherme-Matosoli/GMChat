function genChatId(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for(let i = 0; i < 15; i++){
    const randomChar = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomChar);
  };

  return result;
}

console.log(genChatId())