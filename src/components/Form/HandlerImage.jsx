
const handlerImage = (file, setIsError, setProgress, setFormValues,formValues,progress,setIsDisabled) =>{
    const fileReader = new FileReader();

    fileReader.onerror = () =>{
        setIsError (true)
    };

    fileReader.onloadstart = (data) => {
        if(fileReader.readyState === 1 ) {
            let progress = parseInt(data.loaded);
            setProgress(progress)
        }
    };

    fileReader.onprogress = (data) =>{
        if(fileReader.readyState === 1) {
            let progress = parseInt((data.loaded / data.total) * 50, 10);
            setProgress(progress)
        }
    };

    fileReader.onloadend = (data) => {
        if(fileReader.readyState === 2) {
            let progress = parseInt((data.loaded / data.total) *100, 10);
            setProgress(progress);
            setFormValues({...formValues, backdrop_path: fileReader.result})
            setIsDisabled(false)
        }
    };
    
    fileReader.readAsDataURL(file)
};

export default handlerImage;
