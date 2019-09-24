import React from 'react';
import { List, Datagrid, TextField, DateInput, Filter, ReferenceInput, SelectInput, TextInput,Title} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Payments = props => (
    <Card>
        <Title title="My Page" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>

        </CardContent>

        <CardActions>
        <Button size="small" color="primary">
          Search
        </Button>

      </CardActions>
    </Card>
);