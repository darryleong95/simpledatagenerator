import React, { useState } from 'react';
import { Box, makeStyles, Typography, TextField, Select, MenuItem, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f6f6f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 50,
    width: '60%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  numFields: {
    height: '10%',
    width: '100%',
  },
  fieldWrapper: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    height: '65%',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  field: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    display: 'flex'
  },
  buttonWrapper: {
    height: '10%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: '100%',
    height: '80%',
  }
});

const App = () => {

  const classes = useStyles()
  const [numFields, setNumFields] = useState(1)
  const [fields, setFields] = useState([{
    value: '',
    type: 'text',
    constraint: '',
    min: '',
    max: ''
  }])
  const [numRows, setNumRows] = useState(10)

  const changeNumFields = (e) => {
    let val = e.target.value
    if (val > numFields) {
      let newFields = fields
      for (let i = numFields; i < val; i++) {
        newFields.push({
          value: '',
          type: 'text',
          constraint: ''
        })
      }
      setFields(newFields)
    } else {
      let newFields = fields
      for (let i = val; i < numFields; i++) {
        newFields.pop()
      }
      setFields(newFields)
    }
    setNumFields(val)
  }

  const changeValue = (e, i) => {
    let newFields = JSON.parse(JSON.stringify(fields))
    newFields[i].value = e.target.value
    setFields(newFields)
  }

  const changeType = (e, i) => {
    let newFields = JSON.parse(JSON.stringify(fields))
    newFields[i].type = e.target.value
    if (e.target.value == 'date') {
      newFields[i].min = new Date()
      newFields[i].max = new Date()
    }
    setFields(newFields)
  }

  const changeMin = (e, i) => {
    let newFields = JSON.parse(JSON.stringify(fields))
    newFields[i].min = e.target.value
    setFields(newFields)
  }

  const changeMax = (e, i) => {
    let newFields = JSON.parse(JSON.stringify(fields))
    newFields[i].max = e.target.value
    setFields(newFields)
  }

  const generate = () => {
    let data = []
    for (let i = 0; i < numRows; i++) {
      let item = {}
      for (let j = 0; j < numFields; j++) {
        const { min, max, value, type } = fields[j]
        let generatedVal
        if (type == 'text') {
          generatedVal = generateString(parseInt(min), parseInt(max))
        } else if (type == 'int') {
          generatedVal = generateRandomInteger(parseInt(min), parseInt(max))
        } else if (type == 'float') {
          generatedVal = parseFloat(generateRandomFloat(parseInt(min), parseInt(max)))
        } else if (type == 'boolean') {
          let arr = [true, false]
          generatedVal = arr[Math.round(Math.random())]
        } else {
          generatedVal = generateRandomInteger(moment(min).valueOf(), moment(max).valueOf())
        }
        item[value] = generatedVal
      }
      data.push(item)
    }
    data = data.sort(function (a, b) { return a - b });
    convertAndDownload(data)
  }

  const convertAndDownload = (data) => {
    let filename = "data.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(data)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(data));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  const generateRandomFloat = (min, max) => {
    let num = min + Math.random() * (max + 1 - min)
    return num.toFixed(2)
  }

  const generateString = (min, max) => {
    let length = generateRandomInteger(min, max)
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const setDate = (val, i, type) => {
    let newFields = JSON.parse(JSON.stringify(fields))
    if (type == 'min') {
      newFields[i].min = val
    } else {
      newFields[i].max = val
    }
    setFields(newFields)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <Typography className={classes.headerText}>Simple Data Generator</Typography>
        </Box>
        <TextField fullWidth variant="outlined" className={classes.numFields} label={"Number of Fields"} type="number" value={numFields} onChange={changeNumFields} />
        <Box className={classes.fieldWrapper}>
          {
            fields.map((field, index) => {
              return (
                <Box className={classes.field}>
                  <TextField fullWidth label={"Field Name"} variant="outlined" value={field.value} onChange={(e) => changeValue(e, index)} style={{ marginRight: 10, flex: 2 }} />
                  <Select
                    style={{ marginRight: 10, flex: 1, width: 100 }}
                    variant="outlined"
                    value={field.type}
                    onChange={(e) => changeType(e, index)}>
                    <MenuItem value={'text'}>String</MenuItem>
                    <MenuItem value={'int'}>Int</MenuItem>
                    <MenuItem value={'float'}>Float</MenuItem>
                    <MenuItem value={'boolean'}>Boolean</MenuItem>
                    <MenuItem value={'date'}>Date</MenuItem>
                  </Select>
                  {
                    field.type == 'date' ?
                      <Box style={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
                        <DateComponent min={field.min} max={field.max} setDate={setDate} index={index} />
                      </Box> :
                      <Box style={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
                        <TextField disabled={field.type == 'boolean'} type='number' label="min" style={{ marginRight: 10 }} fullWidth variant='outlined' value={field.min} onChange={(e) => changeMin(e, index)} />
                        <TextField disabled={field.type == 'boolean'} type='number' label="max" fullWidth variant='outlined' value={field.max} onChange={(e) => changeMax(e, index)} />
                      </Box>
                  }
                </Box>
              )
            })
          }
        </Box>
        <Box className={classes.buttonWrapper}>
          <TextField fullWidth variant="outlined" label={"Rows"} type="number" value={numRows} onChange={(e) => setNumRows(e.target.value)} style={{ marginRight: 10 }} />
          <Button className={classes.button} variant="contained" color="primary" onClick={generate} style={{ fontWeight: 500 }}>
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}


const DateComponent = (props) => {
  const { setDate, min, max, index } = props
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{ marginRight: 20 }}
        margin="none"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={min}
        onChange={(date) => setDate(date, index, 'min')}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardDatePicker
        margin="none"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={max}
        onChange={(date) => setDate(date, index, 'max')}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
export default App;
