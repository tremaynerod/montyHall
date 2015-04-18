var switchWins = 0;
var reps = 1000;

for(var i=0; i<reps; i++){
	montyHallWinCalc([1,2,3]);
};

console.log("switch winning percentage: " + switchWins/reps + "     no-switch winning percentage: " + (reps-switchWins)/reps);

function montyHallWinCalc(doors){
	var winningDoor = Math.ceil(Math.random()*doors.length);
	var originallyChosenDoor = Math.ceil(Math.random()*doors.length);
	var indexesOfDoorsICanRemove = [];
	
	//remove a losing door
	for(var i=0; i<doors.length; i++){
		if(doors[i] != winningDoor && doors[i] != originallyChosenDoor)
			indexesOfDoorsICanRemove.push(i);
	}											//pick from the doors I can remove randomly
	var indexOfDoorToRemove = indexesOfDoorsICanRemove[Math.ceil(Math.random()*indexesOfDoorsICanRemove.length)-1];
	doors.splice(indexOfDoorToRemove, 1);

	//switch doors
	doors.splice(doors.indexOf(originallyChosenDoor), 1);
	var newlyChosenDoor = doors[0];
	
	//check for win
	if(newlyChosenDoor == winningDoor)
		switchWins = switchWins + 1;
};