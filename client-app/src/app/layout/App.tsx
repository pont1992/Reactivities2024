import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/ActicityDashboard';
import Navbar from '../../components/NavBar';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';

function App()
{
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() =>
  {
    agent.Activities.list().then(response =>
    {
      console.log(response);
      setActivities(response);
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
