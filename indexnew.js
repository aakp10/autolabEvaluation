/**
*Module requirements and file imports
**/
var mysql=require('mysql');
var fs = require('fs');
//file storing the table names
const tables = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
/*
*creating a mysql server connection handler
*optionally the value t the connection keys can be input frm a config file too
*/
var connection=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'1234',
	database:'details'
		});
//VARIABLES 
var teamID,memberID ,assignMarks, id;
var returnVal={
	HighestMemMarks:"",
	OtherMemMarks:"",
	teamMarks:""

};
//creating a connection to the mysql server
connection.connect(function(error){
		if(error)
			{console.log(error);
			
			}});
/**EXPORTABLE MODULE FUNCTION DEF.
*
********NOTE:for testing purpose cb has been invoked because w/o this callback function the assert function of the chai 
			  executes the return of this function before querying .

****/
var assignTeamMarks=function (idNo,cb){
			//query to featch the team id for the user submitting the code on the basis of idNo
			var fetchTeamID="SELECT teamId FROM "+tables.team +" WHERE memberID = \'"+idNo+"\'";
			//querying the fetchTeamId query
			connection.query(fetchTeamID, function(err, rows, fields){
				//check for no user registered with the given id
				if(rows.length!=0)
				{	
					console.log(rows);
					//fetching the team id from the query results
					teamID=rows[0];
					console.log(teamID.teamId);
					teamID=teamID.teamId;
					//query for fetching the member id of the other member of the pair
					var fetchMemberID="SELECT * FROM "+tables.team+"  WHERE teamId = \'"+teamID+"\'and memberID <>\'"+idNo+"\'";
		
					connection.query(fetchMemberID, function(err, rows, fields){
						if(rows.length>0)
						{	console.log(rows);
							memberID=rows[0].memberID;
							//query for fetching the marks of both the members of the team 
							var fetchMemberMarks="SELECT * FROM "+ tables.evaluation+"  WHERE memberID = \'"+memberID+"\' or memberID = \'"+idNo+"\'";
					connection.query(fetchMemberMarks, function(err, rows, fields){
						console.log(rows);
							var data1=rows[0],data2=rows[1];
								console.log(data2);
								if(data1.marks>=data2.marks)
								{	assignMarks=data1.marks;
									id=data2.memberID;
									//the values are returned for only testing purpose 
									returnVal.HighestMemMarks=data1.marks;
									returnVal.OtherMemMarks=data2.marks;
									returnVal.teamMarks=assignMarks;

											
								}
							else
								{	assignMarks=data2.marks;
									id=data1.memberID;
								
									returnVal.HighestMemMarks=data2.marks;
									returnVal.OtherMemMarks=data1.marks;
									returnVal.teamMarks=assignMarks;
								}
								console.log(assignMarks);
								//query to update the table with the second member's marks
								var assign="UPDATE "+ tables.evaluation+" SET marks=\'"+assignMarks+"\' WHERE memberID=\'"+id+"\'" ;
         			 connection.query(assign, function(err, rows, fields) {if(err) console.log(err);
												cb(returnVal);								
         			 							});
				
						
							});
						}
						else console.log("user without a team");
					});
				}
			else console.log("user without registeration");
		});	
	}

module.exports = {
    assignTeamMarks: assignTeamMarks
};


