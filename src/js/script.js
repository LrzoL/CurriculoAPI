Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'svtJD7KBugcmQZT8ZdKGsmYlvWZLOCSbkbG5pbpY', // This is your Application ID
  'mYPLxoy0vxnDEQnYfXOzhTE1bAgwrgZy8ZVVn1Px' // This is your Javascript key
);


const skills_data = Parse.Object.extend("skills_data");

const List = document.getElementById('soft-skills');

const readSkills = async () => {
  const queryList = new Parse.Query(skills_data);

    try {
      const result = await queryList.find();
      List.innerHTML = "";

      for (const resultado of result) {

        const res = resultado.get("skill")
        List.innerHTML += "<li>" + res + '';
      }
    } catch(error){
      console.error("Error while fetching itens", error)
    }
}

readSkills();



