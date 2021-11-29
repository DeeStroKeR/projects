const toPullRequest = (id: string) => {
        history.push(`${process.env.PUBLIC_URL}/projects/${projectName}/repositories/${repositoryName}/pullrequests/${id}`);
    }
