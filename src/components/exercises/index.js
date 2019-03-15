import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core'

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflow: 'auto'
    }
}

export default ({ exercises }) => (
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => (
                    <Fragment>

                        <Typography variant="headline" style={{ textTransform: 'capitalize' }}>
                            {group}
                        </Typography>
                        <List component="nav">
                            {exercises.map(({ title }) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>

                            )}
                        </List>
                    </Fragment>
                ))}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="display1"
                    style={{ marginBottom: 20 }}
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                >
                    Please select and exercise from the list on the left
                </Typography>
            </Paper>
        </Grid>

    </Grid>
)