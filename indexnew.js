var mysql=require('mysql');
var fs = require('fs');
const tables = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

var teamID,memberID;

var connection=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'1234',
	database:'details'
	
});
var assignMarks;
var id;
var returnVal={
	HighestMemMarks:"",
	OtherMemMarks:"",
	teamMarks:""

};
connection.connect(function(error){
		if(error)
			{console.log(error);
			
			}});
var assignTeamMarks=function (idNo){
		
		var fetchTeamID="SELECT teamId FROM "+tables.team +" WHERE memberID = \'"+idNo+"\'";
		
			connection.query(fetchTeamID, function(err, rows, fields){
				//if(rows.length!=0)
				{	console.log(rows);
					teamID=rows[0];
					console.log(teamID.teamId);
					teamID=teamID.teamId;
						var fetchMemberID="SELECT * FROM "+tables.team+"  WHERE teamId = \'"+teamID+"\'and memberID <>\'"+idNo+"\'";
		
					connection.query(fetchMemberID, function(err, rows, fields){
						//if(rows.length!=0)
						{	console.log(rows);
							memberID=rows[0].memberID;
							var fetchMemberMarks="SELECT * FROM "+ tables.evaluation+"  WHERE memberID = \'"+memberID+"\' or memberID = \'"+idNo+"\'";
					connection.query(fetchMemberMarks, function(err, rows, fields){
						console.log(rows);
							var data1=rows[0],data2=rows[1];
								console.log(data2);
								if(data1.marks>=data2.marks)
								{assignMarks=data1.marks;
								id=data2.memberID;
									 returnVal={
													HighestMemMarks:data1.marks,
													OtherMemMarks:data2.marks,
													teamMarks:assignMarks

												};
								}
							else
								{assignMarks=data2.marks;
								id=data1.memberID;
									returnVal={
													HighestMemMarks:data2.marks,
												OtherMemMarks:data1.marks,
													teamMarks:assignMarks

												};
								}
								console.log(assignMarks);

								var assign="UPDATE "+ tables.evaluation+" SET marks=\'"+assignMarks+"\' WHERE memberID=\'"+memberID+"\'" ;
         			 connection.query(assign, function(err, rows, fields) {if(err) console.log(err);});
				
						
					});


						}});

					





				}});
		
			
					
			return returnVal;
		}

module.exports = {
    assignTeamMarks: assignTeamMarks
};


