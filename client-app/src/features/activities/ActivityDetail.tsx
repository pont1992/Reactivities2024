import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Activity } from '../../app/models/activity';
import { CardMedia } from '@mui/material';

interface Props
{
    activity: Activity
    cancelSelectedActivity: () => void
    enableEditMode: (id: string) => void
}

function ActivityDetail({ activity, cancelSelectedActivity, enableEditMode }: Props)
{
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
                component="img"
                height="194"
                image={`/assets/Images/categoryImages/${activity.category}.jpg`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.date}
                </Typography>
                <Typography variant="body1" component="p" sx={{ mt: 1 }}>
                    {activity.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Category: {activity.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Located in {activity.city} at {activity.venue}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" color="primary" onClick={() => enableEditMode(activity.id)}>
                        Edit
                    </Button>
                    <Button size="small" color="secondary" onClick={() => cancelSelectedActivity()}>
                        Cancel
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ActivityDetail;
