import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Activity } from '../../app/models/activity';
import { Box, Button } from '@mui/material';

interface Props
{
    activities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

function ActivityList({ activities, selectActivity, deleteActivity }: Props)
{
    return (
        <List>
            {activities.map((activity) => (
                <React.Fragment key={activity.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={activity.title}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'block' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {activity.date}
                                    </Typography>
                                    <Typography sx={{ display: 'block' }}>{activity.description}</Typography>
                                    <Typography sx={{ display: 'block', fontStyle: 'italic' }}>{activity.category}</Typography>
                                    <Box component="span" sx={{ display: 'block', fontSize: '0.875rem', color: 'gray' }}>
                                        {activity.city}, {activity.venue}
                                        <Button sx={{ float: 'right' }} onClick={() => selectActivity(activity.id)} >View</Button>
                                        <Button sx={{ float: 'right' }} onClick={() => deleteActivity(activity.id)} >Delete</Button>
                                    </Box>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
};

export default ActivityList;
