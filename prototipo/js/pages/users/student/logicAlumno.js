function getStudentsList() {
  var studentsList = JSON.parse(localStorage.getItem('studentsListLS'));

  if(studentsList == null){
    studentsList= [];
  }
  return studentsList;
}

function registrar(pPersona) {
  var studentsList = getStudentsList();
  studentsList.push(pPersona);
  localStorage.setItem('studentsListLS', JSON.stringify(studentsList));
}

function findById(pId) {
  var studentsList = getStudentsList();
  var studentInfo = studentsList.find(function(std) {
    return std.identification === pId;
  });

  return studentInfo;
}

function updateStudentInfo(pInfo) {
  var studentsList = getStudentsList();
  var stdLength = studentsList.length;
  var foundUser = false;

  for (var i = 0; i < stdLength && !foundUser; i++) {
    if (studentsList[i].id == pInfo.id){
      studentsList[i] = pInfo;
      foundUser = true;
    }
  }

  localStorage.setItem('studentsListLS', JSON.stringify(studentsList));
}

