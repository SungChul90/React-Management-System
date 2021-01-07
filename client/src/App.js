import React from 'react'
import Table from '@material-ui/core/Table'
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 400
  }
})


class App extends React.Component {

  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root} >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? 
            this.state.customers.map(c => {
              return (<Customer 
                key={c.id}
                id={c.id}
                image= {c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />)
            })
            : ""}
            </TableBody>
        </Table>
      </Paper>
  
       
    );
  }
 
}

export default withStyles(styles)(App);
