await axios.post(`${process.env.REACT_APP_API_LINK}projects/${projectName}/repositories/${repositoryName}/commits`, formdata)
    .then(() => {
        messageService.success("Deleted", "File successfully deleted");
        history.push(`${process.env.PUBLIC_URL}/projects/${projectName}/repositories/${repositoryName}`);
    })
    .catch((error) => messageService.error("Error", error.message))
    .finally(() => setIsLoading(false));rrtrtyr
