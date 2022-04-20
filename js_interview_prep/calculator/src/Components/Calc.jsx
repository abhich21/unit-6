
import React from "react";
import { TextField } from "@mui/material";
import { Button , Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class Calculator extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
    };
  }

  //when (+ - * /) key is pressed
  whenOperationKeyPressed = (event) => {
    let inputString = this.state.expression;
    if (inputString !== "" && inputString.length > 0) {
      let lastIndexChar = inputString.charAt(inputString.length - 1);
      if (lastIndexChar !== event.currentTarget.value && lastIndexChar.match(/^([0-9])$/)) {
        inputString = this.state.expression + event.currentTarget.value;
        this.setState({ expression: inputString });
      }
    }
  };

  //when number keys are pressed
  whenNumberKeyPressed = (event) => {
    let inputString = this.state.expression + event.currentTarget.value;
    this.setState({ expression: inputString });
  };

   
  //to calculate final output when (=) key is pressed
  calculateFinalValue = () => {
    let inputExpression = this.state.expression;
    if (inputExpression !== "" && inputExpression.length > 0) {
      let lastIndexChar = inputExpression.charAt(inputExpression.length - 1);
      if (!lastIndexChar.match(/^([0-9])$/)) {
        inputExpression = inputExpression.substring(0, inputExpression.length - 1);
      }
      //using eval() to evaluate the mathematical expression
      let finalOutput = eval(inputExpression);
      this.setState({ expression: finalOutput.toString() });
    }
  };

  //when (AC) key is pressed to clear the field
  whenResetBtnPressed = () => {
    this.setState({ expression: "" });
  };

   
   render(){ return( <React.Fragment>

      <AppBar position="relative">
        <Toolbar sx={{ height:"100px"}} >
          <CalculateIcon sx={{ mr: 2 , fontSize:"50px"}} />
          <Typography margin={"auto"} variant="h4" color="inherit"  noWrap>
           MY FIRST CALCULATOR WITH REACT.JS
          </Typography>
        </Toolbar>
      </AppBar>

     <Box sx={{margin:"auto" , height:"390px", width:"272px", marginTop:"50px" , border:"5px solid  #1976d2" , borderRadius:"20px" , padding:"10px" }}>
     <table>
      <thead>
     <tr>
            <td colSpan="4">
              <TextField
              sx={{color:"red"}}

              id="standard-basic"
               label="Enter Number here...." 
               variant="standard"
                type="text"
                fullWidth
                value={this.state.expression}
                margin="normal"
                style={{ fontSize: "70px" }}
              />
            </td>
          </tr>
          </thead>
          <tbody >
          <tr>
            <td>
              <Button sx={{padding:"10px", backgroundColor:"red" , fontSize :"30px"}} variant="contained" color="primary" onClick={this.whenResetBtnPressed}>
                AC
              </Button>
            </td>
            <td>
              <Button
               sx={{padding:"10px" , fontSize :"30px"}}
                type="submit"
                variant="contained"
                color="primary"
                value="0"
                onClick={this.whenNumberKeyPressed}
              >
                0
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="/"
                onClick={this.whenOperationKeyPressed}
              >
                <span>&#247;</span>
              </Button>
            </td>

            <td>
              <Button sx={{height:"70px"}}
                variant="contained"
                color="primary"
                value="*"
                onClick={this.whenOperationKeyPressed}
                startIcon={<CloseIcon/>}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                type="submit"
                variant="contained"
                color="primary"
                value="1"
                onClick={this.whenNumberKeyPressed}
              >
                1
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="2"
                onClick={this.whenNumberKeyPressed}
              >
                2
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="3"
                onClick={this.whenNumberKeyPressed}
              >
                3
              </Button>
            </td>
            <td>
              <Button sx={{height:"70px"}}
                variant="contained"
                color="primary"
                value="-"
                onClick={this.whenOperationKeyPressed}
                startIcon={<RemoveIcon/>}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="4"
                onClick={this.whenNumberKeyPressed}
              >
                4
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="5"
                onClick={this.whenNumberKeyPressed}
              >
                5
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="6"
                onClick={this.whenNumberKeyPressed}
              >
                6
              </Button>
            </td>
            <td>
              <Button sx={{height:"70px"}}
                variant="contained"
                color="primary"
                value="+"
                onClick={this.whenOperationKeyPressed}
                startIcon={<AddIcon/>}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="7"
                onClick={this.whenNumberKeyPressed}
              >
                7
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="8"
                onClick={this.whenNumberKeyPressed}
              >
                8
              </Button>
            </td>
            <td>
              <Button sx={{padding:"10px" , fontSize :"30px"}}
                variant="contained"
                color="primary"
                value="9"
                onClick={this.whenNumberKeyPressed}
              >
                9
              </Button>
            </td>
            <td>
              <Button sx={{height:"70px"}} variant="contained" color="primary" onClick={this.calculateFinalValue}>
                <span style={{ marginLeft: "-10%" }}>{<DragHandleIcon/>}</span>
              </Button>
            </td>
          </tr></tbody>
        </table></Box>
        <Box>
          <Typography sx={{marginTop:"50px"}} variant="h5">Welcome</Typography>
          <Typography variant="p">Privacy | Policy | Sitemap </Typography>
        </Box>
     </React.Fragment>
   )}






}

export default  Calculator

