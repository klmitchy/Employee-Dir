const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your ID?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
      
    ])
    
    .then((answers) => {
    
        fs.writeFile(path.join(__dirname, 'dist/index.html'), generateREADME({...answers}), function(err){
          if (err) {
              console.log(err);
          }
          else{
              console.log('addedData');
          }
      })
  })]
      