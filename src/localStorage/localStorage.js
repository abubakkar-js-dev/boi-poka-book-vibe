const getReadListFromLS = ()=>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        const readList = JSON.parse(storedReadList);
        return readList;
    }else{
        return [];
    }
}

const addReadListToLS = (id)=>{
    const storedReadList = getReadListFromLS();
    if(storedReadList.includes(id)){
        // do not add if id is already exist
        console.log(id,'is already exist.');
    }else{
    // pust the id if not exist
    storedReadList.push(id);
    // then convert it jsob string and add to the ls
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem('read-list',storedReadListStr);
    }
}

export {getReadListFromLS,addReadListToLS};