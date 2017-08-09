
const prog = require("caporal");
const assignMarks = require("./index.js");

prog
    .version("1.0.0")
    .description("Team wise marks allocation")
    .argument("<idNo>", "id of the person submitting the code")
    .action(function(args, options, logger) {
        assignMarks.assignTeamMarks(args,logger);
    });

prog.parse(process.argv);