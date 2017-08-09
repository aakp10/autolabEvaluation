




var mysql=require('mysql');
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
connection.connect(function(error){
		if(error)
			{console.log(error);
			
			}});
var assignTeamMarks=function (args,logger=console){
		console.log(args.idNo);
		var fetchTeamID="SELECT teamId FROM table_team WHERE memberID = \'"+args.idNo+"\'";
		
			connection.query(fetchTeamID, function(err, rows, fields){
				//if(rows.length!=0)
				{	console.log(rows);
					teamID=rows[0];
					console.log(teamID.teamId);
					teamID=teamID.teamId;
						var fetchMemberID="SELECT * FROM table_team WHERE teamId = \'"+teamID+"\'and memberID <>\'"+args.idNo+"\'";
		
					connection.query(fetchMemberID, function(err, rows, fields){
						//if(rows.length!=0)
						{	console.log(rows);
							memberID=rows[0].memberID;
							var fetchMemberMarks="SELECT * FROM table_evaluation WHERE memberID = \'"+memberID+"\' or memberID = \'"+args.idNo+"\'";
					connection.query(fetchMemberMarks, function(err, rows, fields){
						console.log(rows);
							var data1=rows[0],data2=rows[1];
								console.log(data2);
								if(data1.marks>=data2.marks)
								{assignMarks=data1.marks;
								id=data2.memberID;
								}
							else
								{assignMarks=data2.marks;
								id=data1.memberID;
								}
								console.log(assignMarks);

								var assign="UPDATE table_evaluation SET marks=\'"+assignMarks+"\' WHERE memberID=\'"+memberID+"\'" ;
         			 connection.query(assign, function(err, rows, fields) {if(err) console.log(err);});
				
						
					});


						}});

					





				}});
			
			
					
			
		}

module.exports = {
    assignTeamMarks: assignTeamMarks
};


