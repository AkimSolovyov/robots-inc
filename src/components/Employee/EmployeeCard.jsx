import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 290,
    display: 'flex',
    backgroundColor: '#F5F5F5'
  },
  title: {
    marginBottom: 3,
    fontSize: 20,
    fontWeight: 'bold'
  },
  company: {
    fontWeight: 'bold'
  },
  mail: {
    color: 'inherit',
    wordBreak: 'break-all'
  },
  phone: {
    color: 'inherit',
    textDecoration: 'none'
  },
  bigAvatar: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    margin: '15px 0 15px 15px'
  }
};

const EmployeeCard = ({
  classes,
  id,
  first_name,
  last_name,
  avatar,
  email,
  company,
  adress,
  phone
}) => {
  const FullName = `${first_name} ${last_name}`;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.row}>
          <Avatar alt={FullName} src={avatar} className={classes.bigAvatar} />
        </div>
        <CardContent>
          <Typography
            className={classes.title}
            variant="headline"
            component="h5"
          >
            {FullName}
          </Typography>
          <Typography className={classes.company} component="p">
            {company}
          </Typography>
          <Typography component="p">
            <a className={classes.mail} href={`mailto:${email}`}>
              {email}
            </a>
          </Typography>
          <Typography component="p">
            <a className={classes.phone} href={`tel:${phone}`}>
              {phone}
            </a>
          </Typography>
          <Typography component="p">{adress}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(EmployeeCard);
