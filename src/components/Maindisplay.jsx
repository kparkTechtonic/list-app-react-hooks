import React, { useContext, useState, useEffect } from 'react';
import { Checkbox, Typography } from 'antd';
import Context from '../Context';
import './Maindisplay.css';
// https://ant.design/components/list/


const Maindisplay = (match) => {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const { state } = useContext(Context);
  const { data } = state;
  const { Title } = Typography;
  const id = (match.location.pathname.split('/:')[1]);

  useEffect(() => {
    setIndeterminate(false);
    setCheckAll(false);
  }, []);

  useEffect(() => {
    // console.log(data ? data[0].listArr : undefined);
  });

  function search(nameKey, myArray) {
    if (!nameKey || !myArray) return undefined;
    for (let i = 0; i < myArray.length; i += 1) {
      if (myArray[i]._id === nameKey) {
        return myArray[i];
      }
    }
    return undefined;
  }
  const singleList = search(id, data);


  const CheckboxGroup = Checkbox.Group;
  const plainOptions = singleList ? singleList.listArr.map(item => item.text) : ['Loading...'];

  function onChange(check) {
    setCheckedList(check);
    setIndeterminate(!!check.length && check.length < plainOptions.length);
    setCheckAll(check.length === plainOptions.length);
  }

  function onCheckAllChange(e) {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  }


  function populateArr(listObj) {
    if (!data) {
      return (<div>Loading...</div>);
    }
    if (typeof listObj !== 'object' || !listObj) {
      return <div>Loading...</div>;
    }
    if (listObj) {
      return (
        <div>
          <Title level={3}>{listObj.title}</Title>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
                Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </div>
      );
    }
    return undefined;
  }

  return (
    <div className="App">
      {populateArr(singleList)}
    </div>
  );
};

export default Maindisplay;
