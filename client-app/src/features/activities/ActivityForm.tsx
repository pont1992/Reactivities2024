import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Activity } from "../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props
{
    activity: Activity | undefined
    disableEditMode: () => void
    editActivityForm: (activity: Activity) => void
}


function ActivityForm({ activity: selectedActivity, disableEditMode, editActivityForm }: Props)
{

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const [activity, selectActivity] = useState(initialState);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>)
    {
        const { name, value } = event.target;
        selectActivity({ ...activity, [name]: value });
        console.log(activity);
    }

    function handleSubmit()
    {
        editActivityForm(activity);
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Create New Activity</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    value={activity.title}
                    onChange={handleInputChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={activity.date}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Description"
                    name="description"
                    value={activity ? activity.description : undefined}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Category"
                    name="category"
                    value={activity ? activity.category : undefined}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="City"
                    name="city"
                    value={activity ? activity.city : undefined}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Venue"
                    name="venue"
                    value={activity ? activity.venue : undefined}
                    onChange={handleInputChange}
                />
                <Box>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Create Activity
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={disableEditMode}
                    >
                        Cancel
                    </Button>
                </Box>

            </Box>
        </Container>)
}


export default ActivityForm;