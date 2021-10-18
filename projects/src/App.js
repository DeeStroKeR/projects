import { useState, useEffect } from "react";
import Menu from "./components/menu";
import { Button, Icon, Grid, Message } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Folder } from './assets/folderIcon.svg';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 440px)' });
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://yshozfeavf.execute-api.us-east-1.amazonaws.com/frontend/projects")
      .then(res => res.json())
      .then((
          result => {
            setData(result)
          }
        ))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }

  return (
      <Menu>
        <div className="wrapper">
        <Button icon className="add-project">
          <Icon name='plus' />
          <span className="add-project-text">Add Project</span>
        </Button>
        <Grid className="projects" container stackable={isMobile}>
          {!isLoading && data.length ?
            data.map((project, index) => {
              return (
                <Grid.Column computer={4} tablet={5} mobile={8} key={index}>
                  <div className="project">
                    <h2 className="project-header">{project.ProjectName}</h2>
                    <p className="project-description">{project.ProjectDescription}</p>
                    <div className="project-repositories">
                      <Folder className="project-repositories-icon"/>
                      <span className="project-repositories-text">{project.repoCount} Repositories</span>
                    </div>
                  </div>
                </Grid.Column>
              )
            })
            :
            !isLoading && !data.length &&
            <Message className="message">
              <Message.Header>No Projects Found</Message.Header>
              <p>Add New Project</p>
            </Message>
          }
        </Grid>
        {error &&
          <Message negative className="message">
            <Message.Header>Server Error</Message.Header>
            <p>{error}</p>
          </Message>}
        </div>
      </Menu>
  );
}

export default App;
