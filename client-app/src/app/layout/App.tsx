import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { Activity } from '../models/activity';
import ActivityList from '../../features/activities/ActivitiyList';
import ActivityDashboard from '../../features/activities/ActicityDashboard';
import Navbar from '../../components/NavBar';
import { v4 as uuid } from 'uuid';

function App()
{
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() =>
  {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response =>
    {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  function handleEditActivity(activity: Activity)
  {
    setActivities([...activities.filter(x => x.id !== activity.id), activity]);
  }

  function handleCreateActivity(activity: Activity)
  {
    setActivities([...activities, { ...activity, id: uuid() }]);
  }

  function handleOpenActivityForm(): void
  {
    throw new Error('Function not implemented.');
  }

  function handleDeleteActivity(id: string)
  {
    setActivities([...activities.filter(x => x.id !== id)]);
  }

  return (
    <div className="App">
      <Navbar openActivityForm={handleOpenActivityForm} />
      <ActivityDashboard
        activities={activities}
        editActivityForm={handleEditActivity}
        deleteActivity={handleDeleteActivity} ></ActivityDashboard>
      <Button>test</Button>
    </div >
  );
}

export default App;
