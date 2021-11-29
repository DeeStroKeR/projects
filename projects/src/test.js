const getBranchFiles = async (defaultBranch?:string, path?:string) => {
        setIsFilesLoading(true);
        await axios.get<BranchFiles>(`${process.env.REACT_APP_API_LINK}projects/${projectName}/repositories/${repositoryName}/tree/${branch || defaultBranch}/?path=/${path || ''}`)
            .then((response) => {
                setFiles(response.data)
            })

            .catch((error:string) => {
                setError(error.message);
                messageService.error("Server Error", error.message)
            })
            .finally(() => setIsFilesLoading(false));
    }

    123
    4234
    55
