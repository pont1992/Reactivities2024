import { Activity } from '../../app/models/activity';
import ActivityList from './ActivitiyList';
import ActivityDetail from './ActivityDetail';
import { Grid } from '@mui/material';
import ActivityForm from './ActivityForm';
import { useState } from 'react';

interface Props
{
    activities: Activity[]
    editActivityForm: (activity: Activity) => void
    deleteActivity: (id: string) => void;
}

function ActivityDashboard({ activities, editActivityForm, deleteActivity }: Props)
{
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    function handleSelectedActivity(id: string)
    {
        setSelectedActivity(activities.find(x => x.id === id));
    }

    function handleCancelSelectedActivity()
    {
        setSelectedActivity(undefined);
    }

    function handleEnableEditMode(id?: string)
    {
        id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
        setEditMode(true);
    }

    function handleDisableEditMode()
    {
        setEditMode(false);
    }

    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ActivityList
                        activities={activities}
                        selectActivity={handleSelectedActivity}
                        deleteActivity={deleteActivity}
                    />
                </Grid>
                <Grid item xs={4}>
                    {selectedActivity && !editMode && <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectedActivity={handleCancelSelectedActivity}
                        enableEditMode={handleEnableEditMode} />}
                    {editMode && <ActivityForm
                        activity={selectedActivity}
                        disableEditMode={handleDisableEditMode}
                        editActivityForm={editActivityForm}
                    />}
                </Grid>

            </Grid>
        </div>);
};

export default ActivityDashboard;