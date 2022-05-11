function GenHTML(team) {
    //console.log (team);
    const html = [];
    //console.log (html)
    const generateManager = manager => {
        let managerHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.name}</div>
        <div class="card-body">
          <h5 class="card-title">${manager.id}</h5>
          <p class="card-text">${manager.email}</p>
          <p class="card-text">${manager.managerofficenumber}</p>
          </div>
        `;
        html.push(managerHtml);
    };
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.name}</div>
        <div class="card-body">
          <h5 class="card-title">${engineer.id}</h5>
          <p class="card-text">${engineer.email}</p>
          <p class="card-text">${engineer.github}</p>
          </div>
        `;
        html.push(engineerHtml);
    };
    const generateIntern = intern => {
        let internHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.name}</div>
        <div class="card-body">
          <h5 class="card-title">${intern.id}</h5>
          <p class="card-text">${intern.email}</p>
          <p class="card-text">${intern.school}</p>
          </div>
        `;
        html.push(internHtml);
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    return html.join('');
}
    module.exports = team => {
        return
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./dist/style.css">
    <title>Employee Team Roster</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          ${GenHTML(team)}
        </div>
      </div>

      
    
</body>
</html>`;

    };
