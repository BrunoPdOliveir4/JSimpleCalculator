# JSimpleCalculator
<p>A simple calculator created with JavaScript/HTML/CSS</p>

 <body>
        <div class="calculator">
    <p id="result"></p>
    <table>
        <tr>
            <td><button class="lines" name="C" onclick="clean()">C</button></td>
            <td><button class="lines" name="<" onclick="delt()"><</button></td>
            <td><button class="lines" name="/" onclick="add('/')">/</button></td>
            <td><button class="lines" name="*" onclick="add('*')">*</button></td>
        </tr>
        <tr>
            <td><button class="lines" name="7" onclick="add('7')">7</button></td>
            <td><button class="lines" name="8" onclick="add('8')">8</button></td>
            <td><button class="lines" name="9" onclick="add('9')">9</button></td>
            <td><button class="lines" name="-" onclick="add('-')">-</button></td>
        </tr>
        <tr>
            <td><button class="lines" name="4" onclick="add('4')">4</button></td>
            <td><button class="lines" name="5" onclick="add('5')">5</button></td>
            <td><button class="lines" name="6" onclick="add('6')">6</button></td>
            <td><button class="lines" name="+" onclick="add('+')">+</button></td>
        </tr>
        <tr>    
            <td><button class="lines" name="1" onclick="add('1')">1</button></td>
            <td><button class="lines" name="2" onclick="add('2')">2</button></td>
            <td><button class="lines" name="3" onclick="add('3')">3</button></td>
            <td rowspan="2"><button class="lines" name="=" onclick="equal()" style="height: 88px;">=</button></td>
        </tr>
        <tr>    
            <td colspan="2"><button class="lines" name="0" onclick="add('0')" style="width: 85px;">0</button></td>
            <td><button class="lines" name="." onclick="add('.')">.</button></td>
        </tr>
    </table>
    </div>
    </table>
    
    

<a><strong>step by step:</strong></a>
# HTML

Well start with a div class to make it easier to edit the CSS
  
    <div class="calculator">
          
Than well have a p id result to write the buttons we are pressing
          
    <p id="result"></p>
           
Than we start a table to organize the buttons: C will clean, < will delete the last number, / divide, * multiply
          
    <table>
        <tr>
            <td><button class="lines" name="C" onclick="clean()">C</button></td>
            <td><button class="lines" name="<" onclick="delt()"><</button></td>
            <td><button class="lines" name="/" onclick="add('/')">/</button></td>
            <td><button class="lines" name="*" onclick="add('*')">*</button></td>
        </tr>


 
Now u should have noticed the numbers and the arithmetic symbols have the same onclick function, should u? it 'coz well use the whole text in operation
 
        <tr>
            <td><button class="lines" name="7" onclick="add('7')">7</button></td>
            <td><button class="lines" name="8" onclick="add('8')">8</button></td>
            <td><button class="lines" name="9" onclick="add('9')">9</button></td>
            <td><button class="lines" name="-" onclick="add('-')">-</button></td>
        </tr>
       
More number and symbols

        <tr>
            <td><button class="lines" name="4" onclick="add('4')">4</button></td>
            <td><button class="lines" name="5" onclick="add('5')">5</button></td>
            <td><button class="lines" name="6" onclick="add('6')">6</button></td>
            <td><button class="lines" name="+" onclick="add('+')">+</button></td>
        </tr>
       
  = with rowspan 
  
        <tr>    
            <td><button class="lines" name="1" onclick="add('1')">1</button></td>
            <td><button class="lines" name="2" onclick="add('2')">2</button></td>
            <td><button class="lines" name="3" onclick="add('3')">3</button></td>
            <td rowspan="2"><button class="lines" name="=" onclick="equal()" style="height: 88px;">=</button></td>
        </tr>
        
  0 with colspan
  
        <tr>    
            <td colspan="2"><button class="lines" name="0" onclick="add('0')" style="width: 85px;">0</button></td>
            <td><button class="lines" name="." onclick="add('.')">.</button></td>
        </tr>
    </table>
    </div>
    
# CSS

.calculator Basic properties of table
    
    position: absolute;
    background-color: aliceblue;
    position: absolute;
    top: 20%;
    left: 40%;
    right: 40%;
    align-items: center;
    


.lines Bottons properties

    background-color: aquamarine;
    width: 40px;
    height: 40px;
    font-size: 15px;
    color: black;

}
.lines:hover When mouses on the button

    background-color: aqua;


#result Id of the result case and properties

    text-align: center;
    background-color: rgb(0,0,0,0.2);
    width: 182px;
    height: 20px;
    margin: 2.5px;
    color: black;
    text-align: left;

   
# JAVASCRIPT

function add(text) This function is an 'onclick=add('value')' for each number button

    var addtext = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= addtext+text;
    

function clean() This function is the 'C' button and the code is 'onclick=clean()'

    document.getElementById('result').innerHTML = '';
    var addtext = null;


function delt() This function is the '<' button to del just the last button clicked, this actually put the number without the lastone, for example= 187 will turn to 18.

    var backs = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = backs.substring(0, backs.length -1)


function equal() This function is the '=' button and will get the text in 'result' and do the calculation

    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result)
    }
    else
    {
        window.alert('Nothing writed!')
    }


 I edited some classes and clear the names to make it easier in english cause i made some mistakes in portuguese and correct this in the second version(now in english)
