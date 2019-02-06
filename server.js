var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/calculator.html'));
    
    console.log();
});
app.post('/', (req, res) => {
    const expr = req.body.expr;
    
    if(expr)
    {
        var c=0;
        var i=expr.length;
        for(j=0;j<i;j++)
        {
            if(isNaN(expr.charAt(j)))
            {
                c++;
            }
            else
            {
                c=0;
            }
            if(c>=2)
            {
                console.log("Wrong input");
                res.end("Wrong Input");
                break;
            }
            else if(j==i-1)
            {
                
                var g=eval(expr);
                var myCallback = function(data) {
                    console.log(data);
                    
                    res.end(data.toString());
                    
                  };
                  
                  var usingItNow = function(callback) {
                    callback(g);

                  };
                  usingItNow(myCallback);
                console.log("Accepted");
                
                
                
                
            }

        }
    }
    else
    {
        console.log("empty");
    }
    
    
  });
app.listen(8080);
